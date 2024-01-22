interface IDropShadow {
  id: string
  x: number
  y: number
  color: string
  opacity?: string | number
  stdDeviation?: string | number
}

export const DropShadow = ({ id, x, y, color, opacity = "1", stdDeviation = "5 5" }: IDropShadow) => (
  <filter
    id={id}
    x="-20%"
    y="-20%"
    width="140%"
    height="140%"
    filterUnits="objectBoundingBox"
    colorInterpolationFilters="linearRGB"
  >
    <feDropShadow
      stdDeviation={stdDeviation}
      in="SourceGraphic"
      dx={x}
      dy={y}
      floodColor={color}
      floodOpacity={opacity}
    />
  </filter>
)
