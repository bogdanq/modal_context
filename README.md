# Context Modal

## Table of Contents

- [Installation](#installation)
- [API documentation](#api-documentation)
- [Examples](#examples)
- [Demos](#demos)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install context-react-modal

## API documentation

|        Props         |               Type               | Default | required |
| :------------------: | :------------------------------: | :-----: | :------: |
|     [`children`]     |            ReactNode             |  null   |   true   |
|       [`type`]       | [`danger`, `success`, `primary`] |  null   |  false   |
| [`customTypeStyles`] |                                  |         |          |
|      [`style`]       |                                  |         |          |
|  [`animationName`]   |                                  |         |          |
| [`customAnimation`]  |                                  |         |          |
|    [`labelText`]     |                                  |         |          |
|  [`labelComponent`]  |                                  |         |          |
|        [`id`]        |                                  |         |          |
|    [`condition`]     |                                  |         |          |
|      [`cookie`]      |                                  |         |          |
|  [`cookie => name`]  |                                  |         |          |
| [`cookie => maxAge`] |                                  |         |          |

## Examples

### Default modal

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider, Modal } from 'context-react-modal'

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <>
      <h1>Default modal</h1>
      <button
        onClick={() => {
          showModal(params => <Modal {...params} />)
        }}
      >
        Try me!
      </button>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ModalRootProvider>
    <App />
  </ModalRootProvider>,
  rootElement,
)
```

### Modal for animations

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider, Modal } from 'context-react-modal'

const ModalForAnimate = ({ animationName, ...params }) => {
  return (
    <>
      <Modal cookie={cookie} animationName={animationName} {...params}>
        {({ closeModal }) => (
          <>
            <h1>Modal for amimation - {animationName}</h1>
            <button onClick={closeModal}>Close</button>
          </>
        )}
      </Modal>
    </>
  )
}

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <>
      <h1>Default modal</h1>
      <button
        onClick={() => {
          showModal(params => (
            <ModalForAnimate {...params} animationName='jackIn' />
          ))
        }}
      >
        Try me!
      </button>
    </>
  )
}
```

### Modal for custom animation

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider, Modal } from 'context-react-modal'

const animationCustomStyle = {
  zoom: css`
    animation-duration: 0.5s;
    animation-name: ${({ isAnimated }: { isAnimated?: boolean }) =>
      isAnimated ? zoomIn : scaleOut};
  `,
}

export const ModalForCustomAnimate = ({ customAnimationName, ...params }) => {
  return (
    <>
      <Modal
        customAnimation={
          customAnimationName && animationCustomStyle[customAnimationName]
        }
        {...params}
      >
        {({ closeModal }) => (
          <>
            <h1>Modal for custom animation - scale</h1>
            <button onClick={closeModal}>Close</button>
          </>
        )}
      </Modal>
    </>
  )
}

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <>
      <h1>Parent component</h1>
      <button
        onClick={() => {
          showModal(params => (
            <ModalForCustomAnimate {...params} customAnimationName='zoom' />
          ))
        }}
      >
        Try me!
      </button>
    </>
  )
}
```

### Modal for types

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider, Modal } from 'context-react-modal'

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <>
      <h1>Default modal</h1>
      <button
        onClick={() => {
          showModal(params => <Modal {...params} type='success' />)
        }}
      >
        Try me!
      </button>
    </>
  )
}
```

### Array modals

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider, Modal } from 'context-react-modal'

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  React.useEffect(() => {
    showModal([
      params => (
        <Modal
          {...params}
          animationName='swing'
          condition={() => true}
          // you can hide modal
          cookie={{
            name: 'modal_name_1',
          }}
        />
      ),
      params => (
        <Modal
          {...params}
          animationName='rubber'
          cookie={{
            name: 'modal_name_2',
            maxAge: 100 * 60,
          }}
        />
      ),
    ])
  }, [showModal])

  return <h1>You component</h1>
}
```

## Demos

https://codesandbox.io/s/modal-seqrl
