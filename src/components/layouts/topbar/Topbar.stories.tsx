import { ComponentStory, ComponentMeta } from "@storybook/react";
import Topbar, { ITopbar } from "./Topbar";
import { mockTopbarProps } from "./Topbar.mocks";

export default {
  title: "templates/Topbar",
  component: Topbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Topbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Topbar> = (args) => (
  <Topbar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTopbarProps.base
} as ITopbar;