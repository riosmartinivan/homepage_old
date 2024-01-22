import ServiceIcon from "../serviceicon/ServiceIcon"
import React from "react"
import { Box } from "./ServiceCard.styled"
import { Subtitle, Text } from "../../base/Text"

interface IServiceCard {
  icon: "box" | "persons" | "gears" | "contract" | "hidden"
  orientation: "left" | "right"
  title: React.ReactNode | string
  description: React.ReactNode | string
}

const ServiceCard = ({ icon, orientation, title, description }: IServiceCard) => (
  <Box flexDirection={`row${orientation === "right" && "-reverse"}`}>
    {icon !== "hidden" && <ServiceIcon icon={icon} orientation={orientation} />}
    <Box margin="6rem" flexDirection="column">
      <Subtitle as="h3" size="lg">
        {title}
      </Subtitle>
      <Text>{description}</Text>
    </Box>
  </Box>
)

export default ServiceCard
