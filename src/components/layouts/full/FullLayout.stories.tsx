import { ComponentStory, ComponentMeta } from "@storybook/react";
import FullLayout, { IFullLayout } from "./FullLayout";
import { mockFullLayoutProps } from "./FullLayout.mocks";

export default {
  title: "layouts/FullLayout",
  component: FullLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof FullLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullLayout> = (args) => (
  <FullLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFullLayoutProps.base
} as IFullLayout;