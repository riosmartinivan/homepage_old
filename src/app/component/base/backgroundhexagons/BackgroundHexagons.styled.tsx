import styled from "@emotion/styled"
import BackgroundHexagon from "./BackgroundHexagonIcon.svg"
import { css } from "@emotion/react"

export const Container = styled.div`
  width: ${({ width }: { width: number }) => `${width}rem`};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

interface IBackgroundHexagonIcon {
  disabled?: boolean
  dropShadowFilterId: string
  glowFilterId?: string
  translateX: number
  translateY: number
}

export const BackgroundHexagonIcon = styled(BackgroundHexagon)`
  overflow: visible;
  flex: 0 0 33%;

  & path {
    filter: ${({ dropShadowFilterId }: IBackgroundHexagonIcon) => `url(#${dropShadowFilterId})`};
  }

  ${({ disabled }: IBackgroundHexagonIcon) =>
    disabled &&
    css`
      visibility: hidden;
    `};

  ${({ translateX, translateY }: IBackgroundHexagonIcon) =>
    css`
      transform: translateX(${translateX}%) translateY(${translateY}%);
    `};

  ${({ glowFilterId }: IBackgroundHexagonIcon) =>
    glowFilterId &&
    css`
      &:hover path {
        filter: url(#${glowFilterId});
      }
    `}
`
