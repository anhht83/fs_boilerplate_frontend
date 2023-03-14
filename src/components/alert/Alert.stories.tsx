import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert, { IAlert } from "./Alert";
import { mockAlertProps } from "./Alert.mocks";

export default {
  title: "templates/Alert",
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAlertProps.base
} as IAlert;