import { Container } from "./Slider.styled"
import { SliderTop, SliderBottom, SliderSide, SliderSlot, SliderDot } from "./Slider.svg"
import { Glow } from "../filter/Glow"
import { Fragment } from "react"

interface ISlider {
  slotCoordsInRem: number[]
  selectedSlot: number
  heightInRem: number
  widthInRem: number
}

const Slider = ({ slotCoordsInRem, selectedSlot, heightInRem, widthInRem }: ISlider) => {
  if (selectedSlot >= slotCoordsInRem.length) throw Error("The selected slot does not exist")

  const spaceBeforeFirstSlot = slotCoordsInRem[0] - widthInRem
  if (spaceBeforeFirstSlot < 0) throw Error(`First slot below minimum coords, minimum coords: ${widthInRem}rem`)

  for (let i = 1; i < slotCoordsInRem.length; i++) {
    const space = slotCoordsInRem[i] - slotCoordsInRem[i - 1] - widthInRem
    if (space < 0) throw Error(`Overlapping slots, slots coords should be spaced up with ${widthInRem}rem or more`)
  }

  const spaceAfterLastSlot = heightInRem - slotCoordsInRem[slotCoordsInRem.length - 1] - widthInRem * 2
  if (spaceAfterLastSlot < 0) {
    const maxCoords = heightInRem - widthInRem * 2
    if (maxCoords < 0) {
      throw Error("Last slot past maximum coords, maximum coords: 0rem")
    } else {
      throw Error(`Last slot past maximum coords, maximum coords: ${maxCoords}rem`)
    }
  }

  const width = `${widthInRem}rem`

  const glowId = Math.random().toString(36).slice(2, 12)

  return (
    <Container width={width} height={`${heightInRem}rem`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <defs>
          <Glow id={glowId} blink />
        </defs>
      </svg>

      <SliderDot
        size={width}
        coords={`${slotCoordsInRem[selectedSlot]}rem`}
        css={{ position: "absolute", filter: `url(#${glowId})` }}
      />
      <SliderTop size={width} />
      <SliderSide
        size={width}
        css={{
          height: `${slotCoordsInRem[0] - widthInRem}rem`,
        }}
      />
      {slotCoordsInRem.map((coords, index) => (
        <Fragment key={index}>
          {index !== 0 && (
            <SliderSide
              size={width}
              css={{
                height: `${coords - slotCoordsInRem[index - 1] - widthInRem}rem`,
              }}
            />
          )}
          <SliderSlot size={width} />
        </Fragment>
      ))}
      <SliderSide
        size={width}
        css={{
          height: `${heightInRem - slotCoordsInRem[slotCoordsInRem.length - 1] - widthInRem * 2}rem`,
        }}
      />
      <SliderBottom size={width} />
    </Container>
  )
}

export default Slider
