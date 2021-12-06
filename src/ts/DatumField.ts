/* eslint-disable camelcase */
import { FormInstance } from "antd/lib/form";
import {
  fetchNext_next,
  fetchNext_next_DatumCompound_fields,
} from "./__generated__/fetchNext";
import { useBuffering, identity } from "./next";
import DatumReference from "./DatumReference";
import NextDatum from "./__generated__/types";

export const instance = (datum: fetchNext_next): NextDatum => {
  switch (datum.__typename) {
    case "DatumReference":
      return new DatumReference(datum);

    default:
      console.warn("Unknown type:", datum.__typename, datum.label);
      return null;
  }
};

export const instanceCompound = (
  datum: fetchNext_next_DatumCompound_fields
): NextDatum => {
  switch (datum.__typename) {
   
    case "DatumReference":
      return new DatumReference(datum);
    case "DatumCompound":
      new Error("never do this!");
    case "DatumCompoundCollection":
      new Error();
    default:
      console.warn("Unknown type:", datum.__typename, datum.label);
      return null;
  }
};

export const Field = ({
  form,
  datum,
  loading,
}: {
  datum: NextDatum;
  form: FormInstance<any>;
  loading: boolean;
}) => {
  useBuffering(form, datum, loading);
  return datum.component();
};
