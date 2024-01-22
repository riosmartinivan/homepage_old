import React from "react"

export interface IDefaultHeadTags {
  name: string
  description: string
  url: string
}

const DefaultHeadTags = ({ name, description, url }: IDefaultHeadTags) => (
  <>
    <meta charSet="utf-8" />
    <meta name="application-name" content={name} />
    <meta name="description" content={description} />
    <meta name="keywords" content="Keywords" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content={name} />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-config" content="/icons/browserconfig.xml" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="/manifest.json" />
    <link href="/icons/favicon-16x16.ico" rel="icon" sizes="16x16" />
    <link href="/icons/favicon-32x32.ico" rel="icon" sizes="32x32" />
    <link href="/icons/favicon-48x48.ico" rel="icon" sizes="48x48" />
    <link href="/icons/favicon-128x128.ico" rel="icon" sizes="128x128" />
    <link href="/icons/favicon-256x256.ico" rel="icon" sizes="256x256" />
    <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" type="image/png" sizes="180x180" />
    <link href="/icons/safari-pinned-tab.svg" rel="mask-icon" color="#00aea2" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={name} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={url + "/icons/icon-192x192.png"} />
    <meta name="twitter:creator" content="@PhorusGroup" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={name} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={name} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={url + "/icons/icon-180x180.png"} />
  </>
)

export default DefaultHeadTags
