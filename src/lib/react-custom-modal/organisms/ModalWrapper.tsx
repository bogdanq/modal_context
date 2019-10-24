import React from 'react'
import ReactDOM from 'react-dom'
import { useCookies } from 'react-cookie'
import { StyledWrapper, StyledRootWrapper, ModalInner } from '../'
import { GlobalModalStyle } from '../atoms'
import { ModalContext } from '../ModalContext'
import { ModalWrapperProps, ContextModalType } from '../types'

export const ModalWrapper = ({
  children,
  type,
  customTypeStyles,
  style,
  animationName,
  customAnimation,
  cookie,
  id,
  condition,
}: ModalWrapperProps) => {
  const { nodeList, currentNodeId, hideModal } = React.useContext<
    ContextModalType
  >(ModalContext)

  const [cookies, setCookie, removeCookie] = useCookies()

  const isFindCookieName = React.useMemo(
    () => getCookieName(cookies, cookie),
    [],
  )

  const toogleCookie = React.useCallback(cookie => {
    if (isFindCookieName) {
      setCookie(cookie.name, true, {
        maxAge: cookie.maxAge ? cookie.maxAge : 1000 * 60 * 15,
      })
    } else {
      removeCookie(cookie.name)
    }
  }, [])

  const findId = React.useMemo(
    () => nodeList.findIndex(item => item.id === id),
    [id, nodeList],
  )

  const findCurrentNodeId = React.useMemo(
    () => nodeList.findIndex(item => item.id === currentNodeId),
    [currentNodeId, nodeList],
  )

  return (
    <>
      <ModalPortal isFindCookieName={isFindCookieName} condition={condition}>
        <StyledRootWrapper
          onClick={() => hideModal(id)}
          cookie={cookie}
          id={id}
        >
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
              {children({ closeModal: () => hideModal(id) })}

              {cookie && !cookie.isNotChange && (
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
          <GlobalModalStyle />
        </StyledRootWrapper>
      </ModalPortal>
    </>
  )
}

export const ModalPortal = ({
  children,
  isFindCookieName,
  condition = () => true,
}: {
  children: React.ReactElement
  isFindCookieName: boolean
  condition?: () => boolean
}) => {
  const rootElement = document.querySelector('#modal')

  if (rootElement && isFindCookieName && condition()) {
    return ReactDOM.createPortal(children, rootElement)
  }

  return null
}

const getCookieName = <T, U extends keyof T>(
  cookies: T,
  cookie?: { name: U; isNotChange?: boolean } | null,
): boolean => {
  if (cookie) {
    if (cookies[cookie.name]) {
      return false
    }
  }

  return true
}
