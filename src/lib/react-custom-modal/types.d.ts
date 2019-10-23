import React from 'react'
import {
  FlattenSimpleInterpolation,
  ThemedStyledFunction,
  ThemeProps,
} from 'styled-components'

export type ModalType = {
  danger: FlattenInterpolation
  success: FlattenInterpolation
  primary: FlattenInterpolation
}

export type AnimationType = {
  scale: FlattenInterpolation
  translate: FlattenInterpolation
  rotate: FlattenInterpolation
  jackIn: FlattenInterpolation
  rubber: FlattenInterpolation
  swing: FlattenInterpolation
  rollin: FlattenInterpolation
}

export type Animation =
  | 'scale'
  | 'translate'
  | 'rotate'
  | 'jackIn'
  | 'rubber'
  | 'swing'
  | 'rollin'

interface ModalWrapperProps extends Params {
  children: (args: { closeModal: () => void }) => React.ReactNode
  type?: keyof ModalType
  customTypeStyles?: ModalType
  style?: FlattenSimpleInterpolation
  animationName?: Animation
  customAnimation?: any
}

export type GlobalModalStyleProps = {
  animationName?: Animation
  isAnimated?: boolean
  customAnimation?: any
}

type ModalInnerProps = {
  type?: keyof ModalType
  customTypeStyles?: ModalType
  customStyle?: FlattenSimpleInterpolation
  isAnimated?: boolean
  animationName?: any
  customAnimation?: any
}

export type Params = {
  id: number
  cookie?: {
    name: string
    maxAge?: number
  }
  type?: keyof ModalType
  animationName?: Animation
}
