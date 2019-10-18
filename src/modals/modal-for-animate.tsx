import React from 'react'
import { ModalType, ModalWrapper, Animation } from '../lib/react-custom-modal'
import { CustomModalAnimateGlobal } from '../global'

type Props = {
  onRequestClose: () => void
  type?: keyof ModalType
  animation?: Animation
}

export const ModalForAnimate = ({ onRequestClose, type, animation }: Props) => {
  return (
    <>
      <ModalWrapper
        animation={animation}
        onRequestClose={onRequestClose}
        type={type}
      >
        <div>
          <h1>Модалка с анимацией - {animation}</h1>
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

export const ModalForCustomAnimate = ({
  onRequestClose,
  type,
  animation,
}: Props) => {
  return (
    <>
      <ModalWrapper
        animation={animation}
        onRequestClose={onRequestClose}
        type={type}
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
