import React from 'react'

type TProps = {
  title: string
}

export const ModalHeader = ({ title }: TProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
