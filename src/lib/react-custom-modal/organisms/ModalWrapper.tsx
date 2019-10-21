import React from 'react'
import ReactDOM from 'react-dom'
import { StyledWrapper, StyledRootWrapper, ModalInner } from '../'
import { GlobalModalStyle } from '../atoms'
import { ModalContext, ContextModalType } from '../ModalContext'
import { ModalWrapperProps } from '../types'
import { ButtonWrapper, Button } from '../atoms/styled-root-wrapper'

export const ModalWrapper = ({
  onRequestClose,
  children,
  type,
  typesStyle,
  closeButton,
  style,
  animationName,
  customAnimation,
}: ModalWrapperProps) => {
  const { stack, shadowStack } = React.useContext<ContextModalType>(
    ModalContext,
  )

  const isAnimated = stack.length === shadowStack.length

  return (
    <>
      <ModalPortal>
        <StyledRootWrapper className='modal-isOpen' onClick={onRequestClose}>
          <StyledWrapper>
            <ModalInner
              customStyle={style}
              typesStyle={typesStyle}
              isAnimated={isAnimated}
              type={type}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {children}
              {closeButton ? (
                closeButton(onRequestClose)
              ) : (
                <ButtonWrapper>
                  <Button onClick={onRequestClose}>Ok</Button>
                </ButtonWrapper>
              )}
            </ModalInner>
          </StyledWrapper>
        </StyledRootWrapper>
      </ModalPortal>
      <GlobalModalStyle
        animationName={animationName}
        isAnimated={isAnimated}
        customAnimation={customAnimation}
      />
    </>
  )
}

export const ModalPortal = ({ children }: { children: React.ReactElement }) => {
  const rootElement = document.querySelector('#modal')

  return rootElement ? ReactDOM.createPortal(children, rootElement) : null
}
