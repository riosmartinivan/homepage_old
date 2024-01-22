"use client"

import { FormEvent } from "react"
import { useTheme } from "@emotion/react"

export const useFormValidation = () => {
  const theme = useTheme()

  const handleInvalid = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.currentTarget
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea")

    inputs.forEach((input) => {
      if (!input.validity.valid) {
        input.style.borderColor = theme.color.red
      }
    })
  }

  const handleInput = (event: FormEvent<HTMLInputElement>): void => {
    const input = event.currentTarget

    if (!input.validity.valid) {
      if (input.type === "email") {
        input.style.borderColor = theme.color.red
      }
    } else {
      input.style.borderColor = ""
    }
  }

  return { handleInvalid, handleInput }
}
