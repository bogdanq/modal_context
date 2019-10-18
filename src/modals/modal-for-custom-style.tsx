import React from 'react'
import { ModalWrapper } from '../lib/react-custom-modal'
import { css } from 'styled-components'

type Props = {
  onRequestClose: () => void
}

const customStyle = css`
  background: #29864a;
  width: 300px;
  border-radius: 50px;
`

export const ModalForCustomStyle = ({ onRequestClose }: Props) => {
  return (
    <>
      <ModalWrapper style={customStyle} onRequestClose={onRequestClose}>
        <div>
          <h1>Модальное с кастомными стилями</h1>
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

export const ModalForCustomButton = ({ onRequestClose }: Props) => {
  return (
    <>
      <ModalWrapper
        onRequestClose={onRequestClose}
        closeButton={close => (
          <button onClick={close}>Close custom button</button>
        )}
      >
        <div>
          <h1>Модальное с кастомной кнопкой закрытия</h1>
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
