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
  let id = 1

  const nodeRemove = React.useCallback((id: number) => {
    setCurrentNodeId(id)

    const timerId = setTimeout(() => {
      setNodeList((prev: Array<CurrentModal>) =>
        prev.filter(item => item.id !== id),
      )
    }, 400)

    return () => clearTimeout(timerId)
  }, [])

  const nodePush = React.useCallback(
    (data: ReactNode | Array<ReactNode>) => {
      if (typeof data === 'function') {
        setNodeList(prev => [...prev, { id: id++, node: data }])
      }

      if (Array.isArray(data)) {
        data.map((node: ReactNode, index) =>
          setNodeList(prev => [...prev, { id: index, node }]),
        )
      }
    },
    [id],
  )

  return {
    nodePush,
    nodeRemove,
    nodeList,
    currentNodeId,
    setCurrentNodeId,
  }
}
