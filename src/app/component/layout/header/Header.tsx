"use client"

import { Container, GrowBox, Nav } from "./Header.styled"
import { Button } from "../../base/Button"
import Logo from "../../base/Logo"
import React, { useEffect, useState } from "react"
import { css, useTheme } from "@emotion/react"
import Heisenberg from "../../base/heisenberg/Heisenberg"
import LinkWrapper from "../../base/LinkWrapper"

export interface IHeader {
  options?: { option: string; link: string }[]
  expand?: boolean
  show?: boolean
  logo: {
    link: string
    label: string
  }
  contactUsLink: string
}

const Header = ({ options = [], expand, show, logo, contactUsLink }: IHeader) => {
  const theme = useTheme()

  const [position, setPosition] = useState(0)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const expanded = (expand !== undefined ? expand : position < 100) && !menuOpen

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY
      setVisible(position > moving)
      setPosition(moving)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [position])

  return (
    <Container expanded={expanded} visible={show !== undefined ? show : visible}>
      <GrowBox reactiveHide>
        <Heisenberg color={expanded ? "white" : "black"} onClick={setMenuOpen} opened={menuOpen} />
      </GrowBox>
      <Nav menuOpen={menuOpen}>
        <LinkWrapper href={logo.link} ariaLabel={logo.label}>
          <Logo
            size={expanded ? "10rem" : "9rem"}
            iconStyle="primary"
            brandStyle={expanded ? "white" : "colored"}
            responsive
          />
        </LinkWrapper>
        <ul>
          {options.map((option) => (
            <li key={option.option}>
              <a
                href={option.link}
                onClick={() => {
                  setMenuOpen(false)
                }}
                css={css`
                  color: ${expanded ? theme.color.white : theme.color.black};
                `}
              >
                {option.option}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
      <GrowBox justifyContent="flex-end">
        <LinkWrapper href={contactUsLink} ariaLabel="Get in Touch">
          <Button fontSize={expanded ? "sm" : "xs"} buttonType={expanded ? "secondary" : "primary"}>
            Get In Touch
          </Button>
        </LinkWrapper>
      </GrowBox>
    </Container>
  )
}

export default Header
