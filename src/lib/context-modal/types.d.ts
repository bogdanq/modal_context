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
  labelText?: string
  labelComponent?: (params: CustomLabelProps) => React.ReactNode
}

export type GlobalModalStyleProps = {
  animationName?: Animation
  isAnimated?: boolean
  customAnimation?: FlattenSimpleInterpolation
}

type ModalInnerProps = {
  type?: keyof ModalType
  customTypeStyles?: ModalType
  customStyle?: FlattenSimpleInterpolation
  isAnimated?: boolean
  animationName?: string
  customAnimation?: FlattenSimpleInterpolation
}

export type Params = {
  id: number
  condition?: () => boolean
  cookie?: {
    name: string
    maxAge?: number
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

export type CustomLabelProps = {
  toogleCookie:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined
  id: string
  name: string
  htmlFor: string
}

export type Cookie = {
  name: string
  maxAge?: number
}

type LabelProps = {
  labelText?: string
  toogleCookie: (cookie: Cookie) => void
  cookie: Cookie
}

export type WithRoolesRenderProps = {
  renderExist?: (params: CustomLabelProps) => React.ReactNode
  renderEmpty: (params: LabelProps) => any
  cookie?: Cookie
  labelText?: string
}
