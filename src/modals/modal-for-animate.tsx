import React from 'react'
import { ModalWrapper, ModalContext } from '../lib/react-custom-modal'
import { css, keyframes } from 'styled-components'
import { Params } from '../lib/react-custom-modal/types'
import { ContextModalType } from '../lib/react-custom-modal/ModalContext'
import { Button } from './styled'

interface Props extends Params {
  customAnimationName?: 'rollin' | 'zoom'
}

export const ModalForAnimate = ({
  type,
  animationName,
  cookie,
  ...params
}: Props) => {
  return (
    <>
      <ModalWrapper
        cookie={cookie}
        animationName={animationName}
        type={type}
        {...params}
      >
        {({ closeModal }) => (
          <div>
            <h1>Модалка с анимацией - {animationName}</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur euismod erat. Sed imperdiet sollicitudin urna non
            sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam id tristique tortor. In sodales augue sed lectus
            congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
            nibh.
            <Button onClick={closeModal}>×</Button>
          </div>
        )}
      </ModalWrapper>
    </>
  )
}

const animationCustomStyle = {
  rollin: css`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: { isAnimated?: boolean }) =>
      isAnimated ? rollinIn : scaleOut};
  `,
  zoom: css`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: { isAnimated?: boolean }) =>
      isAnimated ? zoomIn : scaleOut};
  `,
}

export const ModalForCustomAnimate = ({
  type,
  customAnimationName,
  ...params
}: Props) => {
  const { showModal } = React.useContext<ContextModalType>(ModalContext)
  return (
    <>
      <ModalWrapper
        type={type}
        customAnimation={
          customAnimationName && animationCustomStyle[customAnimationName]
        }
        {...params}
      >
        {({ closeModal }) => (
          <div>
            <h1>Модалка с кастомной анимацией</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur euismod erat. Sed imperdiet sollicitudin urna non
            sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam id tristique tortor. In sodales augue sed lectus
            congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
            nibh.
            <Button onClick={closeModal}>×</Button>
            <button
              onClick={() => {
                showModal(params => (
                  <ModalForAnimate {...params} customAnimationName='zoom' />
                ))
              }}
            >
              Try me!
            </button>
          </div>
        )}
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
