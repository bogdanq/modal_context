import React from 'react'
import {
  ModalType,
  ModalWrapper,
  Animation,
  ModalInner,
} from '../lib/react-custom-modal'
import { CustomModalAnimateGlobal } from '../global'
import { css, keyframes } from 'styled-components'
import {
  scaleOut,
  rollinIn,
} from '../lib/react-custom-modal/atoms/animate-styled'

type Props = {
  onRequestClose: () => void
  type?: keyof ModalType
  animationName?: Animation
  customAnimationName?: keyof AnimationCustomStyle | undefined
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

type AnimationCustomStyle = {
  rollin: any
  zoom: any
}

const animationCustomStyle: AnimationCustomStyle = {
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
        customAnimated={
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
      <CustomModalAnimateGlobal />
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
