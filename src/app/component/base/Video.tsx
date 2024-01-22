import React, { Suspense } from "react"

interface IVideo extends React.HTMLProps<HTMLVideoElement> {
  className?: string
  fallback: React.ReactNode
}

const Video = (props: IVideo) => {
  const videoProps = {
    ...props,
    type: "video",
    as: undefined,
  }

  return (
    <Suspense fallback={props.fallback}>
      <video {...videoProps} />
    </Suspense>
  )
}

export default Video
