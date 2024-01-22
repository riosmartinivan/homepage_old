"use client"

import Hero from "./component/layout/section/hero/Hero"
import Problems from "./component/layout/section/problems/Problems"
import Contact from "./component/layout/section/contact/Contact"
import styled from "@emotion/styled"
import Services from "./component/layout/section/Services"
import Description from "./component/layout/section/Description"
import React from "react"
import AboutUs from "./component/layout/section/AboutUs"
import { css, Theme, useTheme } from "@emotion/react"
import BackgroundHexagons from "./component/base/backgroundhexagons/BackgroundHexagons"
import useMediaQuery from "./functions/useMediaQuery"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const MainBackground = styled.div`
  background-image: radial-gradient(closest-side, #2f353a, black);
  box-shadow: 0 0 50px 80px #000000;
`

const SecondaryBackground = styled.div`
  background-image: ${({ theme }: { theme: Theme }) => css`
    linear-gradient(black, ${theme.color.grey});
  `};
`

interface Data {
  hero: Parameters<typeof Hero>[0]
  problems: Parameters<typeof Problems>[0]
  description: Parameters<typeof Description>[0]
  services: Parameters<typeof Services>[0]
  aboutUs: Parameters<typeof AboutUs>[0]
  contact: Parameters<typeof Contact>[0]
}

const data: Data = {
  hero: {
    title: (
      <>
        Empower your business with <span>cutting-edge</span> digital solutions
      </>
    ),
    description: "We put technology at the service of your company",
  },
  problems: {
    title: (
      <>
        No digital project is free of <span>challenges</span>
      </>
    ),
    problems: [
      {
        title: "Do you struggle to create an in-house development team?",
        description:
          "Hiring and retaining IT professionals is tough, so not getting it right from the start results in " +
          "high turnover. This is costly and results in a significant loss of business knowledge.",
      },
      {
        title: "Does going digital seem complex and costly?",
        description:
          "Enterprise software is inherently complex, and new technologies can be intimidating. As a result, " +
          "safely driving adoption and achieving a successful digital transformation can be a real challenge.",
      },
      {
        title: "Is relying on third-party developments problematic?",
        description:
          "Doing so involves taking significant risks, ranging from dissatisfaction with the result and lack of " +
          "ability to assess its quality to difficulties in migrating to a new solution if problems arise.",
      },
      {
        title: "Do you find managing operational IT resources expensive, risky, and time-consuming?",
        description:
          "Deploying, maintaining, and managing software solutions and their costs is not easy. Setting things up " +
          "incorrectly will increase resources and time spent and expose you to security risks. Moreover, finding " +
          "experienced professionals to do it is a challenge.",
      },
    ],
    size: {
      xs: {
        paneSize: "16rem",
      },
      sm: {
        paneSize: "22rem",
      },
      md: {
        paneSize: "17rem",
        padding: "3rem",
      },
      lg: {
        paneSize: "24rem",
        padding: "4rem",
      },
      xl: {
        paneSize: "30rem",
      },
      xxl: {
        paneSize: "34rem",
      },
    },
  },
  description: {
    title: (
      <>
        But this <span>shouldn&apos;t</span> stop you
      </>
    ),
    description: (
      <>
        Having high-quality software solutions is an important competitive advantage over other companies and allows you
        to benefit from opportunities across multiple sectors. However, achieving this is not as easy as it seems, and
        there are many problems you need to face along the way. <br />
        That is why we offer a set of tailor-made services to enable you to overcome any possible obstacles you may
        encounter.
      </>
    ),
  },
  services: {
    services: [
      {
        icon: "box",
        title: "Product & Development",
        description: (
          <>
            We&apos;ll help you developing secure and scalable software solutions, focusing on your current and future
            business needs. <br />
            <br />
            Our services are also oriented to help teams and businesses that need to develop a product from scratch,
            offering not only the development of the product itself, but also helping with the preceding and subsequent
            work. <br />
            <br />
            <div css={{ textAlign: "left" }}>
              <p css={{ fontStyle: "italic" }}>Some of the responsibilities we can take on are:</p>
              <ul>
                <li>Product discovery and validation.</li>
                <li>Product/market fit analysis.</li>
                <li>User-centered design of the product.</li>
                <li>Development of the backend and frontend of the project webpage / mobile app.</li>
                <li>Testing & Deployment.</li>
                <li>Configuration and set up of a cloud based infrastructure, if needed.</li>
                <li>Maintenance & Improvements over time.</li>
              </ul>
              <br />
              Taking broad responsibility also allows us to offer more comprehensive guarantees; therefore, we offer a
              variety of SLAs included at no extra cost along with our services.
            </div>
          </>
        ),
      },
      {
        icon: "persons",
        title: "Consultancy & Digitalization",
        description: (
          <>
            We work towards making your software solutions a success by utilizing the best practices and technologies
            the industry has to offer to achieve a scalable, secure, and maintainable result. <br />
            <br />
            At the same time, we are open to improve your processes&apos; efficiency by analyzing and implementing
            digitalization and training strategies. <br />
            <br />
            And finally, if needed, we are ready to plan and implement a digital transformation to reduce operational
            costs and inefficiencies of your business and prepare it for an increasingly digital future using
            future-proof strategies.
          </>
        ),
      },
      {
        icon: "gears",
        title: "IT Operations",
        description: (
          <>
            Setting up and maintaining the infrastructure necessary for your software solutions to succeed is no easy
            task. <br />
            To deploy and maintain a software solution securely and optimally, you need to set up and configure various
            in-house or third-party tools and IT resources and the necessary integrations to make them work together
            correctly, and failing to do so entails high costs, delays, and potential security breaches. <br />
            <br />
            However, IT operations are not only about having a robust infrastructure; it is also about having the
            optimization and automation of processes to leverage the full potential of your company and your teams.
            <br />
            <br />
            Therefore, we offer to manage and optimize your IT operations through an integral operations-focused
            service, within which we take the responsibility for configuring your operational resources from scratch, or
            upgrading your current configuration to a more desirable level. <br />
            <br />
            <div css={{ textAlign: "left" }}>
              <p css={{ fontStyle: "italic" }}>
                To do so, we are open to review and plan the setup and optimization of several parts of your
                organization:
              </p>
              <ul>
                <li>The IT infrastructure used for workload management.</li>
                <li>
                  Monitoring tools used to know the current state and cost-performance of your software solutions.
                </li>
                <li>Process automation and CI/CD pipelines.</li>
                <li>Practices used by your teams to detect and avoid potential bottlenecks.</li>
                <li>Security measures and secret management practices and technologies</li>
                <li>Measurement of your current and desired DORA metrics.</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        icon: "contract",
        title: "Full & Fractional IT Services",
        description: (
          <>
            You may not have an internal IT development team yet or prefer to delegate an entire project or area. This
            is a common and often preferable choice, as it allows you to fully focus on your business. <br />
            <br />
            We may not be experts in your business, but we are experts in our industry, and we have already made dozens
            of projects possible; that&apos;s why we offer Full and Fractional IT services, taking full responsibility
            and accountability for a project or IT area to achieve high performance and prevent it from being a
            bottleneck in your business.
          </>
        ),
      },
    ],
  },
  aboutUs: {
    top: {
      title: "About us",
      description: (
        <>
          We are a team of software developers and product experts with a common goal: to make software more accessible
          to other businesses. <br />
          Nowadays, having high-quality software developments is an indisputable competitive advantage, but having
          access to something like this and avoiding all the obstacles on the way to achieve it is difficult. For this
          reason, we have chosen to pave the way for businesses to have access to secure and effective software
          solutions.
        </>
      ),
    },
    left: {
      title: "What are we looking to achieve?",
      description:
        "The answer is simple: we want companies to have access to secure and high-quality software solutions, seeking " +
        "a simpler and more productive future.",
    },
    right: {
      title: "Why do we focus on this?",
      description:
        "We believe that smoothing this path is necessary to make it easier for the industry to flourish in the future.",
    },
  },
  contact: {
    title: (
      <>
        Let’s <span>collaborate!</span>
      </>
    ),
    description: "If you are interested in working with us, feel free to contact us!",
  },
}

const Home = () => {
  const theme = useTheme()
  const matchSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  return (
    <Container>
      <Hero id="home" {...data.hero} />
      <MainBackground>
        <Problems id="problems" {...data.problems} />
        <Description id="description" {...data.description} />
        <div css={{ position: "relative" }}>
          <BackgroundHexagons
            css={{ position: "absolute", left: "-10%", top: "3%", rotate: "z -10deg" }}
            size={9}
            orientation="right"
            amount={5}
            disabledHexagons={[2, 3]}
            turnedOnHexagons={[]}
          />
          <BackgroundHexagons
            css={{ position: "absolute", right: "0", top: "20%", rotate: "z 10deg" }}
            size={10}
            orientation="right"
            amount={8}
            disabledHexagons={[1, 2, 5, 6]}
            turnedOnHexagons={[4]}
          />
          <BackgroundHexagons
            css={{ position: "absolute", left: "5%", top: "48%", rotate: "z -10deg" }}
            size={8}
            orientation="right"
            amount={8}
            disabledHexagons={[1, 2, 5, 6]}
            turnedOnHexagons={[4]}
          />
          <BackgroundHexagons
            css={{ position: "absolute", right: "11%", top: "75%", rotate: "z -15deg" }}
            size={7}
            orientation="right"
            amount={6}
            disabledHexagons={[0, 1, 3]}
            turnedOnHexagons={[]}
          />
          <Services id="services" {...data.services} />
        </div>
      </MainBackground>
      <SecondaryBackground>
        <div css={{ position: "relative" }}>
          <BackgroundHexagons
            css={{ position: "absolute", left: "0", top: "0%", rotate: "z -8deg" }}
            size={9}
            orientation="right"
            amount={8}
            disabledHexagons={[2, 3, 7]}
            turnedOnHexagons={[4]}
          />
          <BackgroundHexagons
            css={{ position: "absolute", right: "-10%", top: `${matchSm ? "42%" : "30%"}`, rotate: "z 3deg" }}
            size={8}
            orientation="right"
            amount={9}
            disabledHexagons={[0, 1, 2, 5, 8]}
          />
          <AboutUs id="about-us" {...data.aboutUs} />
        </div>
        <Contact id="contact" {...data.contact} />
      </SecondaryBackground>
    </Container>
  )
}

export default Home
