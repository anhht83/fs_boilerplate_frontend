import { ComponentStory, ComponentMeta } from "@storybook/react";
import Countdown, { ICountdown } from "./Countdown";
import { mockCountdownProps } from "./Countdown.mocks";

export default {
  title: "templates/Countdown",
  component: Countdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Countdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCountdownProps.base
} as ICountdown;