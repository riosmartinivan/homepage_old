import { StoryFn } from "@storybook/react"
import BackgroundHexagons from "../../src/app/component/base/backgroundhexagons/BackgroundHexagons"

export default {
  title: "BackgroundHexagons",
  component: BackgroundHexagons,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
const Template: StoryFn<typeof BackgroundHexagons> = (args) => <BackgroundHexagons {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 10,
  orientation: "left",
  turnedOnHexagons: [1, 2],
  disabledHexagons: [1, 2, 5, 6],
  amount: 8,
}
