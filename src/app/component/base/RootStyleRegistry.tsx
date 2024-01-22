"use client"

import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { useServerInsertedHTML } from "next/navigation"
import React, { useState } from "react"

export interface IRootStyleRegistry {
  // eslint-disable-next-line no-undef
  children: React.ReactNode | React.ReactNode[]
}

// From: https://github.com/emotion-js/emotion/issues/2928
const RootStyleRegistry = ({ children }: IRootStyleRegistry) => {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "emotion" })
    cache.compat = true
    const prevInsert = cache.insert

    // noinspection JSMismatchedCollectionQueryUpdate
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null
    let styles = ""
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export default RootStyleRegistry
