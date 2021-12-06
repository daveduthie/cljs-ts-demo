import { ReactElement } from "react";
import { DatumEdition } from "./globalTypes";

/**
 * Common interface to a Datum's behaviour: extracting upstream values, forming
 * mutations, and rendering.
 * */
export default interface NextDatum {
  /**
   * @returns The upstream value of the datum.
   */
  datumVal(): any;
  /**
   * Generate an edit for this datum.
   * @param values The current values of the ant form, as an object.
   * @returns `NextEdition`
   */
  mutationFor(values: any): DatumEdition;
  /**
   * @param prefix If the component is nested,
   * the `fieldName` of the parent datum.
   */
  component(
    prefix?: string,
    onChange?: (edit: DatumEdition) => void
  ): ReactElement;
  componentReadOnly(onChange?: (edit: DatumEdition) => void): ReactElement;
  /**
   * The datum's unique (within a form) `fieldName`.
   * Used as an ID in a few places.
   */
  fieldName: string;
  label: string;
  // value: string;
}
