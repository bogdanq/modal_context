import React, { ReactNode } from 'react'
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
}

export const ModalWrapper = ({
  onRequestClose,
  children,
  type,
  modalType,
  closeButton,
  style,
  animation,
}: Props) => {
  return (
    <>
      <ReactModal isOpen onRequestClose={onRequestClose} ariaHideApp={false}>
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
      </ReactModal>
      <GlobalModalStyle animation={animation} />
    </>
  )
}
