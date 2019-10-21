import { css, createGlobalStyle } from 'styled-components'
import { ModalInner } from './lib/react-custom-modal'

export const CustomModalAnimate = css`
  ${ModalInner} {
  }
`

export const CustomModalAnimateGlobal = createGlobalStyle`${CustomModalAnimate}`
