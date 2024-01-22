"use client"

import { useRef, useState, ReactNode, useLayoutEffect, useEffect } from "react"
import { createPortal } from "react-dom"
import { css } from "@emotion/react"

interface PortalProps {
  className?: string
  portalID: string
  onClose: () => void
  children: ReactNode
}

const Portal = ({ className, portalID, onClose, children }: PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    ref.current = document.querySelector<HTMLElement>(`#${portalID}`)
    let created = false

    if (!ref.current) {
      ref.current = createWrapperAndAppendToBody(portalID)
      created = true
    }
    setMounted(true)

    return () => {
      if (created && ref.current?.parentNode) {
        ref.current?.parentNode.removeChild(ref.current)
      }
    }
  }, [portalID])

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? onClose() : null)
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [onClose])

  return mounted && ref.current
    ? createPortal(
        <div
          className={className}
          onClick={onClose}
          css={css`
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 99;
          `}
        >
          {children}
        </div>,
        ref.current,
      )
    : null
}

function createWrapperAndAppendToBody(wrapperId: string): HTMLDivElement {
  const wrapperElement = document.createElement("div")
  wrapperElement.setAttribute("id", wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

export default Portal
