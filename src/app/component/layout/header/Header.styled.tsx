"use client"

import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"

interface IContainer {
  expanded?: boolean
  visible?: boolean
}

// noinspection CssReplaceWithShorthandSafely
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  box-sizing: border-box;

  padding-top: ${({ expanded }: IContainer) => (expanded ? "1.25rem" : "0.75rem")};
  padding-bottom: ${({ expanded }: IContainer) => (expanded ? "1.25rem" : "0.75rem")};
  padding-left: 8rem;
  padding-right: 8rem;

  font-size: ${({ expanded, theme }: IContainer & { theme: Theme }) =>
    expanded ? theme.font.size.md : theme.font.size.sm};
  background-color: ${({ expanded, theme }: IContainer & { theme: Theme }) =>
    expanded ? "transparent" : theme.color.white};

  ${({ visible }: IContainer) => (visible ? "" : "transform: translateY(-100%);")}
  transition: all 0.4s ease-in-out;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

interface INav {
  expanded?: boolean
  menuOpen?: boolean
}

export const Nav = styled.nav`
  flex: 1 1 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  & > ul {
    list-style-type: none;
    overflow: hidden;

    & > li {
      float: left;

      & > a {
        text-decoration: none;
        margin-left: 0.5rem;
        margin-right: 0.5em;

        &:hover {
          color: ${({ theme }) => theme.accent};
          text-decoration: underline;
          text-decoration-color: ${({ theme }) => theme.accent};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;

    & > ul {
      position: absolute;
      overflow: hidden;
      width: 70%;
      height: 100%;
      padding: 0 15% 0 15%;
      left: 50%;
      transform: translate(-50%, ${({ menuOpen }: INav) => (menuOpen ? "99%" : "-400%")});
      opacity: ${({ menuOpen }: INav) => (menuOpen ? "1" : "0")};
      transition: all 0.25s ease-in-out;

      background-color: ${({ theme }) => theme.color.white};
      font-size: ${({ theme }) => theme.font.size.md};

      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
`

interface IGrowBox {
  justifyContent?: string
  reactiveHide?: boolean
}

export const GrowBox = styled.div`
  flex: 0.25 1 0;

  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }: IGrowBox) => justifyContent ?? "flex-start"};
  align-items: center;

  ${({ reactiveHide, theme }: IGrowBox & { theme: Theme }) =>
    reactiveHide &&
    css`
      display: none;

      @media (max-width: ${theme.breakpoints.md}) {
        display: flex;
      }
    `};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1 1 0;
  };
}
`
