"use client"

import { theme } from "../../../styles/themes"
import { GlobalStyles } from "../../../styles/GlobalStyles"
import React from "react"
import RootStyleRegistry from "../base/RootStyleRegistry"
import { ThemeProvider } from "@emotion/react"

export interface IWrapper {
  children: React.ReactNode | React.ReactNode[]
}

const RootProviders = ({ children }: IWrapper) => (
  <RootStyleRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </RootStyleRegistry>
)

export default RootProviders
