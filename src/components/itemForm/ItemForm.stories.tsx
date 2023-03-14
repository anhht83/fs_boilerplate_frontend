import { ComponentStory, ComponentMeta } from "@storybook/react";
import ItemForm, { IItemForm } from "./ItemForm";
import { mockItemFormProps } from "./ItemForm.mocks";

export default {
  title: "templates/ItemForm",
  component: ItemForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof ItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ItemForm> = (args) => (
  <ItemForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockItemFormProps.base
} as IItemForm;