import React, { ReactNode, useState } from 'react'
import { useCookies } from 'react-cookie'

type RenderNodeModal = (arg: {
  hideModal: () => void
  nodeModal: any
}) => ReactNode

export type ContextModalType = {
  showModal: (renderNodeModal: any) => void
  nodeModal: any
  pop: () => void
  stack: Array<any>
  shadowStack: Array<any>
  isAnimated: boolean
}

const ModalContext = React.createContext<ContextModalType>({
  showModal: () => null,
  nodeModal: null,
  pop: () => null,
  stack: [],
  shadowStack: [],
  isAnimated: false,
})

type Props = {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const { pop, push, last, stack, shadowStack, isAnimated } = useStack()

  return (
    <ModalContext.Provider
      value={{
        showModal: push,
        nodeModal: last,
        pop,
        stack,
        shadowStack,
        isAnimated,
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
  const [shadowStack, setShadowStack] = useState<Array<any>>([])
  const [cookies] = useCookies()

  const last: () => ReactNode = stack[stack.length - 1]

  const pop = () => {
    setShadowStack((prev: Array<ReactNode>) => {
      const last = prev.pop()
      return prev.filter(item => item !== last)
    })

    const timerId = setTimeout(() => {
      setStack((prev: Array<ReactNode>) => {
        const last = prev.pop()
        return prev.filter(item => item !== last)
      })
    }, 400)
    return () => clearTimeout(timerId)
  }

  const push = (data: any) => {
    if (data.length) {
      data.map((node: any) => {
        if (!cookies[node.props.cookie.name]) {
          setStack(prev => [...prev, node])
          setShadowStack(prev => [...prev, node])
        }
      })
    } else {
      setStack(prev => [...prev, data])
      setShadowStack(prev => [...prev, data])
    }
  }

  const isAnimated = stack.length === shadowStack.length

  return {
    last,
    push,
    pop,
    stack,
    shadowStack,
    isAnimated,
  }
}
