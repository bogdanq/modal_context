import React from 'react'
import { useCookies } from 'react-cookie'
import { Cookie } from '../types'

type Props = {
  labelText?: string
  toogleCookie: (cookie: Cookie) => void
  cookie: Cookie
}

export const Label = ({ cookie, labelText, toogleCookie }: Props) => {
  const [cookies] = useCookies()

  return (
    <>
      <input
        checked={Boolean(cookies[cookie.name])}
        onChange={() => toogleCookie(cookie)}
        type='checkbox'
        id={`isVisible_${cookie.name}`}
        name={`isVisible_${cookie.name}`}
      />
      <label htmlFor={`isVisible_${cookie.name}`}>
        {labelText ? labelText : 'Больше не показывать'}
      </label>
    </>
  )
}
