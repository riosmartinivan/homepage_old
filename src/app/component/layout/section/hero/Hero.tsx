import { Container, Box, LearnMore, Arrow, Button, HeroBackgroundImage, BackgroundVideo } from "./Hero.styled"
import React from "react"

import BackgroundVideoFallback from "../../../../../../public/media/balls.jpg"
import { Text, Title } from "../../../base/Text"
import LinkWrapper from "../../../base/LinkWrapper"

interface IHero {
  id?: string
  title: React.ReactNode | string
  description: React.ReactNode | string
}

const Hero = ({ id, title, description }: IHero) => (
  <Container id={id}>
    <BackgroundVideo
      autoPlay
      loop
      muted
      src="/media/balls.mp4"
      fallback={<HeroBackgroundImage src={BackgroundVideoFallback} />}
    />
    <Box>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <LinkWrapper href="#contact" ariaLabel="Let's talk!">
        <Button>
          <LearnMore>Let&apos;s talk!</LearnMore>
          <Arrow />
        </Button>
      </LinkWrapper>
    </Box>
  </Container>
)
export default Hero
