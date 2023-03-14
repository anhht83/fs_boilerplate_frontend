import { ComponentStory, ComponentMeta } from "@storybook/react";
import H1, { IH1 } from "./H1";
import { mockH1Props } from "./H1.mocks";

export default {
  title: "templates/H1",
  component: H1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof H1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockH1Props.base
} as IH1;