/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DatumCompoundCardinality } from "./globalTypes";

// ====================================================
// GraphQL query operation: FetchClientRecommendation
// ====================================================

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_recommendationV2_missingClientData_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumReference_refVal {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumReference_refOptions {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_recommendationV2_missingClientData_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumSlider {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_actions {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumReference_refVal {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumReference_refOptions {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSlider {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumCompound | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumCheckbox | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumDecimal | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumEmail | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumFuzzyDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCMulti | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumMCSingle | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumPhone | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumReference | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSaId | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelect | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSelectCombo | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumSlider | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumText | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumTextarea | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields_DatumZar;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound {
  __typename: "DatumCompound";
  label: string | null;
  fieldName: string;
  id: any | null;
  none: boolean | null;
  cardinality: DatumCompoundCardinality | null;
  actions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_actions | null)[] | null;
  fields: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound_fields | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_actions {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumReference_refVal {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumReference_refOptions {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSlider {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumCompound | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumCheckbox | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumDecimal | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumEmail | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumFuzzyDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCMulti | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumMCSingle | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumPhone | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumReference | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSaId | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelect | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSelectCombo | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumSlider | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumText | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumTextarea | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields_DatumZar;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumReference_refVal {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumReference_refOptions {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSlider {
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

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields = FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumCompound | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumCheckbox | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumDecimal | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumEmail | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumFuzzyDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCMulti | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumMCSingle | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumPhone | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumReference | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSaId | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelect | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSelectCombo | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumSlider | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumText | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumTextarea | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields_DatumZar;

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items {
  __typename: "DatumCompoundCollectionItem";
  id: string | null;
  label: string | null;
  fields: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items_fields | null)[] | null;
}

export interface FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection {
  __typename: "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
  none: boolean | null;
  cardinality: DatumCompoundCardinality | null;
  actions: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_actions | null)[] | null;
  /**
   * Fields for adding an item
   */
  fields: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_fields | null)[] | null;
  items: (FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection_items | null)[] | null;
}

export type FetchClientRecommendation_recommendationV2_missingClientData = FetchClientRecommendation_recommendationV2_missingClientData_DatumCheckbox | FetchClientRecommendation_recommendationV2_missingClientData_DatumDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumDecimal | FetchClientRecommendation_recommendationV2_missingClientData_DatumEmail | FetchClientRecommendation_recommendationV2_missingClientData_DatumFuzzyDate | FetchClientRecommendation_recommendationV2_missingClientData_DatumInt | FetchClientRecommendation_recommendationV2_missingClientData_DatumMCMulti | FetchClientRecommendation_recommendationV2_missingClientData_DatumMCSingle | FetchClientRecommendation_recommendationV2_missingClientData_DatumPhone | FetchClientRecommendation_recommendationV2_missingClientData_DatumReference | FetchClientRecommendation_recommendationV2_missingClientData_DatumSaId | FetchClientRecommendation_recommendationV2_missingClientData_DatumSelect | FetchClientRecommendation_recommendationV2_missingClientData_DatumSelectCombo | FetchClientRecommendation_recommendationV2_missingClientData_DatumSlider | FetchClientRecommendation_recommendationV2_missingClientData_DatumText | FetchClientRecommendation_recommendationV2_missingClientData_DatumTextarea | FetchClientRecommendation_recommendationV2_missingClientData_DatumZar | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompound | FetchClientRecommendation_recommendationV2_missingClientData_DatumCompoundCollection;

export interface FetchClientRecommendation_recommendationV2 {
  __typename: "GenericRecommendation";
  id: string;
  title: string;
  description: string | null;
  /**
   * Client profile data that's needed to take up this recommendation, but has not been provided.
   */
  missingClientData: (FetchClientRecommendation_recommendationV2_missingClientData | null)[] | null;
}

export interface FetchClientRecommendation_me_client {
  __typename: "Client";
  /**
   * Client ID. A six character identifier
   */
  id: string | null;
  /**
   * A client's _first_ name.
   */
  firstName: string;
  /**
   * surname. Dave says hi. **hi** [click here](https: // google.com)
   */
  lastName: string;
  /**
   * Email
   */
  email: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_me_clientProfile_datums_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection = FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumReference_refVal {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumReference_refOptions {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_me_clientProfile_datums_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection = FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection = FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumSlider {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_actions {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumReference_refVal {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumReference_refOptions {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSlider {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields = FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumCompound | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumCheckbox | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumDate | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumDecimal | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumEmail | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumFuzzyDate | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCMulti | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumMCSingle | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumPhone | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumReference | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSaId | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelect | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSelectCombo | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumSlider | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumText | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumTextarea | FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields_DatumZar;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompound {
  __typename: "DatumCompound";
  label: string | null;
  fieldName: string;
  id: any | null;
  none: boolean | null;
  cardinality: DatumCompoundCardinality | null;
  actions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_actions | null)[] | null;
  fields: (FetchClientRecommendation_me_clientProfile_datums_DatumCompound_fields | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_actions {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumReference_refVal {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumReference_refOptions {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSlider {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumCompound | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumCheckbox | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumDate | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumDecimal | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumEmail | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumFuzzyDate | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCMulti | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumMCSingle | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumPhone | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumReference | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSaId | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelect | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSelectCombo | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumSlider | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumText | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumTextarea | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields_DatumZar;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumCompound {
  __typename: "DatumCompound" | "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumCheckbox {
  __typename: "DatumCheckbox";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  checkboxVal: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumDate {
  __typename: "DatumDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  dateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumDecimal {
  __typename: "DatumDecimal";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  decimalVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumEmail {
  __typename: "DatumEmail";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  emailVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumFuzzyDate {
  __typename: "DatumFuzzyDate";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  fuzzyDateVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumInt {
  __typename: "DatumInt";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  intVal: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCMulti_options {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCMulti {
  __typename: "DatumMCMulti";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  mcMultiVal: (string | null)[] | null;
  options: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCMulti_options | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle {
  __typename: "DatumMCSingle";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumPhone {
  __typename: "DatumPhone";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  phoneVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumReference_refVal {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumReference_refOptions {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumReference {
  __typename: "DatumReference";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  refVal: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumReference_refVal | null;
  refOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumReference_refOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSaId {
  __typename: "DatumSaId";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  saIdVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect {
  __typename: "DatumSelect";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions {
  __typename: "DatumSelectionBoolOption";
  label: string | null;
  value: boolean | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool {
  __typename: "DatumSelectionBool";
  boolVal: boolean | null;
  boolOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool_boolOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions {
  __typename: "DatumSelectionIntOption";
  label: string | null;
  value: number | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt {
  __typename: "DatumSelectionInt";
  intVal: number | null;
  intOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt_intOptions | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions {
  __typename: "DatumSelectionStringOption";
  label: string | null;
  value: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString {
  __typename: "DatumSelectionString";
  textVal: string | null;
  textOptions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString_textOptions | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionBool | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection_DatumSelectionString;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo {
  __typename: "DatumSelectCombo";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  selection: FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo_selection | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSlider {
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

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumText {
  __typename: "DatumText";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumTextarea {
  __typename: "DatumTextarea";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  textareaVal: string | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumZar {
  __typename: "DatumZar";
  label: string | null;
  fieldName: string;
  id: any | null;
  optional: boolean;
  zarVal: number | null;
}

export type FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields = FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumCompound | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumCheckbox | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumDate | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumDecimal | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumEmail | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumFuzzyDate | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumInt | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCMulti | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumMCSingle | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumPhone | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumReference | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSaId | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelect | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSelectCombo | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumSlider | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumText | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumTextarea | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields_DatumZar;

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items {
  __typename: "DatumCompoundCollectionItem";
  id: string | null;
  label: string | null;
  fields: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items_fields | null)[] | null;
}

export interface FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection {
  __typename: "DatumCompoundCollection";
  label: string | null;
  fieldName: string;
  id: any | null;
  none: boolean | null;
  cardinality: DatumCompoundCardinality | null;
  actions: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_actions | null)[] | null;
  /**
   * Fields for adding an item
   */
  fields: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_fields | null)[] | null;
  items: (FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection_items | null)[] | null;
}

export type FetchClientRecommendation_me_clientProfile_datums = FetchClientRecommendation_me_clientProfile_datums_DatumCheckbox | FetchClientRecommendation_me_clientProfile_datums_DatumDate | FetchClientRecommendation_me_clientProfile_datums_DatumDecimal | FetchClientRecommendation_me_clientProfile_datums_DatumEmail | FetchClientRecommendation_me_clientProfile_datums_DatumFuzzyDate | FetchClientRecommendation_me_clientProfile_datums_DatumInt | FetchClientRecommendation_me_clientProfile_datums_DatumMCMulti | FetchClientRecommendation_me_clientProfile_datums_DatumMCSingle | FetchClientRecommendation_me_clientProfile_datums_DatumPhone | FetchClientRecommendation_me_clientProfile_datums_DatumReference | FetchClientRecommendation_me_clientProfile_datums_DatumSaId | FetchClientRecommendation_me_clientProfile_datums_DatumSelect | FetchClientRecommendation_me_clientProfile_datums_DatumSelectCombo | FetchClientRecommendation_me_clientProfile_datums_DatumSlider | FetchClientRecommendation_me_clientProfile_datums_DatumText | FetchClientRecommendation_me_clientProfile_datums_DatumTextarea | FetchClientRecommendation_me_clientProfile_datums_DatumZar | FetchClientRecommendation_me_clientProfile_datums_DatumCompound | FetchClientRecommendation_me_clientProfile_datums_DatumCompoundCollection;

export interface FetchClientRecommendation_me_clientProfile {
  __typename: "MyClientProfileSection";
  label: string | null;
  name: string | null;
  datums: (FetchClientRecommendation_me_clientProfile_datums | null)[] | null;
}

export interface FetchClientRecommendation_me {
  __typename: "Me";
  id: string | null;
  /**
   * User ID, the identifier used by Auth0
   */
  userId: string | null;
  /**
   * The user's client profile
   */
  client: FetchClientRecommendation_me_client | null;
  clientProfile: (FetchClientRecommendation_me_clientProfile | null)[] | null;
}

export interface FetchClientRecommendation {
  /**
   * Fetch a single recommendation by ID.
   */
  recommendationV2: FetchClientRecommendation_recommendationV2 | null;
  /**
   * Me!
   */
  me: FetchClientRecommendation_me | null;
}

export interface FetchClientRecommendationVariables {
  recID: string;
}
