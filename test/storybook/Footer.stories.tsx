import { StoryFn } from "@storybook/react"
import React from "react"
import Footer from "../../src/app/component/layout/footer/Footer"

export default {
  title: "Footer",
  component: Footer,
}

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  copyright: "Copyright © 2023 Phorus Group. All rights reserved.",
  instagramUrl: "https://www.instagram.com/phorus.group",
  twitterUrl: "https://twitter.com/PhorusGroup",
  linkedinUrl: "https://www.linkedin.com/company/phorus.group",
  email: "mailto:contact@phorus.group",
}
