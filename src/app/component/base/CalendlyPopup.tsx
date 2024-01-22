"use client"

import React from "react"
import { InlineWidget, useCalendlyEventListener } from "react-calendly"

interface ICalendlyPopup {
  onClose: () => void
}

const CalendlyPopup = ({ onClose }: ICalendlyPopup) => {
  useCalendlyEventListener({
    onEventScheduled: () => onClose(),
  })

  return <InlineWidget styles={{ height: "100vh", overflow: "hidden" }} url="https://calendly.com/irios_phorus/30min" />
}

export default CalendlyPopup
