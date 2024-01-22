"use client"

import { Dispatch, memo, SetStateAction, useEffect, useState } from "react"
import { StyledHeisenberg } from "./Heisenberg.styled"

interface IHeisenberg {
  className?: string
  color: "white" | "black"
  onClick?: Dispatch<SetStateAction<boolean>>
  opened: boolean
}

const Heisenberg = memo(({ className, color, onClick, opened }: IHeisenberg) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  return (
    <StyledHeisenberg
      className={className}
      color={color}
      open={open}
      onClick={() => {
        setOpen(!open)
        onClick && onClick(!open)
      }}
    >
      {[...Array(6)].map((_, i) => (
        <span key={i} />
      ))}
    </StyledHeisenberg>
  )
})

export default Heisenberg
