import { ComponentStory, ComponentMeta } from "@storybook/react";
import List, { IList } from "./List";
import { mockListProps } from "./List.mocks";

export default {
  title: "templates/List",
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => (
  <List {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockListProps.base
} as IList;