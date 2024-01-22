import { StoryFn } from "@storybook/react"
import React from "react"
import Header from "../../src/app/component/layout/header/Header"

export default {
  title: "Header",
  component: Header,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

const Template: StoryFn<typeof Header> = (args) => (
  <div css={{ height: "400vh" }}>
    <Header {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  options: [
    { option: "Services", link: "#" },
    { option: "Technologies", link: "#" },
    { option: "About us", link: "#" },
  ],
  logo: {
    link: "#",
    label: "Home",
  },
}
