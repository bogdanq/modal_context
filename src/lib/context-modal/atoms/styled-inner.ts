import styled, { css } from 'styled-components'
import { getStyle } from '../styled-components-layout'
import { translateOut, translateIn, animationStyle } from './animate-styled'
import { ModalInnerProps } from '../typings'
import { Button } from './styled-root-wrapper'

const modalType = {
  danger: css`
    background: #ff3547;
    color: #fff;
    ${Button} {
      background-color: transparent;
      border: 2px solid #fff;
    }
  `,
  success: css`
    background: #00c851;
    color: #fff;
    ${Button} {
      background-color: transparent;
      border: 2px solid #fff;
    }
  `,
  primary: css`
    background: #5bc0de;
    color: #fff;
    ${Button} {
      background-color: transparent;
      border: 2px solid #fff;
    }
  `,
}

export const ModalInner = styled.div<ModalInnerProps>`
  background: #fff;
  padding: 20px 30px;
  text-align: left;
  width: 80%;
  max-width: 650px;
  position: relative;
  border: 1px solid transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 0 auto;
  animation-duration: 0.5s;
  animation-name: ${({ isAnimated }) =>
    isAnimated ? translateIn : translateOut};
  ${({ customStyle }) => customStyle}
  ${getStyle('type', modalType)}
  ${getStyle('animationName', animationStyle)}
  ${({ customAnimation }) => customAnimation}
`
