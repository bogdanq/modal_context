import React from 'react'
import { ModalConsumer } from './ModalContext'

export const ModalRoot = () => (
  <ModalConsumer>
    {({ state: { node }, hideModal }) => {
      const modal = node ? node({ hideModal }) : null
      return (
        <div>
          <div>{modal}</div>
        </div>
      )
    }}
  </ModalConsumer>
)
