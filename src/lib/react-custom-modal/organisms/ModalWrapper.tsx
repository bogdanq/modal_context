import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import { ModalType, StyledWrapper, StyledRootWrapper, ModalInner } from '../'
import { GlobalModalStyle, Animation } from '../atoms'

type Props = {
  onRequestClose: () => void
  children: ReactNode
  hasError?: boolean
  visible?: boolean
  type?: keyof ModalType
  modalType?: object
  closeButton?: (close: () => void) => ReactNode
  style?: any
  animation?: Animation
  nodeModal?: any
}

export const ModalWrapper = ({
  onRequestClose,
  children,
  type,
  modalType,
  closeButton,
  style,
  animation,
  nodeModal,
}: Props) => {
  return (
    <>
      <CustomModal isOpen={Boolean(nodeModal)} onRequestClose={onRequestClose}>
        <StyledRootWrapper onClick={onRequestClose}>
          <StyledWrapper>
            <ModalInner
              customStyle={style}
              customTypes={modalType}
              type={type}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <>
                {children}
                {closeButton ? (
                  closeButton(onRequestClose)
                ) : (
                  <button onClick={onRequestClose}>Close</button>
                )}
              </>
            </ModalInner>
          </StyledWrapper>
        </StyledRootWrapper>
      </CustomModal>
      <GlobalModalStyle animation={animation} />
    </>
  )
}

export const CustomModal = ({ children, isOpen }: any) => {
  const rootElement = document.querySelector('#modal')
  const Parent =
    rootElement &&
    ReactDOM.createPortal(
      <div
        className={` ${
          isOpen
            ? 'ReactModal__Overlay ReactModal__Overlay--after-open'
            : 'ReactModal__Overlay--before-close'
        }`}
      >
        <div
          className={`${
            isOpen
              ? 'ReactModal__Content ReactModal__Content--after-open'
              : 'ReactModal__Content--before-close'
          }`}
        >
          {children}
        </div>
      </div>,
      rootElement,
    )
  return Parent
}
