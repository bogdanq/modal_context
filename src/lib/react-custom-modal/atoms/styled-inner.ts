import styled, { FlattenSimpleInterpolation, css } from 'styled-components'
import { getStyle } from '../styled-components-layout'

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
  customTypes?: object
  customStyle?: object
}

export const StyledInner = styled.div<Props>`
  background: #fff;
  padding: 20px 30px;
  text-align: left;
  max-width: 650px;
  margin: 40px auto;
  position: relative;
  border: 1px solid transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  opacity: 0;
  ${({ customStyle }: any) => customStyle}
  ${getStyle('type', modalType)}
`
