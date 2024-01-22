"use client"

import Image, { StaticImageData } from "next/image"
import styled from "@emotion/styled"

import WhiteIconWhiteBrandHorizontal from "../../../../public/logos/white-icon-white-brand-horizontal.png"
import PrimaryIconWhiteBrandHorizontal from "../../../../public/logos/primary-icon-white-brand-horizontal.png"
import PrimaryIconColoredBrandHorizontal from "../../../../public/logos/primary-icon-colored-brand-horizontal.png"
import WhiteIcon from "../../../../public/logos/white-icon.png"
import PrimaryIcon from "../../../../public/logos/primary-icon.png"
import useMediaQuery from "../../functions/useMediaQuery"
import { useTheme } from "@emotion/react"
import { memo } from "react"

interface IStyledLogo {
  className?: string
  logo: StaticImageData
}

const StyledLogo = ({ className, logo }: IStyledLogo) => <Image className={className} src={logo} alt="Logo" fill />

interface ILogo {
  iconStyle?: "white" | "primary"
  brandStyle?: "white" | "colored" | "gone"
  orientation?: "horizontal"
  size?: string
  responsive?: boolean
}

const BaseLogo = styled(StyledLogo)`
  position: relative !important;
  object-fit: contain;
  width: ${({ size, brandStyle }: ILogo) => {
    if (size) {
      return brandStyle === "gone" ? `calc(${size}/5)` : size
    } else return brandStyle === "gone" ? "2.5rem" : "12.5rem"
  }} !important;

  ${({ transition }: ILogo & { transition?: boolean }) => transition && "transition: max-width 0.4s ease-out"};
`

const Logo = memo(
  ({ iconStyle = "primary", brandStyle = "white", orientation = "horizontal", size, responsive }: ILogo) => {
    const theme = useTheme()
    const matchesMq = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)

    const props: ILogo = {
      iconStyle: iconStyle,
      brandStyle: responsive && matchesMq ? "gone" : brandStyle,
      orientation: orientation,
      size: size,
    }

    let logo: StaticImageData

    if (props.iconStyle === "white" && props.brandStyle === "white" && props.orientation === "horizontal") {
      logo = WhiteIconWhiteBrandHorizontal
    } else if (props.iconStyle === "primary" && props.brandStyle === "white" && props.orientation === "horizontal") {
      logo = PrimaryIconWhiteBrandHorizontal
    } else if (props.iconStyle === "primary" && props.brandStyle === "colored" && props.orientation === "horizontal") {
      logo = PrimaryIconColoredBrandHorizontal
    } else if (props.iconStyle === "white" && props.brandStyle === "gone") {
      logo = WhiteIcon
    } else if (props.iconStyle === "primary" && props.brandStyle === "gone") {
      logo = PrimaryIcon
    } else {
      logo = PrimaryIconWhiteBrandHorizontal
    }

    return <BaseLogo {...props} logo={logo} transition={!(responsive && matchesMq)} />
  },
)

export default Logo
