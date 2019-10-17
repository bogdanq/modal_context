import React, { useReducer, ReactNode } from 'react'

type RenderNodeModal = (arg: { hideModal: () => void }) => ReactNode

export type ContextModalType = {
  state: {
    node: RenderNodeModal
  }
  showModal: (renderNodeModal: RenderNodeModal) => void
  hideModal: () => void
}

const ModalContext = React.createContext<ContextModalType>(undefined as any)

type Props = {
  children: ReactNode
}

type Reducer = {
  renderNodeModal: RenderNodeModal
}

type State = {
  node: RenderNodeModal
}

const reducer = (state: State, { renderNodeModal }: Reducer) => {
  return { ...state, node: renderNodeModal }
}

const ModalProvider = ({ children }: Props): any => {
  const showModal = (renderNodeModal: RenderNodeModal) => {
    return dispatch({ renderNodeModal })
  }

  const hideModal = () => {
    return dispatch({ ...state, renderNodeModal: () => null })
  }

  const [state, dispatch] = useReducer(reducer, {
    node: () => null,
  })

  return (
    <ModalContext.Provider
      value={{
        state,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const ModalConsumer = ModalContext.Consumer

export { ModalProvider, ModalContext, ModalConsumer }
