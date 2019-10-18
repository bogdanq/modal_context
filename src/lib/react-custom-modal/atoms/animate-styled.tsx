import React from 'react'
import { css, createGlobalStyle } from 'styled-components'
import { getStyle } from '../styled-components-layout'
import { StyledRootWrapper, ModalInner } from '../'

export type Animation = 'scale' | 'translate'

type Props = {
  animation?: Animation
}

export const GlobalModalStyle = ({ animation }: Props) => {
  const CustomStyles = css`
    .ReactModal {
      &__Body {
        &--open {
          overflow: hidden;
        }
      }
      &__Content {
        border: none !important;
        background: transparent !important;
        &--after-open {
          ${ModalInner} {
            opacity: 1;
          }
        }
        &--before-close {
          ${ModalInner} {
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

  const animationStyle = {
    scale: css`
      ${ModalInner} {
        transform: scale(0.7);
      }
      .ReactModal {
        &__Content {
          &--after-open {
            ${ModalInner} {
              transform: scale(1);
            }
          }
          &--before-close {
            ${ModalInner} {
              transform: scale(0.7);
            }
          }
        }
      }
    `,
    translate: css`
      ${ModalInner} {
        transform: translateX(-100px);
      }
      .ReactModal {
        &__Content {
          &--after-open {
            ${ModalInner} {
              transform: translateX(0);
            }
          }
          &--before-close {
            ${ModalInner} {
              transform: translateX(-100px);
            }
          }
        }
      }
    `,
  }

  const SecondModalStyled = css`
    ${ModalInner} {
      transition: all 0.4s;
      ${getStyle('animation', animationStyle)}
    }
    ${getStyle('animation', animationStyle)}
  `

  const SecondModalStyles = createGlobalStyle<{
    animation?: Animation
  }>`${SecondModalStyled}`

  const GlobalModalStyles = createGlobalStyle`${CustomStyles}`

  return (
    <>
      <GlobalModalStyles />
      <SecondModalStyles animation={animation} />
    </>
  )
}
