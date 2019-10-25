import React from 'react'
import { Modal } from '../lib/react-custom-modal'
import { Params } from '../lib/react-custom-modal/types'
import { Button } from './styled'

interface Props extends Params {}

export const DefaultModal = ({ ...params }: Props) => {
  return (
    <Modal {...params}>
      {({ closeModal }) => {
        return (
          <div>
            <h1>Модальное окно без еффектов</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur euismod erat. Sed imperdiet sollicitudin urna non
            sollicitudin. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Nullam id tristique tortor. In sodales augue sed lectus
            congue ullamcorper. Integer sit amet nisl tellus. Nam in condimentum
            nibh.
            <Button onClick={closeModal}>×</Button>
          </div>
        )
      }}
    </Modal>
  )
}
