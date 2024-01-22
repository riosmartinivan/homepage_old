import React from "react"

interface ILinkWrapper {
  href: string
  ariaLabel: string
  blank?: boolean
  children: React.ReactNode
}

const LinkWrapper = ({ href, ariaLabel, blank, children }: ILinkWrapper) => (
  <a
    css={{
      textDecoration: "none",
      cursor: "pointer",
    }}
    target={blank ? "_blank" : "_self"}
    rel="noreferrer noopener"
    aria-label={ariaLabel}
    href={href}
  >
    {children}
  </a>
)

export default LinkWrapper
