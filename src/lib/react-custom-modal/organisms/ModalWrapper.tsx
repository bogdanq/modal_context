import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { ModalType, StyledWrapper, StyledRootWrapper, ModalInner } from '../'
import { GlobalModalStyle, Animation } from '../atoms'
import { ModalContext, ContextModalType } from '../ModalContext'
import { FlattenSimpleInterpolation } from 'styled-components'

type Props = {
  onRequestClose: () => void
  children: ReactNode
  type?: keyof ModalType
  closeButton?: (close: () => void) => ReactNode
  modalType?: ModalType
  style?: FlattenSimpleInterpolation
  animationName?: Animation
  customAnimated?: any
  nodeModal?: any
}

export const ModalWrapper = ({
  onRequestClose,
  children,
  type,
  modalType,
  closeButton,
  style,
  animationName,
  customAnimated,
}: Props) => {
  const { stack, shadowStack } = React.useContext<ContextModalType>(
    ModalContext,
  )

  const isAnimated = stack.length === shadowStack.length

  return (
    <>
      <ModalPortal>
        <StyledRootWrapper onClick={onRequestClose}>
          <StyledWrapper>
            <ModalInner
              customStyle={style}
              customTypes={modalType}
              isAnimated={isAnimated}
              type={type}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {children}
              {closeButton ? (
                closeButton(onRequestClose)
              ) : (
                <button onClick={onRequestClose}>Close</button>
              )}
            </ModalInner>
          </StyledWrapper>
        </StyledRootWrapper>
      </ModalPortal>
      <GlobalModalStyle
        animationName={animationName}
        isAnimated={isAnimated}
        customAnimated={customAnimated}
      />
    </>
  )
}

export const ModalPortal = ({ children }: { children: React.ReactElement }) => {
  const rootElement = document.querySelector('#modal')

  return rootElement ? ReactDOM.createPortal(children, rootElement) : null
}
