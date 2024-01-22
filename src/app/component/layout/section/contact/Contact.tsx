import React, { useState } from "react"

import {
  BackgroundMap,
  Box,
  BoxText,
  CloseModalButton,
  Container,
  ContentContainer,
  GrowBox,
  Panel,
} from "./Contact.styled"
import { Button } from "../../../base/Button"
import { Subtitle, Text } from "../../../base/Text"
import { Status, TextArea, TextField } from "../../../composite/textfield/TextField.styled"
import CalendlyPopup from "../../../base/CalendlyPopup"
import Modal from "../../../base/Modal"
import useMediaQuery from "../../../../functions/useMediaQuery"
import { useTheme } from "@emotion/react"
import Sending from "../../../composite/Sending"
import { useFormValidation } from "../../../../functions/useFormValidation"

interface IContact {
  id?: string
  title: React.ReactNode | string
  description: React.ReactNode | string
}

const Contact = ({ id, title, description }: IContact) => {
  const theme = useTheme()
  const matchesXs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)
  const inputWidth = matchesXs ? "70%" : "1rem"
  const [openArrangeCallPopup, setOpenArrangeCallPopup] = useState(false)
  const [status, setStatus] = useState(Status.NONE)
  const { handleInvalid, handleInput } = useFormValidation()

  return (
    <Container id={id}>
      <Modal modalID="arrange-a-call" open={openArrangeCallPopup} onClose={() => setOpenArrangeCallPopup(false)}>
        <CloseModalButton />
        <CalendlyPopup onClose={() => setOpenArrangeCallPopup(false)} />
      </Modal>
      <BackgroundMap />
      <ContentContainer>
        <BoxText>
          <Subtitle as="h3" size="lg" alignment="right">
            {title}
          </Subtitle>
          <Text size="sm" alignment="right">
            {description}
          </Text>
        </BoxText>
        <Box>
          <Subtitle>Contact</Subtitle>
          <Panel
            onInvalid={handleInvalid}
            onSubmit={async (event) => {
              event.preventDefault()

              const form = event.currentTarget
              const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea")
              const name = event.currentTarget.elements.namedItem("contact-name") as HTMLInputElement
              const surname = event.currentTarget.elements.namedItem("contact-surname") as HTMLInputElement
              const email = event.currentTarget.elements.namedItem("contact-email") as HTMLInputElement
              const company = event.currentTarget.elements.namedItem("contact-company") as HTMLInputElement
              const details = event.currentTarget.elements.namedItem("contact-details") as HTMLTextAreaElement

              setStatus(Status.SENDING)
              try {
                const response = await fetch("api/sendContactRequest", {
                  method: "POST",
                  body: JSON.stringify({
                    contactEmail: email.value,
                    contactName: name.value,
                    contactSurname: surname.value,
                    contactDetails: details.value,
                    contactCompany: company.value,
                  }),
                  headers: { "Content-Type": "application/json;charset=UTF-8" },
                })

                if (response.ok) {
                  setStatus(Status.SUCCESS)
                  console.log("Contact request sent successfully")

                  email.value = ""
                  name.value = ""
                  surname.value = ""
                  details.value = ""
                  company.value = ""
                } else {
                  setStatus(Status.FAILURE)
                  console.log("Error sending contact request")
                }
              } catch (error) {
                setStatus(Status.FAILURE)
                console.error("Error:", error)
              }
              const allFilled = Array.from(inputs).every((input) => !input.required || input.value.trim() !== "")
              if (!allFilled) {
                return
              }
            }}
          >
            <GrowBox>
              <TextField
                title="contact-name"
                placeholder="Name*"
                required
                type="name"
                id="contact-name"
                minWidth={inputWidth}
                onInput={handleInput}
              />

              <TextField
                title="contact-surname"
                placeholder="Surname*"
                required
                type="surname"
                id="contact-surname"
                minWidth={inputWidth}
                onInput={handleInput}
              />
            </GrowBox>
            <GrowBox>
              <TextField
                title="contact-email"
                placeholder="E-mail*"
                required
                type="email"
                id="contact-email"
                minWidth={inputWidth}
                pattern=".*\S+.*"
                onInput={handleInput}
              />

              <TextField
                title="contact-company"
                placeholder="Company"
                type="company"
                id="contact-company"
                minWidth={inputWidth}
              />
            </GrowBox>
            <GrowBox>
              <TextArea
                css={{ marginTop: "1rem" }}
                title="contact-details"
                placeholder="Details"
                id="contact-details"
                alignItems="normal"
                minWidth={inputWidth}
              />
            </GrowBox>
            <GrowBox css={{ width: "90%", marginTop: "1.5rem" }}>
              <div>
                <Button type="button" buttonType="secondary" onClick={() => setOpenArrangeCallPopup(true)}>
                  Arrange a call
                </Button>
              </div>
              <div css={{ textAlign: "right", marginTop: "0.5rem" }}>
                <Button type="submit" buttonType="primary" disabled={status === Status.SENDING}>
                  Send
                </Button>
              </div>
            </GrowBox>
            <Sending
              css={{ visibility: status === Status.NONE ? "hidden" : "visible" }}
              status={status}
              message={(() => {
                switch (status) {
                  case Status.SENDING:
                    return "Sending..."
                  case Status.SUCCESS:
                    return "Message sent"
                  case Status.FAILURE:
                    return "Failure"
                  case Status.NONE:
                    return ""
                }
              })()}
            />
          </Panel>
        </Box>
      </ContentContainer>
    </Container>
  )
}

export default Contact
