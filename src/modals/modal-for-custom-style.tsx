import React from 'react'
import { ModalWrapper } from '../lib/react-custom-modal'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

type Props = {}

const customStyle: FlattenSimpleInterpolation = css`
  background: #fff;
  width: 500px;
  border-radius: inherit;
  font-size: 1rem;
  padding: 0;
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  right: 0;
`

export const ModalForCustomStyle = ({  }: Props) => {
  return (
    <>
      <ModalWrapper style={customStyle}>
        <Header>Модальное с кастомными стилями</Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur euismod erat. Sed imperdiet sollicitudin urna non
          sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nullam id tristique tortor. In sodales augue sed lectus
          congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
          nibh.
        </Text>
      </ModalWrapper>
    </>
  )
}

export const ModalForCustomButton = ({  }: Props) => {
  return (
    <>
      <ModalWrapper
        closeButton={(close: any) => <Button onClick={close}>×</Button>}
      >
        <h2>Модальное с кастомной кнопкой закрытия</h2>
        <div>
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

const Header = styled.div`
  background: #00c851;
  color: #fff;
  padding: 20px;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 25px;
`

const Text = styled.div`
  color: #616161;
  width: 90%;
  margin: 0 auto;
`

const Button = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  justify-content: center;
  width: 1.2em;
  height: 1.2em;
  padding: 0;
  overflow: hidden;
  border: none;
  border-radius: 0;
  outline: initial;
  background: 0 0;
  color: #ccc;
  font-family: serif;
  font-size: 2.5em;
  line-height: 1.2;
  cursor: pointer;
`
