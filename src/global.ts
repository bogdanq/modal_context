import { css, createGlobalStyle } from 'styled-components'
import { ModalInner } from './lib/react-custom-modal'

export const CustomModalAnimate = css`
  /* style for active modal */
  ${ModalInner} {
    transition: all 0.4s;
    transform: rotate(180deg);
  }
  /* style for ReactModal */
  .ReactModal {
    &__Content {
      &--after-open {
        ${ModalInner} {
          transform: rotate(0);
        }
      }
      &--before-close {
        ${ModalInner} {
          transform: rotate(180deg);
        }
      }
    }
  }
`

export const CustomModalAnimateGlobal = createGlobalStyle`${CustomModalAnimate}`
