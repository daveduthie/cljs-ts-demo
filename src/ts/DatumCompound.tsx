/* eslint-disable lines-between-class-members */
/* eslint-disable camelcase */
import React, { ReactElement, useEffect, useState } from "react";
import { Form, Checkbox, Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { capitalize } from "./helpers";
import {
  DatumCompoundCardinality,
  DatumEdition,
} from "./__generated__/globalTypes";
import { fetchNext_next_DatumCompound } from "./fetchNext";
import { valuesFrom } from "./next";
import { useMutationContext } from "./MutationContext";
import NextDatum from "./__generated__/types";

const NoneWrapper = ({
  datum,
  children,
}: {
  datum: fetchNext_next_DatumCompound;
  children: React.ReactNode;
}) => {
  const { checkValidity } = useMutationContext();

  return (
    <>
      {!datum.none ? (
        <div key={datum.fieldName}>
          {checkValidity && <CheckBoxComponent datum={datum} />}
          <div key={datum.fieldName}>{children}</div>
        </div>
      ) : (
        <div key={datum.fieldName}>
          <CheckBoxComponent datum={datum} />
        </div>
      )}
    </>
  );
};

const InputCompound = ({
  datum,
  compoundFields,
}: {
  datum: fetchNext_next_DatumCompound;
  compoundFields: NextDatum[];
}) => {
  return (
    <>
      {compoundFields?.map((innerDatum) => (
        <div key={innerDatum.fieldName}>
          {innerDatum.component(datum.fieldName)}
        </div>
      ))}
    </>
  );
};

const CheckBoxComponent = ({
  datum,
}: {
  datum: fetchNext_next_DatumCompound;
}) => {
  const { onChange, loading, checkValidity } = useMutationContext();
  const [checkBoxLoader, setCheckBoxLoader] = useState(
    checkValidity === undefined && loading
  );

  const onFinish = async (values: any) => {
    onChange(values);
  };

  useEffect(() => {
    if (!loading) setCheckBoxLoader(false);
  }, [loading]);

  return (
    <div className="compound-form-wrapper record-editor">
      <div className="record-editor-inner">
        <div className="one-more-dont-have">
          <Form.Item name={datum.fieldName} initialValue={datum.none}>
            <>
              {checkBoxLoader ? (
                <Spin
                  size="small"
                  className="mr-10"
                  indicator={<Loading3QuartersOutlined spin />}
                />
              ) : (
                <Checkbox
                  onChange={(value: any) => {
                    setCheckBoxLoader(true);
                    onFinish({
                      fieldName: datum.fieldName,
                      toggleNone: value.target.checked,
                    });
                  }}
                  defaultChecked={datum.none}
                  name={datum.fieldName}
                />
              )}
              {datum.actions.map((action) => {
                if (datum.none && action.op === "set") return action.label;
                else if (!datum.none && action.op === "dontHave")
                  return action.label;
              })}
            </>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

const CompoundComponent = ({
  datum,
  compoundFields,
}: {
  datum: fetchNext_next_DatumCompound;
  compoundFields: NextDatum[];
}) => {
  switch (datum.cardinality) {
    case DatumCompoundCardinality.NONE_OR_ONE:
      return (
        <>
          <p key={datum.id} className="medium medium--muted mt-10 mb-10">
            {capitalize(datum.label)}
          </p>
          <NoneWrapper key={datum.fieldName} datum={datum}>
            <InputCompound datum={datum} compoundFields={compoundFields} />
          </NoneWrapper>
        </>
      );
    default:
      return (
        <>
          <p key={datum.id} className="medium medium--muted mt-10 mb-10">
            {capitalize(datum.label)}
          </p>
          <InputCompound
            key={datum.fieldName}
            datum={datum}
            compoundFields={compoundFields}
          />
        </>
      );
  }
};

const CompoundComponentReadOnly = ({
  datum,
  compoundFields,
}: {
  datum: fetchNext_next_DatumCompound;
  compoundFields: NextDatum[];
}) => {
  return (
    <div key={datum.id}>
      <p key={datum.id} className="medium medium--muted mt-10 mb-10">
        {datum.label}
      </p>
      {datum.cardinality === DatumCompoundCardinality.NONE_OR_ONE && (
        <CheckBoxComponent datum={datum} />
      )}
      {!datum.none &&
        compoundFields?.map((item) => {
          return item.componentReadOnly();
        })}
    </div>
  );
};

export default class DatumCompound implements NextDatum {
  _datum: fetchNext_next_DatumCompound;
  _compoundFields: NextDatum[];
  fieldName: string;
  label: string;
  value: string;
  none: boolean;
  constructor(
    datum: fetchNext_next_DatumCompound,
    compoundFields: NextDatum[] // accept instances to avoid a dependency cycle
  ) {
    this._datum = datum;
    this._compoundFields = compoundFields;
    this.fieldName = datum.fieldName;
    this.label = datum.label;
    this.none = datum.none;
  }
  datumVal = () => valuesFrom(this._compoundFields);
  mutationFor = (values: any): DatumEdition => {
    if (this._datum.none) {
      return null; // toggle none is an immediate mutation, so nothing to do here
    }
    const val = values[this._datum.fieldName];
    return {
      fieldName: this._datum.fieldName,
      editCompound: this._compoundFields.map((innerDatum) =>
        innerDatum.mutationFor(val || {})
      ),
    };
  };
  componentReadOnly = (
    onChange?: (edit: DatumEdition) => void
  ): ReactElement => {
    return (
      <CompoundComponentReadOnly
        key={this._datum.id}
        datum={this._datum}
        compoundFields={this._compoundFields}
      />
    );
  };
  component = (prefix?: string): ReactElement => {
    return (
      <CompoundComponent
        key={this._datum.id}
        datum={this._datum}
        compoundFields={this._compoundFields}
      />
    );
  };
}
