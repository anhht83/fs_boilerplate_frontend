import { ComponentStory, ComponentMeta } from "@storybook/react";
import BidForm, { IBidForm } from "./BidForm";
import { mockBidFormProps } from "./BidForm.mocks";

export default {
  title: "templates/BidForm",
  component: BidForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof BidForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BidForm> = (args) => (
  <BidForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBidFormProps.base
} as IBidForm;