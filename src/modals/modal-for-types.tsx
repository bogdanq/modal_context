import React from 'react'
import { Modal } from '../lib/context-modal'
import { css } from 'styled-components'
import { Params } from '../lib/context-modal/types'
import { Button } from './styled'

interface Props extends Params {}

export const ModalForTypes = ({ type, ...params }: Props) => {
  return (
    <>
      <Modal {...params} type={type} labelText='Скрыть'>
        {({ closeModal }) => (
          <div>
            <h1>Модальное окно тип - {type}</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur euismod erat. Sed imperdiet sollicitudin urna non
            sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam id tristique tortor. In sodales augue sed lectus
            congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
            nibh.
            <Button onClick={closeModal}>×</Button>
          </div>
        )}
      </Modal>
    </>
  )
}

const customModalType = {
  danger: css`
    background: #f37b7b;
  `,
  success: css`
    background: blueviolet;
  `,
  primary: css`
    background: orange;
  `,
}

export const ModalForCustomTypes = ({ type, ...params }: Props) => {
  return (
    <>
      <Modal {...params} customTypeStyles={customModalType} type={type}>
        {({ closeModal }) => (
          <div>
            <h1>Модальное окно с кастомным типом - {type}</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur euismod erat. Sed imperdiet sollicitudin urna non
            sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam id tristique tortor. In sodales augue sed lectus
            congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
            nibh.
            <Button onClick={closeModal}>×</Button>
          </div>
        )}
      </Modal>
    </>
  )
}
