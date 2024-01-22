import React from "react"

interface IContainer {
  nodes: React.ReactNode[]
  nodeSize: number
  gap?: string
}

const CrossContainer = ({ nodes, gap = "1rem" }: IContainer) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
      }}
    >
      {nodes[0] && <div>{nodes[0]}</div>}
      {nodes[1] && (
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            gap: gap,
          }}
        >
          {nodes.slice(1, 4)}
        </div>
      )}
      {nodes[4] && <div>{nodes[4]}</div>}
    </div>
  )
}

const ZContainer = ({ nodes, gap = "1rem" }: IContainer) => {
  return (
    <div
      css={{
        display: "flex",
      }}
    >
      {nodes[0] && <div>{nodes[0]}</div>}
      {nodes[1] && <div>{nodes.slice(1, 4)}</div>}
      {nodes[4] && <div>{nodes[4]}</div>}
    </div>
  )
}

interface INodeArrangement {
  nodes: React.ReactNode[]
  nodeSize: number
  style: "cross" | "z" | "parallelogram"
  angle?: number
}

const NodeArrangement = ({ nodes, nodeSize, style, angle = 0 }: INodeArrangement) => {
  if (nodes.length > 5) throw Error("Maximum nodes: 5")
  let Container
  switch (style) {
    case "cross":
      Container = CrossContainer
      break
    case "z":
      Container = ZContainer
      break
    case "parallelogram":
      Container = CrossContainer
      break
  }

  return <Container nodes={nodes} nodeSize={nodeSize} />
}

export default NodeArrangement
