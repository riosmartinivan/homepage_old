import {
  Box,
  Container,
  Copyright,
  GrowBox,
  InstagramIcon,
  Line,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "./Footer.styled"
import { FullTextField } from "../../composite/textfield/TextField"
import LinkWrapper from "../../base/LinkWrapper"
import Logo from "../../base/Logo"
import { useState } from "react"
import { Status } from "../../composite/textfield/TextField.styled"

interface IFooter {
  copyright: string
  instagramUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  email?: string
}

const Footer = ({ copyright, instagramUrl, twitterUrl, linkedinUrl, email }: IFooter) => {
  const [status, setStatus] = useState(Status.NONE)
  return (
    <Container>
      <Box padding="3.5rem">
        <GrowBox>
          <Logo iconStyle="white" brandStyle="white" responsive />
        </GrowBox>
        <GrowBox justifyContent="flex-end">
          <FullTextField
            status={status}
            title="Subscribe to our newsletter"
            placeholder="Type your email ..."
            type="email"
            id="newsletter-email"
            name="newsletter-email"
            onSubmit={async (email: string) => {
              setStatus(Status.SENDING)
              const response = await fetch("api/addToNewsletter", {
                method: "POST",
                body: JSON.stringify({ email: email }),
                headers: { "Content-Type": "application/json;charset=UTF-8" },
              })

              if (!response.ok) {
                console.log("Error adding mail to newsletter list")
                setStatus(Status.FAILURE)
              } else {
                setStatus(Status.SUCCESS)
              }
            }}
          />
        </GrowBox>
      </Box>
      <Line />
      <Box padding="1.5rem" paddingMd="2.5rem" reverse>
        <GrowBox>
          <Copyright>{copyright}</Copyright>
        </GrowBox>
        <GrowBox justifyContent="flex-end">
          {instagramUrl && (
            <LinkWrapper ariaLabel="Instagram" href={instagramUrl} blank>
              <InstagramIcon />
            </LinkWrapper>
          )}
          {twitterUrl && (
            <LinkWrapper ariaLabel="Twitter" href={twitterUrl} blank>
              <TwitterIcon />
            </LinkWrapper>
          )}
          {linkedinUrl && (
            <LinkWrapper ariaLabel="LinkedIn" href={linkedinUrl} blank>
              <LinkedInIcon />
            </LinkWrapper>
          )}
          {email && (
            <LinkWrapper ariaLabel="E-Mail" href={email} blank>
              <MailIcon />
            </LinkWrapper>
          )}
        </GrowBox>
      </Box>
    </Container>
  )
}
export default Footer
