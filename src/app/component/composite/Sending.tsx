import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Text } from "../base/Text"
import { Status } from "./textfield/TextField.styled"
import { AiOutlineLoading3Quarters, BsCheckCircle, BsXCircle } from "react-icons/all"
import { css } from "@emotion/react"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Check = ({ className }: { className?: string }) => <BsCheckCircle className={className} />
const X = ({ className }: { className?: string }) => <BsXCircle className={className} />

const iconStyles = css`
  margin: 0 0.5rem;
  width: 1.25rem;
  height: auto;
`
const SentIcon = styled(Check)`
  ${iconStyles};
  color: ${({ theme }) => theme.accent};
`
const XIcon = styled(X)`
  ${iconStyles};
  color: ${({ theme }) => theme.color.red};
`

const IconContainer = styled.div`
  display: flex;
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.accent};
  width: 1.25rem;

  & svg {
    width: 100%;
    height: 100%;
  }
`

const SendingIcon = () => (
  <motion.div
    style={{ display: "inline-block", transformOrigin: "center" }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
  >
    <IconContainer>
      <AiOutlineLoading3Quarters />
    </IconContainer>
  </motion.div>
)

interface ISending {
  className?: string
  message: string
  status?: Status
}

const Sending = ({ className, message, status }: ISending) => (
  <Box className={className}>
    {(() => {
      switch (status) {
        case Status.SENDING:
          return <SendingIcon />
        case Status.SUCCESS:
          return <SentIcon />
        case Status.FAILURE:
          return <XIcon />
      }
    })()}
    <Text size="xs">{message}</Text>
  </Box>
)

export default Sending
