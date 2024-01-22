"use client"

import React from "react"
import { ArrowIcon, Box, Form, Input, Span, Status, TextField } from "./TextField.styled"
import { useFormValidation } from "../../../functions/useFormValidation"

interface IFullTextField {
  title: string
  placeholder: string
  type: string
  id: string
  name: string
  onSubmit: (email: string) => void
  status?: Status
}

export const FullTextField = ({ title, placeholder, type, id, name, onSubmit, status }: IFullTextField) => {
  const { handleInvalid, handleInput } = useFormValidation()

  return (
    <Box flexDirection="column">
      <Span>{title}</Span>
      <Form
        onInvalid={handleInvalid}
        flexDirection="row"
        onSubmit={(event) => {
          event.preventDefault()
          const input = event.currentTarget.elements.namedItem(id) as HTMLInputElement
          onSubmit(input.value)
          input.value = ""
        }}
      >
        <TextField
          status={status}
          onInput={handleInput}
          required
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
        />
        <ArrowIcon />
        <Input type="submit" value="" />
      </Form>
    </Box>
  )
}

export default FullTextField
