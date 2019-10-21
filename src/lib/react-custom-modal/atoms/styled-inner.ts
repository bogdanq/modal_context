import styled, { FlattenSimpleInterpolation, css } from 'styled-components'
import { getStyle } from '../styled-components-layout'
import { translateOut, translateIn } from './animate-styled'

export type ModalType = {
  danger: FlattenSimpleInterpolation
  success: FlattenSimpleInterpolation
  primary: FlattenSimpleInterpolation
}

const modalType: ModalType = {
  danger: css`
    background: red;
  `,
  success: css`
    background: green;
  `,
  primary: css`
    background: yellow;
  `,
}

type Props = {
  type?: keyof ModalType | undefined
  customTypes?: ModalType
  customStyle?: any
  isAnimated?: boolean
}

export const ModalInner = styled.div<Props>`
  background: #fff;
  padding: 20px 30px;
  text-align: left;
  max-width: 650px;
  position: relative;
  border: 1px solid transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  animation-duration: 0.5s;
  animation-name: ${({ isAnimated }) =>
    isAnimated ? translateIn : translateOut};
  ${({ customStyle }) => customStyle}
  ${getStyle('type', modalType)}
`
