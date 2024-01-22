"use client"

import styled from "@emotion/styled"
import { FaLinkedin, FiInstagram, FiTwitter, HiOutlineMail } from "react-icons/all"
import React from "react"

export const Container = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`

interface IBox {
  padding: string
  paddingMd?: string
  reverse?: boolean
}
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: ${({ padding }: IBox) => padding};
  padding-bottom: ${({ padding }: IBox) => padding};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: ${({ reverse }: IBox) => (reverse ? "column-reverse" : "column")};
    justify-content: center;
    gap: ${({ padding }: IBox) => padding};

    ${({ paddingMd }: IBox) => paddingMd && `padding-top: ${paddingMd}`};
    ${({ paddingMd }: IBox) => paddingMd && `padding-bottom: ${paddingMd}`};
  }
`

interface IGrowBox {
  justifyContent?: string
}
export const GrowBox = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }: IGrowBox) => justifyContent ?? "flex-start"};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

export const Line = styled.div`
  border-bottom: solid 1px grey;
  width: 100%;
`

export const Copyright = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.xs};
  text-align: center;
`

const Instagram = ({ className }: { className?: string }) => <FiInstagram className={className} />
export const InstagramIcon = styled(Instagram)`
  color: ${({ theme }) => theme.color.white};
  margin-right: 0.5rem;
  width: 1.5rem;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1.75rem;
  }
`

const Twitter = ({ className }: { className?: string }) => <FiTwitter className={className} />
export const TwitterIcon = styled(Twitter)`
  color: ${({ theme }) => theme.color.white};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1.75rem;
  }
`

const LinkedIn = ({ className }: { className?: string }) => <FaLinkedin className={className} />
export const LinkedInIcon = styled(LinkedIn)`
  color: ${({ theme }) => theme.color.white};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1.75rem;
  }
`

const Mail = ({ className }: { className?: string }) => <HiOutlineMail className={className} />
export const MailIcon = styled(Mail)`
  color: ${({ theme }) => theme.color.white};
  margin-left: 0.5rem;
  width: 1.5rem;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 1.75rem;
  }
`
