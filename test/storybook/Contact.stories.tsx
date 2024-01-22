import { StoryFn } from "@storybook/react"
import Contact from "../../src/app/component/layout/section/contact/Contact"

export default {
  title: "Contact",
  component: Contact,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
const Template: StoryFn<typeof Contact> = (args) => <Contact {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "pepe",
  description: "blublublu",
}
