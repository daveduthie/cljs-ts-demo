import NextDatum from "./types";
import { FormInstance } from "antd/lib/form";
import { useState, useEffect } from "react";

/**
 * The identity function
 */
export function identity<T>(x: T): T {
  return x;
}

function objEq(x: any, y: any): boolean {
  const props: any[] = Object.getOwnPropertyNames(x || {});
  for (const prop in props) {
    if (!y.hasOwnProperty(prop)) {
      return false;
    }
    if (x[prop] !== y[prop]) {
      return false;
    }
  }
  return true;
}

/**
 * Poor man's equality check. Returns true if `x === y` or if both are objects with
 * the same scalar keys. Doesn't handle nested objects.
 * @param x scalar or single-level object
 * @param y scalar or single-level object
 * */
export function eq<T>(x: T, y: T): boolean {
  return (
    x === y || (typeof x === "object" && typeof y === "object" && objEq(x, y))
  );
}

/**
 * Returns an object representing the upstream values of an array of
 * `NextDatum`s. Suitable for resetting an ant form to upstream state.
 * @param data the array of datum instances
 * @returns the upstream value object
 * */
export function valuesFrom(data: NextDatum[]) {
  try {
    return data.reduce(
      (acc: any, datum: NextDatum) => ({
        ...acc,
        [datum.fieldName]: datum.datumVal(),
      }),
      {}
    );
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Resets form state when upstream changes, once `loading` is false.
 * @param form The ant form this field is part of
 * @param datum The datum for which this field is rendered
 * @param loading Whether a mutation is in flight
 * */
export function useBuffering(
  form: FormInstance<any>,
  datum: NextDatum,
  loading: boolean
) {
  const [oldVal, setOldVal] = useState(datum.datumVal());
  useEffect(() => {
    const value = datum.datumVal();
    if (!loading && !eq(oldVal, value)) {
      const name = datum.fieldName;
      form.setFields([{ name, value }]);
      setOldVal(value);
    }
  }, [datum, loading]);
}
