import { ComponentStory, ComponentMeta } from "@storybook/react";
import Item, { IItem } from "./Item";
import { mockItemProps } from "./Item.mocks";

export default {
  title: "templates/Item",
  component: Item,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Item>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Item> = (args) => (
  <Item {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockItemProps.base
} as any;