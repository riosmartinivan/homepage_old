import { StoryFn } from "@storybook/react"
import React from "react"
import AboutUs from "../../src/app/component/layout/section/AboutUs"

export default {
  title: "AboutUs",
  component: AboutUs,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

const Template: StoryFn<typeof AboutUs> = (args) => <AboutUs {...args} />

const testText = {
  title: (
    <>
      But they shouldn&apos;t stop you from <span>achieving your goals</span>
    </>
  ),
  description:
    "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, " +
    "consec tetur adipiscing elit. Lorem ipsum dolor sit amet.",
}

export const Default = Template.bind({})
Default.args = {
  top: testText,
  left: testText,
  right: testText,
}
