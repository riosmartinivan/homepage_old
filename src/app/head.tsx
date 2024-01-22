"use client"

import DefaultHeadTags from "./component/base/DefaultHeadTags"

const NAME = "Phorus Group"
const DESCRIPTION = "Digital solutions"
const URL = "https://phorus.group"

const Head = () => (
  <head>
    <DefaultHeadTags name={NAME} description={DESCRIPTION} url={URL} />
    <title>Phorus Group - Digital solutions</title>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width,
              shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    />
  </head>
)

export default Head
