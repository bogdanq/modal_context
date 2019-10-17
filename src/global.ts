import { css, createGlobalStyle } from 'styled-components'
import { StyledRootWrapper, StyledInner } from './lib/react-custom-modal'

export const ModalStyled = css`
  /* style for active modal */
  ${StyledInner} {
    transition: all 0.4s;
    transform: translateX(-100px);
  }
  /* style for ReactModal */
  .ReactModal {
    &__Body {
      &--open {
        overflow: hidden;
      }
    }

    /* style for ReactModal__content 
    kill through important!!! */
    &__Content {
      border: none !important;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      &--after-open {
        ${StyledInner} {
          opacity: 1;
          transform: translate(0);
        }
      }
      &--before-close {
        ${StyledInner} {
          transform: translateX(100px);
          opacity: 0;
        }
      }
    }

    &__Overlay {
      &--after-open {
        ${StyledRootWrapper} {
          opacity: 1;
        }
      }
      &--before-close {
        ${StyledRootWrapper} {
          opacity: 0;
        }
      }
    }
  }
`

export const GlobalModalStyles = createGlobalStyle`${ModalStyled}`
