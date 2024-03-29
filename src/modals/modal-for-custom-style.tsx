import React from 'react'
import { Modal } from '../lib/context-modal'
import { css } from 'styled-components'
import { Params } from '../lib/context-modal/typings'
import { Button, Header, Text } from './styled'

interface Props extends Params {}

const customStyle = css`
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

export const ModalForCustomStyle = ({ ...params }: Props) => {
  return (
    <>
      <Modal {...params} style={customStyle}>
        {({ closeModal }) => (
          <>
            <Header>Модальное с кастомными стилями</Header>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              consectetur euismod erat. Sed imperdiet sollicitudin urna non
              sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Nullam id tristique tortor. In sodales augue sed lectus
              congue ullamcorper. Integer sit amet nisl tellus. Nam in
              condimentum nibh.
            </Text>
            <Button onClick={closeModal}>×</Button>
          </>
        )}
      </Modal>
    </>
  )
}
