import { StoryFn } from "@storybook/react"
import Services from "../../src/app/component/layout/section/Services"
import React from "react"

export default {
  title: "Services",
  component: Services,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
const Template: StoryFn<typeof Services> = (args) => <Services {...args} />

export const Default = Template.bind({})
Default.args = {
  services: [
    {
      icon: "box",
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed " +
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
        "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
        "esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: "persons",
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed " +
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
        "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
        "esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: "gears",
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed " +
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
        "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
        "esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: "contract",
      title: "Service 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed " +
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
        "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
        "esse cillum dolore eu fugiat nulla pariatur.",
    },
  ],
}
