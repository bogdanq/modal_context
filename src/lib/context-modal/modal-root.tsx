import React from 'react'
import { ModalContext, ModalProvider } from './modal-context'

export const ModalRootProvider = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <ModalProvider>
    {children}
    <ModalRoot />
  </ModalProvider>
)

const ModalRoot = () => (
  <ModalContext.Consumer>
    {({ nodeList }) => {
      return nodeList
        ? nodeList.map(modal => {
            return modal.node({ id: modal.id, key: modal.id })
          })
        : null
    }}
  </ModalContext.Consumer>
)
