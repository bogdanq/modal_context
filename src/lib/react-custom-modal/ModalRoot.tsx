import React from 'react'
import { ModalConsumer } from './ModalContext'

export const ModalRoot = () => (
  <ModalConsumer>
    {({ nodeModal }) => {
      const activeModal = nodeModal ? nodeModal : null

      return activeModal
    }}
  </ModalConsumer>
)
