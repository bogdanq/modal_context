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

|       Props        |                                       Type                                       | Default | required |
| :----------------: | :------------------------------------------------------------------------------: | :-----: | :------: |
|     `children`     |                                    ReactNode                                     |  null   |   true   |
|       `type`       |                    string - [`danger` , `success`, `primary`]                    |  null   |  false   |
| `customTypeStyles` |             FlattenInterpolation - {`danger` , `success`, `primary`}             |         |  false   |
|      `style`       |                               FlattenInterpolation                               |         |  false   |
|  `animationName`   | string - [`jackIn`, `rubber`, `swing`, `rotate`, `translate`, `scale`, `rollin`] |         |  false   |
| `customAnimation`  |     `FlattenInterpolation<ThemedStyledProps<{ isAnimated?: boolean }, any>>`     |         |  false   |
|    `labelText`     |                                      string                                      |         |   fale   |
|  `labelComponent`  |                      (props: CustomLabelProps) => ReactNode                      |         |  false   |
|        `id`        |                                      number                                      |         |   true   |
|    `condition`     |                                  () => boolean                                   |         |  false   |
|      `cookie`      |                                      object                                      |         |  false   |
|  `cookie => name`  |                                      string                                      |         |   true   |
| `cookie => maxAge` |                                  number - `sec`                                  |         |  false   |

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
    <div>
      <Modal animationName={animationName} {...params}>
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
    </div>
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

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`

const scaleOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1)
  }
  100% {
    opacity: 0.5;
    transform: scale(0.5)
  }
`

export const ModalForCustomAnimate = ({ customAnimationName, ...params }) => {
  return (
    <div>
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
    </div>
  )
}

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <div>
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
    </div>
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
    <div>
      <h1>Default modal</h1>
      <button
        onClick={() => {
          showModal(params => <Modal {...params} type='success' />)
        }}
      >
        Try me!
      </button>
    </div>
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
