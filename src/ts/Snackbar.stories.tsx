import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {SnackBarNotification} from "./libhunam";

export default {
  title: "Hunam/Snackbar",
  component: SnackBarNotification
} as ComponentMeta<typeof SnackBarNotification>

const Template: ComponentStory<typeof SnackBarNotification> = (args) => <SnackBarNotification {...args} />;

export const Success = Template.bind({});
export const Error = Template.bind({});

Success.args = {
  copy: "Success: A story is a function that describes how to render the component in question.",
  theme: "green"
}

Error.args = {
  copy: "A story is a function that describes how to render the component in question.",
  theme: "red"
}