import React, { ReactNode, useState, Dispatch } from 'react'
import { useCookies } from 'react-cookie'

type RenderNodeModal = (arg: { id: number }) => ReactNode
type Push = <T extends RenderNodeModal | Array<RenderNodeModal>>(
  renderNodeModal: T,
) => void

export type ContextModalType = {
  showModal: Push
  pop: (id: number) => void
  stack: Array<any>
  currentNodeId: number | null
  setCurrentNodeId: Dispatch<any>
}

const ModalContext = React.createContext<ContextModalType>({
  showModal: () => null,
  pop: () => null,
  stack: [],
  currentNodeId: null,
  setCurrentNodeId: () => null,
})

type Props = {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const { pop, push, stack, currentNodeId, setCurrentNodeId } = useStack()

  return (
    <ModalContext.Provider
      value={{
        showModal: push,
        pop,
        stack,
        currentNodeId,
        setCurrentNodeId,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const ModalConsumer = ModalContext.Consumer

export { ModalProvider, ModalContext, ModalConsumer }

const useStack = () => {
  const [stack, setStack] = useState<Array<ReactNode>>([])
  const [cookies] = useCookies()
  const [currentNodeId, setCurrentNodeId] = React.useState(null)

  const pop = (id: any) => {
    setCurrentNodeId(id)

    const timerId = setTimeout(() => {
      setStack((prev: Array<ReactNode>) => {
        const last = prev.pop()
        return prev.filter(item => item !== last)
      })
    }, 400)

    return () => clearTimeout(timerId)
  }

  const push = (data: ReactNode | [ReactNode]) => {
    if (typeof data === 'function') {
      if (!data().props.cookie) {
        const id = Math.random()
        setStack(prev => [...prev, { id, node: data }])
      }
    }

    if (Array.isArray(data)) {
      data.map((node: any, index) => {
        if (!cookies[node().props.cookie.name]) {
          setStack(prev => [...prev, { id: index, node }])
        }
      })
    }
  }

  return {
    push,
    pop,
    stack,
    currentNodeId,
    setCurrentNodeId,
  }
}
