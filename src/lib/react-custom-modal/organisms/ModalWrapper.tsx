import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'
import { ModalType, StyledWrapper, StyledRootWrapper, StyledInner } from '../'

type Props = {
  onRequestClose: () => void
  children: ReactNode
  hasError?: boolean
  visible?: boolean
  type?: keyof ModalType
  modalType?: object
  closeButton?: (close: any) => ReactNode
  style?: any
}

export const ModalWrapper = ({
  onRequestClose,
  children,
  type,
  modalType,
  closeButton,
  style,
}: Props) => {
  return (
    <ReactModal isOpen onRequestClose={onRequestClose} ariaHideApp={false}>
      <StyledRootWrapper onClick={onRequestClose}>
        <StyledWrapper>
          <StyledInner
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
          </StyledInner>
        </StyledWrapper>
      </StyledRootWrapper>
    </ReactModal>
  )
}
