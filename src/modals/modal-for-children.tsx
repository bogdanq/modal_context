import React from 'react'
import { ModalWrapper } from '../lib/react-custom-modal'
import {
  ContextModalType,
  ModalContext,
} from '../lib/react-custom-modal/ModalContext'
import { ModalForCustomAnimate } from './modal-for-animate'

type Props = {
  index?: any
}

export const ModalForChildren = ({ index }: Props) => {
  const { showModal } = React.useContext<ContextModalType>(ModalContext)

  return (
    <>
      <ModalWrapper index={index}>
        <div>
          <h1>Модальное окно с возможностью открыть дочернее окно</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur euismod erat. Sed imperdiet sollicitudin urna non
          sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nullam id tristique tortor. In sodales augue sed lectus
          congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
          nibh.
        </div>
        <button
          onClick={() => {
            showModal((index: any) => (
              <ModalForCustomAnimate index={index} customAnimationName='zoom' />
            ))
          }}
        >
          Try me!
        </button>
      </ModalWrapper>
    </>
  )
}
