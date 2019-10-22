import React from 'react'
import ReactDOM from 'react-dom'
import { useCookies } from 'react-cookie'
import { StyledWrapper, StyledRootWrapper, ModalInner } from '../'
import { GlobalModalStyle } from '../atoms'
import { ModalContext, ContextModalType } from '../ModalContext'
import { ModalWrapperProps } from '../types'
import { ButtonWrapper, Button } from '../atoms/styled-root-wrapper'

export const ModalWrapper = ({
  children,
  type,
  typesStyle,
  closeButton,
  style,
  animationName,
  customAnimation,
  cookie,
}: ModalWrapperProps) => {
  const { isAnimated, pop } = React.useContext<ContextModalType>(ModalContext)

  const [cookies, setCookie, removeCookie] = useCookies()

  const toogleCookie = React.useCallback(
    cookie => {
      if (cookies[cookie.name]) {
        removeCookie(cookie.name)
      } else {
        setCookie(cookie.name, true, {
          maxAge: cookie.maxAge ? cookie.maxAge : 1000 * 60 * 15,
        })
      }
    },
    [cookies],
  )

  return (
    <>
      <ModalPortal>
        <StyledRootWrapper className='modal-isOpen' onClick={pop}>
          <StyledWrapper>
            <ModalInner
              customStyle={style}
              typesStyle={typesStyle}
              isAnimated={isAnimated}
              type={type}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {children}

              {cookie && (
                <div>
                  <input
                    checked={Boolean(cookies[cookie.name])}
                    onChange={() => toogleCookie(cookie)}
                    type='checkbox'
                    id={`isVisible_${cookie.name}`}
                    name={`isVisible_${cookie.name}`}
                  />
                  <label htmlFor={`isVisible_${cookie.name}`}>
                    Больше не показывать
                  </label>
                </div>
              )}

              {closeButton ? (
                closeButton(pop)
              ) : (
                <ButtonWrapper>
                  <Button onClick={pop}>Ok</Button>
                </ButtonWrapper>
              )}
            </ModalInner>
          </StyledWrapper>
        </StyledRootWrapper>
      </ModalPortal>
      <GlobalModalStyle
        animationName={animationName}
        isAnimated={isAnimated}
        customAnimation={customAnimation}
      />
    </>
  )
}

export const ModalPortal = ({ children }: { children: React.ReactElement }) => {
  const rootElement = document.querySelector('#modal')

  return rootElement ? ReactDOM.createPortal(children, rootElement) : null
}
