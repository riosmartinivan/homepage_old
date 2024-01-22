"use client"

import React from "react"

import RootProviders from "./component/layout/RootProviders"
import Header from "./component/layout/header/Header"
import Footer from "./component/layout/footer/Footer"
import Head from "./head"

export interface IRootLayout {
  children: React.ReactNode | React.ReactNode[]
}

const headerOptions = [
  { option: "Services", link: "#services" },
  // { option: "Technologies", link: "#technologies" },
  { option: "About us", link: "#about-us" },
]

const RootLayout = ({ children }: IRootLayout) => (
  <html lang="en">
    <Head />
    <body>
      <RootProviders>
        <Header
          options={headerOptions}
          logo={{ link: "https://phorus.group/#home", label: "Home" }}
          contactUsLink="https://phorus.group/#contact"
        />
        {children}
        <Footer
          copyright="Copyright © 2023 Phorus Group. All rights reserved."
          instagramUrl="https://www.instagram.com/phorus.group"
          twitterUrl="https://twitter.com/PhorusGroup"
          linkedinUrl="https://www.linkedin.com/company/phorus.group"
          email="mailto:contact@phorus.group"
        />
      </RootProviders>
    </body>
  </html>
)

export default RootLayout
