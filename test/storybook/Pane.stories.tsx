import { StoryFn } from "@storybook/react"
import Pane from "../../src/app/component/base/pane/Pane"

export default {
  title: "Pane",
  component: Pane,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
const Template: StoryFn<typeof Pane> = (args) => <Pane {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Test",
  description:
    "test test test test test test test test test test test test " +
    "test test test test test test test test test test test test " +
    "test test test test test test test test test",
  orientation: "left",
  width: "20rem",
  backgroundYPadding: 1,
}
