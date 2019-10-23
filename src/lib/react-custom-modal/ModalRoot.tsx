import React from 'react'
import { ModalConsumer } from './ModalContext'

export const ModalRoot = () => (
  <ModalConsumer>
    {({ stack, pop }) => {
      const activeModal = stack
        ? stack.map(modal => {
            return modal.node({ id: modal.id, key: modal.id })
          })
        : null

      return activeModal
    }}
  </ModalConsumer>
)
