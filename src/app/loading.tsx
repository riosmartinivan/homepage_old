"use client"

import Image from "next/image"

const NotFound = () => (
  <div>
    <h2>Loading!</h2>
    <Image src="https://http.cat/404" alt="Not found!" width={750} height={600} priority />
  </div>
)

export default NotFound
