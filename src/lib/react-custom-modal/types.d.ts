import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export type ModalType = {
  danger: FlattenSimpleInterpolation
  success: FlattenSimpleInterpolation
  primary: FlattenSimpleInterpolation
}

export type Animation =
  | 'scale'
  | 'translate'
  | 'rotate'
  | 'jackIn'
  | 'rubber'
  | 'swing'
  | 'rollin'

export type ModalWrapperProps = {
  onRequestClose: () => void
  children: ReactNode
  type?: keyof ModalType
  closeButton?: (close: () => void) => React.ReactNode
  typesStyle?: ModalType
  style?: FlattenSimpleInterpolation
  animationName?: Animation
  customAnimation?: any
  nodeModal?: any
}

export type GlobalModalStyleProps = {
  animationName?: Animation
  isAnimated?: boolean
  customAnimation?: any
}

type ModalInnerProps = {
  type?: keyof ModalType
  typesStyle?: ModalType
  customStyle?: FlattenSimpleInterpolation
  isAnimated?: boolean
}

export type ModalWrapperProps = {
  onRequestClose: () => void
  children: React.ReactNode
  type?: keyof ModalType
  closeButton?: (close: () => void) => React.ReactNode
  typesStyle?: ModalType
  style?: (React.CSSProperties & FlattenSimpleInterpolation) | undefined
  animationName?: Animation
  customAnimation?: any
  nodeModal?: any
}
