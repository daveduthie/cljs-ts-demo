import React, { ReactElement, ReactNode } from "react";
import { NamePath } from "rc-field-form/lib/interface";
import { ProgressGradient } from "antd/lib/progress/progress";
import { FetchClientRecommendation_me_clientProfile } from "./__generated__/FetchClientRecommendation";
import { DatumEdition } from "./__generated__/globalTypes";
import NextDatum from "./__generated__/types";
import { FormInstance } from "antd/lib/form";

export interface reduxActionType {
  payload: any;
  type: string;
}

export interface InputFieldMap {
  [key: string]: Datum;
}

export interface RecommendationTypePreview {
  id: string;
  isRecommResetLoading: boolean;
  inputFields: any;
  progress: string;
  progressText: string;
  parametersAdvised: any;
  parameters: any;
  title: string;
  mutationParamsField: string;
  mutationField: string;
  mutationInputName: string;
  storedData: string;
  __typename: any;
  type: { inputFields: InputFieldMap };
  form: any;
  isOpaque: boolean;
  copy: any;
  recCardEditActive: string;
  setRecCardEditActive: FunctionStringCallback;
  activeEditableRow: string;
  setActiveEditableRow: FunctionStringCallback;
}

export interface SnackbarType {
  onClosePayload: { isVisible: boolean; copy: string; type: string };
  onRefresh?: Function;
}

export interface PageProps {
  children: ReactNode;
  hideSidebar?: boolean;
  noMargin?: boolean;
}

export interface ClientProfileUpdateType {
  recommID?: string;
  from: string;
  values: any;
}

export interface ContributionsType {
  data: any;
  getFieldDecorator: Function;
}

export interface RecommWizardStepFour {
  data?: any;
  title: string;
  subtitle: string;
  signPages: any;
  copy?: any;
  setCurrent?: Function;
  current?: number;
  next?: number;
  prev?: number;
}

export interface RecommWizardStepOne {
  data: any;
  copy?: any;
  getFieldDecorator: Function;
  validateFields?: Function;
  setCurrent?: Function;
  setRecCardEditActive?: Function;
  next?: number;
  prev?: number;
  setActiveEditableRow?: FunctionStringCallback;
  activeEditableRow?: string;
  refetch?: Function;
}

export interface RecommWizardStep {
  data?: any;
  copy?: any;
  getFieldDecorator: Function;
  setCurrent?: Function;
  next?: number;
  prev?: number;
}

export interface ContributionType {
  id?: string;
  copy: any;
  datumInstance?: NextDatum[];
}

export interface Auth0ContextType {
  isAuthenticated?: boolean;
  user?: any;
  route: any;
  googleLogin?: (...param: any) => any;
  logout?: (...param: any) => any;
  facebookLogin?: (...param: any) => any;
  getToken?: () => any;
}

export interface Auth0ProviderOptionsType {
  children?: React.ReactElement;
}

export interface PersonalInfoFormTypes {
  copy: any;
  isVisible?: boolean;
  info: any;
  setVisible?: (arg: boolean) => void;
  recommID?: string;
  checkValidation?: boolean;
  data?: FetchClientRecommendation_me_clientProfile[];
}

export interface PersonalInfoTypes {
  copy: any;
  form?: any;
  getFieldDecorator: any;
}

export interface PolicyOptionsFormType {
  copy: any;
  data: {
    id: string;
    typeName: string;
    setCurrent: Function;
    next: string;
    prev: string;
  };
}

export interface AuthTypes {
  nextRoute: string;
  isAuthenticated: boolean;
  isAuthInFlight: boolean;
  loginMessage?: any;
  loginStatus?: any;
  resetPasswordErrorLink?: any;
}

export interface RecommStatusType {
  status: string;
}

export interface inputFormFuzzyOption {
  precision: string;
  label: any;
}

export interface inputFormDataOption {
  label: string;
  value: string;
  id?: string | number;
}

export interface CustomFormInputType {
  onChange?: any;
  value?: any;
}

export type HyperMediaActionArg = {
  type: string;
  name: string;
};

export type HyperMediaAction = {
  mutationName: string;
  label: string;
  op: string;
  args: Array<HyperMediaActionArg>;
};

type DatumScalar = {
  type: string; // FIXME: make this an enum?
  cardinality: "SCALAR";
  fieldName: string;
  optional?: null | boolean;
  label: string;
  "sub-label"?: string;
  value?: any;
  refType?: string;
  defaultValue: any;
  options?: inputFormDataOption[];
  actions?: Array<HyperMediaAction>;
};

type DatumNoneOrOne = {
  type: "COMPOUND";
  cardinality: "NONE_OR_ONE";
  fieldName: string;
  optional?: null | boolean;
  label: string;
  "sub-label"?: string;
  value?: any;
  defaultValue: any;
  options?: inputFormDataOption[];
  isDontHaveLoading?: boolean; // TODO: not optional?
  isDontHaveChecked?: boolean;
  fields: Array<DatumScalar>;
  actions?: Array<HyperMediaAction>;
};

type DatumExactlyOne = {
  type: "COMPOUND";
  cardinality: "EXACTLY_ONE";
  fieldName: string;
  optional?: null | boolean;
  label: string;
  "sub-label"?: string;
  value?: any;
  defaultValue: any;
  options?: inputFormDataOption[];
  fields: Array<DatumScalar>;
  actions?: Array<HyperMediaAction>;
};

type DatumNoneOrMore = {
  type: "COMPOUND";
  cardinality: "NONE_OR_MORE";
  fieldName: string;
  optional?: null | boolean;
  label: string;
  "sub-label"?: string;
  value?: any;
  values: null | any[]; // FIXME(dd): array of what?
  defaultValue: any;
  options?: inputFormDataOption[];
  isDontHaveLoading?: boolean; // TODO(dd): is this required or optional?
  isDontHaveChecked?: boolean; // ditto
  fields: Array<DatumScalar>;
  actions?: Array<HyperMediaAction>;
};

type DatumOneOrMore = {
  type: "COMPOUND";
  cardinality: "ONE_OR_MORE";
  fieldName: string;
  optional?: null | boolean;
  label: string;
  "sub-label"?: string;
  value?: any;
  defaultValue: any;
  options?: inputFormDataOption[];
  fields: Array<DatumScalar>;
  actions?: Array<HyperMediaAction>;
};

type Datum =
  | DatumScalar
  | DatumNoneOrOne
  | DatumExactlyOne
  | DatumNoneOrMore
  | DatumOneOrMore;

export interface RenderScalarFieldProps {
  OnChange?: (
    value: number | string,
    datumId: string,
    fieldId?: string
  ) => void;
  OnPressEnter?: (_e: any) => void;
  typeName: string;
  func?: (args: any) => void;
  name?: NamePath;
  values?: null | [];
  fields?: any;
  actions?: [];
  label?: string;
  formData: DatumScalar;
  id?: string;
  fieldId?: string;
  addonBefore?: any;
  className?: string;
  withFormWrapper?: boolean;
  hideLabel?: boolean;
  checkValidation?: boolean;
}

export interface RenderExactlyOneProps {
  datum: DatumExactlyOne;
  IsEditable: boolean;
  OnChange?: (
    value?: number | string,
    datumId?: string,
    fieldId?: string
  ) => void;
}

export interface inputFormType {
  OnChange?: (
    value?: number | string,
    datumId?: string,
    fieldId?: string
  ) => void;
  func?: (args: any) => void;
  name?: NamePath;
  formData: Datum;
  id?: string;
  typeName?: string;
  fieldId?: string;
  addonBefore?: any;
  className?: string;
  withFormWrapper?: boolean;
  OnPressEnter?: any;
  IsEditable?: boolean;
  hideLabel?: boolean;
  checkValidation?: boolean;
}

export interface BadgeType {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  copy: string | ReactNode;
}

export interface AccordionItemType {
  Children: ReactNode;
  title: string | ReactNode;
  openTitle?: string | ReactNode;
}

export interface AccordionType {
  headerBorder?: Boolean;
  items: Array<AccordionItemType>;
  singleVisible: boolean;
}

export interface PrimaryBannerWideType {
  theme: "holistic" | "neutral"; // all options > holistic and neutral
  title: string;
  backgroundURL: string;
  description: string;
}

export interface BannerType {
  theme: "holistic" | "lifestyle" | "tools" | "neutral"; // all options > holistic, lifestyle, tools and neutral
  themeTitle?: string;
  date?: string;
  title: string;
  backgroundURL: string;
  description: string;
  callToActionText?: string;
  callToActionURL?: string;
  backgroundImageSize: "MEDIUM" | "LARGE";
  __typename: string;
}

export interface JumbotronType {
  className?: string;
  title: string;
  desc?: string;
  imageUrl: string;
  highlight?: string[];
  small?: boolean;
  xsImage?: boolean;
  action?: Function;
}

export interface JumbotronCtaType {
  ctaCopy: string;
  ctaUrl: string;
  badgeCopy: string;
  hideMobile?: boolean;
  hideDesktop?: boolean;
}

export interface JumbotronInteractiveType {
  title: string;
  desc: string;
  imageUrl: string;
  ctaCopy: string;
  ctaUrl: string;
  badgeCopy: string;
}

/**
 * @param description plain-text description
 * @param descriptionHtml DEPRECATED: use only when no `description` is available
 * */
export interface ContentCardProps {
  style?: object;
  imgUrl?: string;
  datetime?: string;
  descriptionHtml?: string;
  description?: string;
  heading?: string;
  link?: string;
  header?: (args?: any) => ReactElement;
  footer?: (args?: any) => ReactElement;
  loading?: boolean;
}

export interface SimpleCardType {
  children?: any;
  footer?: any;
  meta?: boolean;
  bordered?: boolean;
  imgSrc?: string;
  title?: string;
  description?: any;
  metaClassName?: string;
  bodyClassName?: string;
  className?: string;
  loading?: boolean;
}

export interface BeneficiaryRootType {
  formData: DatumNoneOrMore | DatumOneOrMore;
}

export interface BeneficiariesCompType {
  onChange?: (arg: any) => void;
  formData: DatumNoneOrMore | DatumOneOrMore;
  id: string;
  columns: any;
  value?: any;
  totalData: any[];
}

export interface BeneficiariesType {
  onChange: (arg: Array<any>) => void;
  recId?: string;
  fieldName: string;
  columns?: any;
  dataSource?: any;
  addAction: HyperMediaAction;
}

export interface BeneficiariesRemoveType {
  onChange: (arg: Array<any>) => void;
  id?: string;
  beneficiaryId?: string;
  columns?: any;
  mutationName: any;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  onChange: any;
  value: [] | any;
  editing: boolean;
  dataIndex: string;
  inputType: "number" | "text";
  record: any;
  index: number;
  children: ReactNode;
}

interface ProgressProps {
  strokeColour?: string | ProgressGradient;
  percent: number;
  copy: ReactElement;
  CTA?: ReactElement;
}

interface DoneProps {
  heading: string;
  ctaURL: string;
  ctaCopy: string;
  linkURL?: string;
  linkCopy?: string;
  bodyCopy: string | ReactElement;
}

interface NotFoundProps {
  imageSrc: string;
  heading: ReactElement;
  copy: string;
  ctaURL?: string;
  ctaCopy?: string;
}

export interface RowToolTipType {
  hasError: boolean;
  sum: number;
}

export interface DontHaveArgsType {
  payload: {
    dontHaveAction: HyperMediaAction;
    id: string;
  };
}
