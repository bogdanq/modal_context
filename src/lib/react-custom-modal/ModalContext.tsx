import React, { ReactNode, useState } from 'react'

type RenderNodeModal = (arg: { hideModal: () => void }) => ReactNode

export type ContextModalType = {
  showModal: (renderNodeModal: RenderNodeModal) => void
  nodeModal: any
  pop: () => void
  stack: Array<any>
}

const ModalContext = React.createContext<ContextModalType>({
  showModal: () => null,
  nodeModal: null,
  pop: () => null,
  stack: [],
})

type Props = {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const { pop, push, last, stack } = useStack()

  return (
    <ModalContext.Provider
      value={{
        showModal: push,
        nodeModal: last,
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

  const push = (data: any) => setStack(prev => [...prev, data])

  const pop = () =>
    setStack((prev: Array<ReactNode>) => {
      const last = prev.pop()
      return prev.filter(item => item !== last)
    })

  const last: (arg: { hideModal: () => void }) => ReactNode =
    stack[stack.length - 1]

  return {
    last,
    push,
    pop,
    stack,
  }
}
