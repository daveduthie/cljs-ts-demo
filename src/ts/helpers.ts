import { DatumNoneOrMore, DatumScalar, Datum } from "types/types";
import {
  fetchNext_next_DatumCompoundCollection,
} from "store/graphql/static/__generated__/fetchNext";

export const filterFormFields = (obj: any) => {
  const filteredInputsNames = /half_year|fuzzy/g;
  return Object.keys(obj).reduce((acc: any, curr: string) => {
    if (!curr.match(filteredInputsNames)) {
      return { ...acc, [curr]: obj[curr] };
    } else {
      return { ...acc };
    }
  }, {});
};

export const getObjKeys = (obj: any): string =>
  JSON.stringify(obj).replace(/[":]/gm, " ");

/*
 * Null-safe capitalize
 */
export const capitalize = (s: string): string =>
  s && s.charAt(0).toUpperCase() + s.slice(1);

export const submenuItemExists = (arr: [] | any, item: string): number =>
  arr.length ? arr.filter((f: any) => f.key === item).length : 0;

export const zarFmt = (num: number) =>
  num &&
  new Intl.NumberFormat("en-ZA", { minimumFractionDigits: 2 }).format(num);

export const isStorageSupported: Function = (): boolean => {
  let hasStorage = true;

  try {
    localStorage.setItem("life", "Cheq");
    localStorage.getItem("life");
  } catch (error) {
    hasStorage = false;
  }

  return hasStorage;
};

export const isBoolean = (param: Boolean | String): Boolean =>
  typeof param === "boolean";

export const toggleBoolean = (param: Boolean) => !param;

export const convertBoolStringToBool = (param: string) =>
  ["true", "false"].includes(param) ? JSON.parse(param) : param;

export const shouldRenderTable = (datum: DatumNoneOrMore): boolean => {
  if (datum.cardinality !== "NONE_OR_MORE") return false;

  const checkDecimals: Array<DatumScalar> = datum.fields.filter(
    ({ type }) => type === "DECIMAL"
  );
  if (checkDecimals.length === 0) {
    return false;
  }

  const checkReference: Array<DatumScalar> = datum.fields.filter(
    ({ type }) => type === "REFERENCE"
  );
  if (checkReference.length !== 1) {
    return false;
  }

  const checkOther: Array<DatumScalar> = datum.fields.filter(
    ({ type }) => type !== "REFERENCE" && type !== "DECIMAL"
  );
  if (checkOther.length > 0) {
    return false;
  }

  return true;
};

export const shouldRenderTableV2 = (
  datum: fetchNext_next_DatumCompoundCollection
): boolean => {
  if (datum.cardinality !== "NONE_OR_MORE") return false;

  const checkDecimals = datum.fields.filter(
    ({ __typename }) => __typename === "DatumDecimal"
  );
  if (checkDecimals.length === 0) {
    return false;
  }

  const checkReference = datum.fields.filter(
    ({ __typename }) => __typename === "DatumReference"
  );
  if (checkReference.length !== 1) {
    return false;
  }

  const checkOther = datum.fields.filter(
    ({ __typename }) =>
      __typename !== "DatumReference" && __typename !== "DatumDecimal"
  );
  if (checkOther.length > 0) {
    return false;
  }

  return true;
};

export const findDatum = (datums: Datum[], fieldName: string): Datum =>
  datums.filter((datum) => datum.fieldName === fieldName)[0];

export const isAlmostOneHundred = (x: number): boolean => {
  const epsilon = 0.02;
  return Math.abs(x - 100) < epsilon;
};
