import React from 'react'
import { Modal } from '../lib/context-modal'
import { ModalContext } from '../lib/context-modal'
import { ContextModalType } from '../lib/context-modal/types'
import { ModalForCustomAnimate } from './modal-for-animate'
import { Params } from '../lib/context-modal/types'
import { Button } from './styled'

interface Props extends Params {}

export const ModalForChildren = ({ ...params }: Props) => {
  const { showModal } = React.useContext<ContextModalType>(ModalContext)

  return (
    <>
      <Modal {...params}>
        {({ closeModal }) => (
          <div>
            <h1>Модальное окно с возможностью открыть дочернее окно</h1>
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
                  <ModalForCustomAnimate animationName='rotate' {...params} />
                ))
              }}
            >
              Try me!
            </button>
          </div>
        )}
      </Modal>
    </>
  )
}
