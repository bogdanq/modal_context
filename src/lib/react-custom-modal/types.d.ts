import React, { Dispatch } from 'react'
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
  condition?: () => boolean
  cookie?: {
    name: string
    maxAge?: number
    isNotChange?: boolean
    showCount?: number
  }
  type?: keyof ModalType
  animationName?: Animation
}

export type RenderNodeModal = (arg: { id: number }) => ReactNode
export type ShowModal = <T extends RenderNodeModal | Array<RenderNodeModal>>(
  renderNodeModal: T,
) => void

export type ContextModalType = {
  showModal: ShowModal
  hideModal: (id: number) => void
  nodeList: Array<any>
  currentNodeId: number | null
  setCurrentNodeId: Dispatch<any>
}

export type CurrentModal = { id: number; node: ReactNode }
