import React from 'react'
import ReactDOM from 'react-dom'
import { useCookies } from 'react-cookie'
import { StyledWrapper, StyledRootWrapper, ModalInner, Label } from '../atoms'
import { GlobalModalStyle } from '../atoms'
import { ModalContext } from '../modal-context'
import {
  ModalWrapperProps,
  ContextModalType,
  WithRoolesRenderProps,
} from '../typings'

export const Modal = ({
  children,
  cookie,
  id,
  condition,
  labelText,
  labelComponent,
  style,
  closeTimeout,
  ...rest
}: ModalWrapperProps) => {
  const {
    nodeList,
    currentNodeId,
    hideModal,
    setCloseTimeout,
  } = React.useContext<ContextModalType>(ModalContext)

  React.useEffect(() => {
    setCloseTimeout(closeTimeout ? closeTimeout : 400)
  }, [closeTimeout, setCloseTimeout])

  const [cookies] = useCookies()

  const isFindCookieName = React.useMemo(
    () => getCookieName(cookies, cookie),
    /* eslint-disable-next-line*/
    [cookie],
  )

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
          className='modal-portal'
        >
          <StyledWrapper>
            <ModalInner
              {...rest}
              closeTimeout={closeTimeout}
              customStyle={style}
              isAnimated={findId !== findCurrentNodeId}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {children({ closeModal: () => hideModal(id) })}
              <WithLabelRender
                cookie={cookie}
                labelText={labelText}
                renderEmpty={Label}
                renderExist={labelComponent}
              />
            </ModalInner>
          </StyledWrapper>
          <GlobalModalStyle />
        </StyledRootWrapper>
      </ModalPortal>
    </>
  )
}

const WithLabelRender = ({
  renderExist,
  renderEmpty,
  cookie,
  labelText,
}: WithRoolesRenderProps) => {
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
    [cookies, removeCookie, setCookie],
  )

  if (cookie) {
    return renderExist
      ? renderExist({
          toogleCookie: () => toogleCookie(cookie),
          id: cookie.name,
          name: cookie.name,
          htmlFor: cookie.name,
        })
      : renderEmpty({ labelText, cookie, toogleCookie })
  }
  return null
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
  if (isFindCookieName && condition()) {
    return ReactDOM.createPortal(children, document.body)
  }

  return null
}

const getCookieName = <T, U extends keyof T>(
  cookies: T,
  cookie?: { name: U } | null,
): boolean => {
  if (cookie) {
    if (cookies[cookie.name]) {
      return false
    }
  }
  return true
}
