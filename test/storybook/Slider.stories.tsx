import { StoryFn } from "@storybook/react"
import Slider from "../../src/app/component/base/slider/Slider"

export default {
  title: "Slider",
  component: Slider,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
const Template: StoryFn<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  slotCoordsInRem: [1, 2, 3, 4, 5, 6, 7, 8],
  selectedSlot: 1,
  heightInRem: 10,
  widthInRem: 1,
}
