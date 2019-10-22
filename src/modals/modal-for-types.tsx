import React from 'react'
import { ModalWrapper } from '../lib/react-custom-modal'
import { css } from 'styled-components'
import { ModalType } from '../lib/react-custom-modal/types'

type Props = {
  type?: keyof ModalType
}

export const ModalForTypes = ({ type }: Props) => {
  return (
    <>
      <ModalWrapper type={type}>
        <div>
          <h1>Модальное окно тип - {type}</h1>
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

const customModalType: ModalType = {
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

export const ModalForCustomTypes = ({ type }: Props) => {
  return (
    <>
      <ModalWrapper typesStyle={customModalType} type={type}>
        <div>
          <h1>Модальное окно с кастомным типом - {type}</h1>
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
