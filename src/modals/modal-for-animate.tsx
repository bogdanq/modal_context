import React from 'react'
import { ModalWrapper, ModalInner } from '../lib/react-custom-modal'
import { css, keyframes } from 'styled-components'
import { ModalType, Animation } from '../lib/react-custom-modal/types'

type AnimationCustomStyle = 'rollin' | 'zoom'

type Props = {
  onRequestClose: () => void
  type?: keyof ModalType
  animationName?: Animation
  customAnimationName?: AnimationCustomStyle | undefined
}

export const ModalForAnimate = ({
  onRequestClose,
  type,
  animationName,
}: Props) => {
  return (
    <>
      <ModalWrapper
        animationName={animationName}
        onRequestClose={onRequestClose}
        type={type}
      >
        <div>
          <h1>Модалка с анимацией - {animationName}</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur euismod erat. Sed imperdiet sollicitudin urna non
          sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nullam id tristique tortor. In sodales augue sed lectus
          congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
          nibh.
        </div>
      </ModalWrapper>
    </>
  )
}

const animationCustomStyle = {
  rollin: css`
    ${ModalInner} {
      animation-duration: 0.5s;
      animation-name: ${({ isAnimated }: { isAnimated?: boolean }) =>
        isAnimated ? rollinIn : scaleOut};
    }
  `,

  zoom: css`
    ${ModalInner} {
      animation-duration: 0.5s;
      animation-name: ${({ isAnimated }: { isAnimated?: boolean }) =>
        isAnimated ? zoomIn : scaleOut};
    }
  `,
}

export const ModalForCustomAnimate = ({
  onRequestClose,
  type,
  customAnimationName,
}: Props) => {
  return (
    <>
      <ModalWrapper
        onRequestClose={onRequestClose}
        type={type}
        customAnimation={
          customAnimationName && animationCustomStyle[customAnimationName]
        }
      >
        <div>
          <h1>Модалка с кастомной анимацией</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur euismod erat. Sed imperdiet sollicitudin urna non
          sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nullam id tristique tortor. In sodales augue sed lectus
          congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
          nibh.
        </div>
      </ModalWrapper>
    </>
  )
}

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`

const scaleOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1)
  }
  100% {
    opacity: 0.5;
    transform: scale(0.5)
  }
`

const rollinIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
