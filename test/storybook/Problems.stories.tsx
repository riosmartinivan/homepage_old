import { StoryFn } from "@storybook/react"
import Problems from "../../src/app/component/layout/section/problems/Problems"

export default {
  title: "Problems",
  component: Problems,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
const Template: StoryFn<typeof Problems> = (args) => <Problems {...args} />

export const Default = Template.bind({})
Default.args = {
  problems: [
    {
      title: "Building an in-house IT development team may seem dauting",
      description:
        "Hiring and retaining IT professionals is tough, even more so in remote positions, so not getting it " +
        "right from the start results in high turnover. This is not only costly, but it also translates into " +
        "losing business knowledge and the risk of losing key employees overnight.",
    },
    {
      title: "Building an in-house IT development team may seem dauting",
      description:
        "Hiring and retaining IT professionals is tough, even more so in remote positions, so not getting it " +
        "right from the start results in high turnover. This is not only costly, but it also translates into " +
        "losing business knowledge and the risk of losing key employees overnight.",
    },
    {
      title: "Building an in-house IT development team may seem dauting",
      description:
        "Hiring and retaining IT professionals is tough, even more so in remote positions, so not getting it " +
        "right from the start results in high turnover. This is not only costly, but it also translates into " +
        "losing business knowledge and the risk of losing key employees overnight.",
    },
    {
      title: "Building an in-house IT development team may seem dauting",
      description:
        "Hiring and retaining IT professionals is tough, even more so in remote positions, so not getting it " +
        "right from the start results in high turnover. This is not only costly, but it also translates into " +
        "losing business knowledge and the risk of losing key employees overnight.",
    },
    {
      title: "Building an in-house IT development team may seem dauting",
      description:
        "Hiring and retaining IT professionals is tough, even more so in remote positions, so not getting it " +
        "right from the start results in high turnover. This is not only costly, but it also translates into " +
        "losing business knowledge and the risk of losing key employees overnight.",
    },
    {
      title: "Building an in-house IT development team may seem dauting",
      description:
        "Hiring and retaining IT professionals is tough, even more so in remote positions, so not getting it " +
        "right from the start results in high turnover. This is not only costly, but it also translates into " +
        "losing business knowledge and the risk of losing key employees overnight.",
    },
  ],
  size: {
    xs: {
      paneSize: "16rem",
    },
    sm: {
      paneSize: "22rem",
    },
    md: {
      paneSize: "18rem",
      padding: "3rem",
    },
    lg: {
      paneSize: "24rem",
      padding: "4rem",
    },
    xl: {
      paneSize: "30rem",
    },
    xxl: {
      paneSize: "34rem",
    },
  },
}
