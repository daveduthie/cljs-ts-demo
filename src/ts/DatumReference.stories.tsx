/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from "@storybook/react";
import { MutationContext } from "./MutationContext";
import React from "react";
import { Form } from "antd";
import { data } from "./morkDataV2";
import DatumCompound from "./DatumCompound";
import { instanceCompound } from "./DatumField";
import { identity } from "./next";

export default {
  title: "Genforms v2/Reference",
  component: DatumCompound,
  options: { showPanel: false },
};

export const Reference: Story = (args: any): React.ReactElement => {
  const datumCompound = new DatumCompound(
    args,
    args.fields.map(instanceCompound).filter(identity)
  );
  return (
    <div className="profile-page">
      <Form layout="vertical" className="compound-wrap">
        <MutationContext.Provider value={{ checkValidity: true }}>
          {datumCompound.component()}
        </MutationContext.Provider>
      </Form>
    </div>
  );
};

Reference.storyName = "Reference";
Reference.args = data.datumReference;
Reference.argTypes = {
  fieldName: { description: "-" },
  id: { description: "unique identifier" },
  label: { description: "" },
  cardinality: { description: "Something cardinality" },
  action: { description: "Action button labels for a component" },
  items: { description: "Items denotes related persons for a given client" },
};
Reference.parameters = {
  controls: { expanded: false },
  options: { show: true },
  docs: {
    description: {
      component:
        "A reference picker is a dynamic input that allows the selection of one option(references). The listed options are generated dynamically via graphql and fires a QL mutation after an option is selected/clicked to set the references.",
    },
  },
};
