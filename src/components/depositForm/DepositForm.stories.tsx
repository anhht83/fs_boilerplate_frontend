import { ComponentStory, ComponentMeta } from "@storybook/react";
import DepositForm, { IDepositForm } from "./DepositForm";
import { mockDepositFormProps } from "./DepositForm.mocks";

export default {
  title: "templates/DepositForm",
  component: DepositForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof DepositForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DepositForm> = (args) => (
  <DepositForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDepositFormProps.base
} as IDepositForm;