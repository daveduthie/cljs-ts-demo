/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 0-1, 0-n, 1, 1-n
 */
export enum DatumCompoundCardinality {
  EXACTLY_ONE = "EXACTLY_ONE",
  NONE_OR_MORE = "NONE_OR_MORE",
  NONE_OR_ONE = "NONE_OR_ONE",
  ONE_OR_MORE = "ONE_OR_MORE",
}

export enum ImageSize {
  LARGE = "LARGE",
  SMALL = "SMALL",
}

/**
 * These states are subject to change.
 * It's probably wise to keep Hunam's exposure to these states contained.
 * 
 * `NEW` -> `SUBMITTED` form a train of states,
 * whereas rejected is in its own category, 
 * and can only be reached via the `rejectRecommendation` mutation
 * 
 * **Note: recommendation parameters can be edited in all of these states
 * except `SUBMITTED` and `REJECTED`.**
 */
export enum RecommendationProgress {
  NEW = "NEW",
  REJECTED = "REJECTED",
  STEP_1 = "STEP_1",
  STEP_2 = "STEP_2",
  STEP_3 = "STEP_3",
  STEP_4 = "STEP_4",
  SUBMITTED = "SUBMITTED",
}

export enum RecommendationProgressUpdateDirection {
  NEXT = "NEXT",
  PREV = "PREV",
}

export enum Themes {
  GOALS = "GOALS",
  RETIREMENT = "RETIREMENT",
  TRAVEL = "TRAVEL",
}

export enum WorksheetState {
  ABANDON = "ABANDON",
  ADVICE_PUBLISHED = "ADVICE_PUBLISHED",
  COMPLETED = "COMPLETED",
  INVITED = "INVITED",
  STARTED_QUESTIONNAIRE = "STARTED_QUESTIONNAIRE",
  SUBMITTED_QUESTIONNAIRE = "SUBMITTED_QUESTIONNAIRE",
}

/**
 * An edit to one datum. Must provide a `fieldName`, and of of the type-specific
 * fields.
 * 
 * The field used to edit a datum is based on the underlying type the field is
 * serialized as. For instance, to edit a text field, email field, or phone field,
 * use `editString`.
 * 
 * To edit `NONE_OR_ONE` and `EXACTLY_ONE` compounds, use `editCompound`.
 * 
 * To edit an item in a collection (`NONE_OR_MORE` and `ONE_OR_MORE`
 * cardinalities), use `addItem`, `editItem`, or `deleteItem`.
 */
export interface DatumEdition {
  addItem?: (DatumEdition | null)[] | null;
  deleteItem?: string | null;
  editBoolean?: boolean | null;
  editCompound?: (DatumEdition | null)[] | null;
  editFloat?: number | null;
  editInt?: number | null;
  editItem?: DatumItemEdition | null;
  editItems?: (DatumItemEdition | null)[] | null;
  editString?: string | null;
  editStrings?: string[] | null;
  fieldName: string;
  toggleNone?: boolean | null;
}

export interface DatumItemEdition {
  edits?: (DatumEdition | null)[] | null;
  id: string;
}

export interface EditDatumsInput {
  edits: (DatumEdition | null)[];
  id?: string | null;
}

export interface EditThemeDatumsInput {
  edits: (DatumEdition | null)[];
  id: Themes;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
