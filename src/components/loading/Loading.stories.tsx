import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loading, { ILoading } from "./Loading";
import { mockLoadingProps } from "./Loading.mocks";

export default {
  title: "templates/Loading",
  component: Loading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLoadingProps.base
} as ILoading;