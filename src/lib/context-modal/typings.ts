import React, { Dispatch } from 'react'
import {
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components'

export type ModalType = {
  danger: FlattenInterpolation<any>
  success: FlattenInterpolation<any>
  primary: FlattenInterpolation<any>
}

export type AnimationType = {
  scale: FlattenInterpolation<any>
  translate: FlattenInterpolation<any>
  rotate: FlattenInterpolation<any>
  jackIn: FlattenInterpolation<any>
  rubber: FlattenInterpolation<any>
  swing: FlattenInterpolation<any>
  rollin: FlattenInterpolation<any>
}

export type Animation =
  | 'scale'
  | 'translate'
  | 'rotate'
  | 'jackIn'
  | 'rubber'
  | 'swing'
  | 'rollin'

type CustomAnimationType = FlattenInterpolation<
  ThemedStyledProps<{ isAnimated?: boolean }, any>
>

export interface ModalWrapperProps extends Params {
  children: (props: { closeModal: () => void }) => React.ReactNode
  type?: keyof ModalType
  customTypeStyles?: ModalType
  style?: FlattenSimpleInterpolation
  animationName?: Animation
  customAnimation?: CustomAnimationType
  labelText?: string
  labelComponent?: (props: CustomLabelProps) => React.ReactNode
}

export type GlobalModalStyleProps = {
  animationName?: Animation
  isAnimated?: boolean
  customAnimation?: FlattenSimpleInterpolation
}

export type ModalInnerProps = {
  type?: keyof ModalType
  customTypeStyles?: ModalType
  customStyle?: FlattenSimpleInterpolation
  isAnimated?: boolean
  animationName?: Animation
  customAnimation?: CustomAnimationType
  closeTimeout?: number
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
  customAnimationName?: string
  closeTimeout?: number
}

export type RenderNodeModal = (props: { id: number }) => React.ReactNode
export type ShowModal = <T extends RenderNodeModal | Array<RenderNodeModal>>(
  renderNodeModal: T,
) => void

export type ContextModalType = {
  showModal: ShowModal
  hideModal: (id: number) => void
  nodeList: Array<CurrentModal>
  currentNodeId: number | null
  setCurrentNodeId: Dispatch<any>
  setCloseTimeout: Dispatch<any>
}

export type CurrentModal = {
  id: number
  node: (props: { id: number; key: number }) => React.ReactNode
}

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

export type LabelProps = {
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
