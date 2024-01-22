import { StoryFn } from "@storybook/react"
import Hero from "../../src/app/component/layout/section/hero/Hero"
import React from "react"

export default {
  title: "Hero",
  component: Hero,
}
const Template: StoryFn<typeof Hero> = (args) => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Lorem ipsum dolor sit nsec tetur adipiscing elit",
  description:
    "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. " +
    "Lorem ipsum dolor sit amet, consec tetur adipiscing adipiscing elit. " +
    "Lorem ipsum dolor sit amet.",
}
