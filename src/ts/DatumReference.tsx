import { Form, Radio } from "antd";
import React, { ReactElement, useState } from "react";
import { isRequiredCheck } from "./validation";
import { fetchNext_next_DatumReference } from "./__generated__/fetchNext";
import { capitalize } from "./helpers";
import { DatumEdition } from "./__generated__/globalTypes";
import NextDatum from "./__generated__/types";

const InputRef = ({
  datum,
  prefix,
}: {
  datum: fetchNext_next_DatumReference;
  prefix?: string;
}) => {
  const [radioValue, setRadioValue] = useState(datum.refVal?.id);
  const opts = datum.refOptions?.map(({ label, id }) => ({ label, value: id }));
  if (datum.fieldName !== "primaryPerson") return <></>;

  return (
    <Form.Item
      label={capitalize(datum.label)}
      name={prefix ? [prefix, datum.fieldName] : datum.fieldName}
      initialValue={datum.refVal?.id}
      colon={false}
      rules={[
        {
          required: isRequiredCheck(datum.optional),
          message: `Please select your ${datum.label}`,
        },
      ]}
    >
      <Radio.Group
        name={datum.fieldName}
        options={opts}
        value={radioValue}
        onChange={(checked: any) => {
          setRadioValue(checked.target.value);
        }}
      />
    </Form.Item>
  );
};

export default class DatumReference implements NextDatum {
  _datum: fetchNext_next_DatumReference;
  fieldName: string;
  label: string;
  value: string;
  constructor(datum: fetchNext_next_DatumReference) {
    this._datum = datum;
    this.fieldName = datum.fieldName;
    this.label = datum.label;
  }
  componentReadOnly = (): ReactElement => (
    <div className="datum-read-only" key={this._datum.fieldName}>
      <p className="profile-label">{this._datum.label}</p>
      <p className="profile-value">{this.datumVal() ? this.datumVal() : "-"}</p>
    </div>
  );
  datumVal = () => this._datum.refVal?.id;
  mutationFor = (values: any): DatumEdition => {
    return {
      editString: values[this._datum.fieldName] || "",
      fieldName: this._datum.fieldName,
    };
  };
  component = (prefix?: string): ReactElement => {
    return (
      <InputRef key={this._datum.id} datum={this._datum} prefix={prefix} />
    );
  };
}
