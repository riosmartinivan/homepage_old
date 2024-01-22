interface IGlow {
  id: string
  stdDeviation?: number
  blink?: boolean
}

export const Glow = ({ id, stdDeviation = 10, blink }: IGlow) => (
  <>
    <filter
      id={id}
      x="-75%"
      y="-75%"
      width="300%"
      height="300%"
      filterUnits="objectBoundingBox"
      colorInterpolationFilters="linearRGB"
    >
      <feGaussianBlur
        id={`${id}-blur`}
        stdDeviation={`${blink ? stdDeviation / 2 : stdDeviation}`}
        result="coloredBlur"
      />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
      {blink && (
        <animate
          xlinkHref={`#${id}-blur`}
          attributeName="stdDeviation"
          values={`${stdDeviation / 2};${stdDeviation};${stdDeviation / 2}`}
          keyTimes="0;0.5;1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      )}
    </filter>
  </>
)
