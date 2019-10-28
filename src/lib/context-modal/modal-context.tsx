import React, { ReactNode, useState } from 'react'
import { ContextModalType, CurrentModal } from './typings'

const ModalContext = React.createContext<ContextModalType>({
  showModal: () => null,
  hideModal: () => null,
  nodeList: [],
  currentNodeId: null,
  setCurrentNodeId: () => null,
})

type Props = {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const {
    nodeRemove,
    nodePush,
    nodeList,
    currentNodeId,
    setCurrentNodeId,
  } = useStack()

  return (
    <ModalContext.Provider
      value={{
        showModal: nodePush,
        hideModal: nodeRemove,
        nodeList,
        currentNodeId,
        setCurrentNodeId,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }

export const useStack = () => {
  const [nodeList, setNodeList] = useState<Array<CurrentModal>>([])
  const [currentNodeId, setCurrentNodeId] = React.useState<number | null>(null)

  const nodeRemove = (id: number) => {
    setCurrentNodeId(id)

    const timerId = setTimeout(() => {
      setNodeList((prev: Array<CurrentModal>) => {
        return prev.filter(item => item.id !== id)
      })
    }, 400)

    return () => clearTimeout(timerId)
  }

  const nodePush = (data: ReactNode | Array<ReactNode>) => {
    if (typeof data === 'function') {
      const id = Math.random()
      setNodeList(prev => [...prev, { id, node: data }])
    }

    if (Array.isArray(data)) {
      data.map((node: ReactNode, index) => {
        return setNodeList(prev => [...prev, { id: index, node }])
      })
    }
  }

  return {
    nodePush,
    nodeRemove,
    nodeList,
    currentNodeId,
    setCurrentNodeId,
  }
}
