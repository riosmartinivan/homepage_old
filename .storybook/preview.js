import { theme } from "../src/styles/themes"
import { ThemeProvider } from "@emotion/react"
import { breakpoints, GlobalStyles } from "../src/styles/GlobalStyles";

const customViewports = Object.fromEntries(
  Object.entries(breakpoints).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ]
  }),
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
