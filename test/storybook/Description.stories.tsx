import { StoryFn } from "@storybook/react"
import React from "react"
import Description from "../../src/app/component/layout/section/Description"

export default {
  title: "Description",
  component: Description,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

const Template: StoryFn<typeof Description> = (args) => <Description {...args} />

export const Default = Template.bind({})
Default.args = {
  title: (
    <>
      But they shouldn&apos;t stop you from <span>achieving your goals</span>
    </>
  ),
  description:
    "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, " +
    "consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. " +
    "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec " +
    "tetur adipiscing elit. Lorem ipsum dolor sit amet,",
}
