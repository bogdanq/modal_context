import React from 'react'
import { css, createGlobalStyle, keyframes } from 'styled-components'
import { GlobalModalStyleProps } from '../types'

export const GlobalModalStyle = () => {
  const GlobalModalStyled = css`
    body {
      overflow: hidden;
    }
  `

  const GlobalModalStyles = createGlobalStyle`${GlobalModalStyled}`

  return (
    <>
      <GlobalModalStyles />
    </>
  )
}

export const animationStyle = {
  scale: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }) => (isAnimated ? scaleIn : scaleOut)};
  `,
  translate: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: any) =>
      isAnimated ? translateIn : translateOut};
  `,
  rotate: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: any) =>
      isAnimated ? rotateIn : rotateOut};
  `,
  jackIn: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: any) =>
      isAnimated ? jackIn : scaleOut};
  `,
  rubber: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: any) =>
      isAnimated ? rubberIn : scaleOut};
  `,
  swing: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: any) =>
      isAnimated ? swingIn : scaleOut};
  `,
  rollin: css<GlobalModalStyleProps>`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: any) =>
      isAnimated ? rollinIn : scaleOut};
  `,
}

export const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5)
  }
  50% {
    opacity: 1;
    transform: scale(1)
  }
  80% {
    opacity: 1;
    transform: scale(0.8)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`

export const scaleOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1)
  }
  100% {
    opacity: 0.5;
    transform: scale(0.5)
  }
`

export const translateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px)
  }
  100% {
    opacity: 1;
    transform: translateX(0)
  }
`

export const translateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0)
  }
  100% {
    opacity: 0;
    transform: translateX(100px)
  }
`

export const rotateIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(180deg)
  }
  100% {
    opacity: 1;
    transform: rotate(0)
  }
`

export const rotateOut = keyframes`
  0% {
    opacity: 1;
    transform: rotate(0)
  }
  100% {
    opacity: 0;
    transform: rotate(180deg)
  }
`

export const rubberIn = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`

export const swingIn = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`

export const rollinIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const jackIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
