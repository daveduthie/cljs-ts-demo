/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DatumCompoundCardinality } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: fetchNext
// ====================================================

export interface fetchNext_next_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface fetchNext_next_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface fetchNext_next_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface fetchNext_next_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface fetchNext_next_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface fetchNext_next_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface fetchNext_next_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (fetchNext_next_DatumMCMulti_options | null)[] | null;
}

export interface fetchNext_next_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumMCSingle_selection = fetchNext_next_DatumMCSingle_selection_DatumSelectionBool | fetchNext_next_DatumMCSingle_selection_DatumSelectionInt | fetchNext_next_DatumMCSingle_selection_DatumSelectionString;

export interface fetchNext_next_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumMCSingle_selection | null;
}

export interface fetchNext_next_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface fetchNext_next_DatumReference_refVal {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
  /**
   * Indicates whether the reference points to a target that exists. 
   * Trivially true except when the target is accessed via a reference.
   */
  exists: boolean;
}

export interface fetchNext_next_DatumReference_refOptions {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
}

export interface fetchNext_next_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: fetchNext_next_DatumReference_refVal | null;
  refOptions: (fetchNext_next_DatumReference_refOptions | null)[] | null;
}

export interface fetchNext_next_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface fetchNext_next_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumSelect_selection = fetchNext_next_DatumSelect_selection_DatumSelectionBool | fetchNext_next_DatumSelect_selection_DatumSelectionInt | fetchNext_next_DatumSelect_selection_DatumSelectionString;

export interface fetchNext_next_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumSelect_selection | null;
}

export interface fetchNext_next_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumSelectCombo_selection = fetchNext_next_DatumSelectCombo_selection_DatumSelectionBool | fetchNext_next_DatumSelectCombo_selection_DatumSelectionInt | fetchNext_next_DatumSelectCombo_selection_DatumSelectionString;

export interface fetchNext_next_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumSelectCombo_selection | null;
}

export interface fetchNext_next_DatumSlider {
  __typename: "DatumSlider";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  default: number | null;
  max: number | null;
  min: number | null;
  sliderVal: number | null;
  step: number | null;
}

export interface fetchNext_next_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface fetchNext_next_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface fetchNext_next_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export interface fetchNext_next_DatumCompound_actions {
  __typename: "HypermediaAction";
  /**
   * A human-readable label. E.g. "Add related person"
   */
  label: string | null;
  /**
   * A machine-readable operation name. E.g. `add`, `set`, `delete`.
   */
  op: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (fetchNext_next_DatumCompound_fields_DatumMCMulti_options | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompound_fields_DatumMCSingle_selection = fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool | fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt | fetchNext_next_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompound_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompound_fields_DatumMCSingle_selection | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumReference_refVal {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
  /**
   * Indicates whether the reference points to a target that exists. 
   * Trivially true except when the target is accessed via a reference.
   */
  exists: boolean;
}

export interface fetchNext_next_DatumCompound_fields_DatumReference_refOptions {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
}

export interface fetchNext_next_DatumCompound_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: fetchNext_next_DatumCompound_fields_DatumReference_refVal | null;
  refOptions: (fetchNext_next_DatumCompound_fields_DatumReference_refOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompound_fields_DatumSelect_selection = fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool | fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt | fetchNext_next_DatumCompound_fields_DatumSelect_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompound_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompound_fields_DatumSelect_selection | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection = fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool | fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt | fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompound_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompound_fields_DatumSelectCombo_selection | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumSlider {
  __typename: "DatumSlider";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  default: number | null;
  max: number | null;
  min: number | null;
  sliderVal: number | null;
  step: number | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface fetchNext_next_DatumCompound_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type fetchNext_next_DatumCompound_fields = fetchNext_next_DatumCompound_fields_DatumCompound | fetchNext_next_DatumCompound_fields_DatumCheckbox | fetchNext_next_DatumCompound_fields_DatumDate | fetchNext_next_DatumCompound_fields_DatumDecimal | fetchNext_next_DatumCompound_fields_DatumEmail | fetchNext_next_DatumCompound_fields_DatumFuzzyDate | fetchNext_next_DatumCompound_fields_DatumInt | fetchNext_next_DatumCompound_fields_DatumMCMulti | fetchNext_next_DatumCompound_fields_DatumMCSingle | fetchNext_next_DatumCompound_fields_DatumPhone | fetchNext_next_DatumCompound_fields_DatumReference | fetchNext_next_DatumCompound_fields_DatumSaId | fetchNext_next_DatumCompound_fields_DatumSelect | fetchNext_next_DatumCompound_fields_DatumSelectCombo | fetchNext_next_DatumCompound_fields_DatumSlider | fetchNext_next_DatumCompound_fields_DatumText | fetchNext_next_DatumCompound_fields_DatumTextarea | fetchNext_next_DatumCompound_fields_DatumZar;

export interface fetchNext_next_DatumCompound {
  __typename: "DatumCompound";
  label: string | null;
  fieldName: string;
  id: any | null;
  none: boolean | null;
  cardinality: DatumCompoundCardinality | null;
  actions: (fetchNext_next_DatumCompound_actions | null)[] | null;
  fields: (fetchNext_next_DatumCompound_fields | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_actions {
  __typename: "HypermediaAction";
  /**
   * A human-readable label. E.g. "Add related person"
   */
  label: string | null;
  /**
   * A machine-readable operation name. E.g. `add`, `set`, `delete`.
   */
  op: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (fetchNext_next_DatumCompoundCollection_fields_DatumMCMulti_options | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection = fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool | fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt | fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle_selection | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumReference_refVal {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
  /**
   * Indicates whether the reference points to a target that exists. 
   * Trivially true except when the target is accessed via a reference.
   */
  exists: boolean;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumReference_refOptions {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: fetchNext_next_DatumCompoundCollection_fields_DatumReference_refVal | null;
  refOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumReference_refOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection = fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool | fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt | fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompoundCollection_fields_DatumSelect_selection | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection = fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool | fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt | fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo_selection | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumSlider {
  __typename: "DatumSlider";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  default: number | null;
  max: number | null;
  min: number | null;
  sliderVal: number | null;
  step: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type fetchNext_next_DatumCompoundCollection_fields = fetchNext_next_DatumCompoundCollection_fields_DatumCompound | fetchNext_next_DatumCompoundCollection_fields_DatumCheckbox | fetchNext_next_DatumCompoundCollection_fields_DatumDate | fetchNext_next_DatumCompoundCollection_fields_DatumDecimal | fetchNext_next_DatumCompoundCollection_fields_DatumEmail | fetchNext_next_DatumCompoundCollection_fields_DatumFuzzyDate | fetchNext_next_DatumCompoundCollection_fields_DatumInt | fetchNext_next_DatumCompoundCollection_fields_DatumMCMulti | fetchNext_next_DatumCompoundCollection_fields_DatumMCSingle | fetchNext_next_DatumCompoundCollection_fields_DatumPhone | fetchNext_next_DatumCompoundCollection_fields_DatumReference | fetchNext_next_DatumCompoundCollection_fields_DatumSaId | fetchNext_next_DatumCompoundCollection_fields_DatumSelect | fetchNext_next_DatumCompoundCollection_fields_DatumSelectCombo | fetchNext_next_DatumCompoundCollection_fields_DatumSlider | fetchNext_next_DatumCompoundCollection_fields_DatumText | fetchNext_next_DatumCompoundCollection_fields_DatumTextarea | fetchNext_next_DatumCompoundCollection_fields_DatumZar;

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (fetchNext_next_DatumCompoundCollection_items_fields_DatumMCMulti_options | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection = fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool | fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt | fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle_selection | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumReference_refVal {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
  /**
   * Indicates whether the reference points to a target that exists. 
   * Trivially true except when the target is accessed via a reference.
   */
  exists: boolean;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumReference_refOptions {
  __typename: "ClientRelatedPersons";
  /**
   * Human readable description of the reference
   */
  label: string;
  /**
   * What it says on the tin
   */
  id: string;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: fetchNext_next_DatumCompoundCollection_items_fields_DatumReference_refVal | null;
  refOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumReference_refOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection = fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool | fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt | fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect_selection | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection = fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool | fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt | fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo_selection | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumSlider {
  __typename: "DatumSlider";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  default: number | null;
  max: number | null;
  min: number | null;
  sliderVal: number | null;
  step: number | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface fetchNext_next_DatumCompoundCollection_items_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type fetchNext_next_DatumCompoundCollection_items_fields = fetchNext_next_DatumCompoundCollection_items_fields_DatumCompound | fetchNext_next_DatumCompoundCollection_items_fields_DatumCheckbox | fetchNext_next_DatumCompoundCollection_items_fields_DatumDate | fetchNext_next_DatumCompoundCollection_items_fields_DatumDecimal | fetchNext_next_DatumCompoundCollection_items_fields_DatumEmail | fetchNext_next_DatumCompoundCollection_items_fields_DatumFuzzyDate | fetchNext_next_DatumCompoundCollection_items_fields_DatumInt | fetchNext_next_DatumCompoundCollection_items_fields_DatumMCMulti | fetchNext_next_DatumCompoundCollection_items_fields_DatumMCSingle | fetchNext_next_DatumCompoundCollection_items_fields_DatumPhone | fetchNext_next_DatumCompoundCollection_items_fields_DatumReference | fetchNext_next_DatumCompoundCollection_items_fields_DatumSaId | fetchNext_next_DatumCompoundCollection_items_fields_DatumSelect | fetchNext_next_DatumCompoundCollection_items_fields_DatumSelectCombo | fetchNext_next_DatumCompoundCollection_items_fields_DatumSlider | fetchNext_next_DatumCompoundCollection_items_fields_DatumText | fetchNext_next_DatumCompoundCollection_items_fields_DatumTextarea | fetchNext_next_DatumCompoundCollection_items_fields_DatumZar;

export interface fetchNext_next_DatumCompoundCollection_items {
  __typename: "DatumCompoundCollectionItem";
  id: string | null;
  label: string | null;
  fields: (fetchNext_next_DatumCompoundCollection_items_fields | null)[] | null;
}

export interface fetchNext_next_DatumCompoundCollection {
  __typename: "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
  none: boolean | null;
  cardinality: DatumCompoundCardinality | null;
  actions: (fetchNext_next_DatumCompoundCollection_actions | null)[] | null;
  /**
   * Fields for adding an item
   */
  fields: (fetchNext_next_DatumCompoundCollection_fields | null)[] | null;
  items: (fetchNext_next_DatumCompoundCollection_items | null)[] | null;
}

export type fetchNext_next = fetchNext_next_DatumCheckbox | fetchNext_next_DatumDate | fetchNext_next_DatumDecimal | fetchNext_next_DatumEmail | fetchNext_next_DatumFuzzyDate | fetchNext_next_DatumInt | fetchNext_next_DatumMCMulti | fetchNext_next_DatumMCSingle | fetchNext_next_DatumPhone | fetchNext_next_DatumReference | fetchNext_next_DatumSaId | fetchNext_next_DatumSelect | fetchNext_next_DatumSelectCombo | fetchNext_next_DatumSlider | fetchNext_next_DatumText | fetchNext_next_DatumTextarea | fetchNext_next_DatumZar | fetchNext_next_DatumCompound | fetchNext_next_DatumCompoundCollection;

export interface fetchNext {
  next: (fetchNext_next | null)[] | null;
}
