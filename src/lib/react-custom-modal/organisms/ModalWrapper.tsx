import React from 'react'
import ReactDOM from 'react-dom'
import { useCookies } from 'react-cookie'
import { StyledWrapper, StyledRootWrapper, ModalInner } from '../'
import { GlobalModalStyle } from '../atoms'
import { ModalContext, ContextModalType } from '../ModalContext'
import { ModalWrapperProps } from '../types'

export const ModalWrapper = ({
  children,
  type,
  customTypeStyles,
  style,
  animationName,
  customAnimation,
  cookie,
  id,
}: ModalWrapperProps) => {
  const { stack, currentNodeId, pop } = React.useContext<ContextModalType>(
    ModalContext,
  )

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

  const findId = React.useMemo(() => stack.findIndex(item => item.id === id), [
    id,
    stack,
  ])

  const findCurrentNodeId = React.useMemo(
    () => stack.findIndex(item => item.id === currentNodeId),
    [currentNodeId, stack],
  )

  return (
    <>
      <ModalPortal>
        <StyledRootWrapper onClick={() => pop(id)}>
          <StyledWrapper>
            <ModalInner
              animationName={animationName}
              customAnimation={customAnimation}
              customStyle={style}
              customTypeStyles={customTypeStyles}
              isAnimated={findId !== findCurrentNodeId}
              type={type}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {children({ closeModal: () => pop(id) })}

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
            </ModalInner>
          </StyledWrapper>
        </StyledRootWrapper>
      </ModalPortal>
      <GlobalModalStyle />
    </>
  )
}

export const ModalPortal = ({ children }: { children: React.ReactElement }) => {
  const rootElement = document.querySelector('#modal')

  return rootElement ? ReactDOM.createPortal(children, rootElement) : null
}
