"use client"

import Portal from "./Portal"
import React from "react"

interface ICalendlyModal {
  modalID: string
  open?: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ modalID, open, onClose, children }: ICalendlyModal) => (
  <>
    {open && (
      <Portal portalID={modalID} onClose={onClose}>
        {children}
      </Portal>
    )}
  </>
)

export default Modal
