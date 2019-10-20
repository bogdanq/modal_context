import React, { ReactNode, useState } from 'react'

type RenderNodeModal = (arg: {
  hideModal: () => void
  nodeModal: any
}) => ReactNode

export type ContextModalType = {
  showModal: (renderNodeModal: RenderNodeModal) => void
  nodeModal: any
  pop: () => void
  pushArray: (renderNodeModal: any) => void
  stack: Array<any>
}

const ModalContext = React.createContext<ContextModalType>({
  showModal: () => null,
  nodeModal: null,
  pop: () => null,
  stack: [],
  pushArray: () => null,
})

type Props = {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const { pop, push, last, stack, pushArray } = useStack()

  return (
    <ModalContext.Provider
      value={{
        showModal: push,
        nodeModal: last,
        pushArray,
        pop,
        stack,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const ModalConsumer = ModalContext.Consumer

export { ModalProvider, ModalContext, ModalConsumer }

const useStack = () => {
  const [stack, setStack] = useState<Array<any>>([])

  const last: (arg: { hideModal: () => void }) => ReactNode =
    stack[stack.length - 1]

  const pop = () =>
    setStack((prev: Array<ReactNode>) => {
      const last = prev.pop()
      return prev.filter(item => item !== last)
    })

  const push = (data: any) =>
    setStack(prev => [...prev, data({ hideModal: pop, nodeModal: data })])

  const pushArray = (data: any) => {
    setStack(prev => prev.concat(data({ hideModal: pop })))
  }

  return {
    last,
    push,
    pop,
    stack,
    pushArray,
  }
}
