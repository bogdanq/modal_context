import React from 'react'
import { ModalConsumer } from './ModalContext'

export const ModalRoot = () => (
  <ModalConsumer>
    {({ nodeModal, pop, stack }) => {
      const activeModal =
        stack.length > 0
          ? stack.map((modal, index) => modal({ hideModal: pop, index }))
          : null
      // const activeModal = nodeModal ? nodeModal({ hideModal: pop }) : null

      return activeModal
    }}
  </ModalConsumer>
)
