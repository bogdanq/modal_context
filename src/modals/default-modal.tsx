import React from 'react'
import { ModalWrapper } from '../lib/react-custom-modal'

type Props = {
  onRequestClose: () => void
}

export const DefaultModal = ({ onRequestClose }: Props) => {
  return (
    <ModalWrapper onRequestClose={onRequestClose}>
      <div>
        <h1>Модальное окно без еффектов</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        consectetur euismod erat. Sed imperdiet sollicitudin urna non
        sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nullam id tristique tortor. In sodales augue sed lectus congue
        ullamcorper. Integer sit amet nisl tellus. Nam in condimentum nibh.
      </div>
    </ModalWrapper>
  )
}
