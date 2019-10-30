# Context Modal

## Table of Contents

- [Installation](#installation)
- [API documentation](#api-documentation)
- [Examples](#examples)
- [Demos](#demos)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install context-react-modal

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider, Modal } from 'context-react-modal'

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <div>
      <button
        onClick={() => {
          showModal(params => (
            <Modal
              animationName='swing'
              condition={() => (10 > 20 ? true : false)}
              closeTimeout={400}
              {...params}
            >
              {({ closeModal }) => Some modal}
            </Modal>
          ))
        }}
      >
        Try me!
      </button>
    </div>
  )
}

const Label = ({ htmlFor, toogleCookie, ...params }) => {
  return (
    <div>
      <input {...params} onChange={toogleCookie} type='checkbox' />
      <label htmlFor={htmlFor}>do not show</label>
    </div>
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

## API documentation

|       Props        |                                  Type                                  | required |               examples                |              description               |
| :----------------: | :--------------------------------------------------------------------: | :------: | :-----------------------------------: | :------------------------------------: |
|     `children`     |                               ReactNode                                |   true   |                                       |                                        |
|       `type`       |                   string - danger , success, primary                   |  false   |    [example-types](#example-types)    |                                        |
| `customTypeStyles` |        FlattenInterpolation - key: { danger , success,primary }        |  false   |     [custom-types](#custom-types)     |                                        |
|      `style`       |                          FlattenInterpolation                          |  false   |     [custom-style](#custom-style)     |                                        |
|  `animationName`   |    string - jackIn, rubber, swing, rotate, translate, scale, rollin    |  false   |       [Animations](#animations)       |                                        |
| `customAnimation`  | FlattenInterpolation<ThemedStyledProps<{ isAnimated?: boolean }, any>> |  false   | [Custom animation](#custom-animation) |                                        |
|    `labelText`     |                                 string                                 |  false   |                                       |                                        |
|  `labelComponent`  |                 (props: CustomLabelProps) => ReactNode                 |  false   |  [label component](#label-component)  |                                        |
|        `id`        |                                 number                                 |   true   |                                       |                                        |
|    `condition`     |                             () => boolean                              |  false   |                                       | your condition to render the component |
|      `cookie`      |                                 object                                 |  false   |     [Array modals](#array-modals)     |                                        |
|  `cookie => name`  |                                 string                                 |   true   |                                       |                                        |
| `cookie => maxAge` |                             number - `MS`                              |  false   |                                       |          cookie lifetime - ms          |
|   `closeTimeout`   |                             number - `MS`                              |  false   |                                       | time to remove a component - ms (400)  |

## API context

|      Context      |                                         Type                                         |     description      |
| :---------------: | :----------------------------------------------------------------------------------: | :------------------: |
|    `showModal`    |  `<T extends RenderNodeModal | Array<RenderNodeModal>>(renderNodeModal: T) => void`  | modal open function  |
|    `hideModal`    |                                 (id: number) => void                                 | modal close request  |
|    `nodeList`     | Array<{ id: number, node: node: (props: { id: number; key: number }) => ReactNode }> |    opened modals     |
|  `currentNodeId`  |                                        number                                        |   id active modal    |
| `renderNodeModal` |             RenderNodeModal = (props: { id: number }) => React.ReactNode             | modal component type |

## Examples

### You can use modal with typescript

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {
  ModalContext,
  ModalRootProvider,
  Modal,
  ContextModalType,
  Params,
  CustomLabelProps,
} from 'context-react-modal'

interface Props extends Params {}

const Label = ({ htmlFor, toogleCookie, ...params }: CustomLabelProps) => {
  return (
    <div>
      <input {...params} onChange={toogleCookie} type='checkbox' />
      <label htmlFor={htmlFor}>do not show</label>
    </div>
  )
}

const App = ({  }: Props) => {
  const { showModal } = React.useContext < ContextModalType > ModalContext

  return (
    <div>
      <h1>Default modal</h1>
      <button
        onClick={() => {
          showModal(params => <Modal {...params} />)
        }}
      >
        Try me!
      </button>
    </div>
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

### example-types

```jsx
import React from 'react'
import { ModalContext, Modal } from 'context-react-modal'

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

### custom-types

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from 'context-react-modal'

const customModalType = {
  danger: css`
    background: #f37b7b;
  `,
  success: css`
    background: blueviolet;
  `,
  primary: css`
    background: orange;
  `,
}

export const ModalForCustomTypes = ({ type, ...params }: Props) => {
  return (
    <div>
      <Modal {...params} customTypeStyles={customModalType} type={type}>
        {({ closeModal }) => (
          <div>
            <h1>Modal with custom type</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur
            <Button onClick={closeModal}>×</Button>
          </div>
        )}
      </Modal>
    </div>
  )
}

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <div>
      <h1>Modal with custom types</h1>
      <button
        onClick={() => {
          showModal(params => (
            <ModalForCustomTypes {...params} type='success' />
          ))
        }}
      >
        Try me!
      </button>
    </div>
  )
}
```

### custom-style

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from 'context-react-modal'

const customStyle = css`
  background: #fff;
  width: 500px;
  border-radius: inherit;
  font-size: 1rem;
  padding: 0;
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  right: 0;
`

export const ModalForCustomStyle = ({ ...params }: Props) => {
  return (
    <div>
      <Modal {...params} style={customStyle}>
        {({ closeModal }) => (
          <div>
            <Header>Modal with custom style</Header>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              consectetur euismod erat. Sed imperdiet sollicitudin urna non
            </Text>
            <Button onClick={closeModal}>×</Button>
          </div>
        )}
      </Modal>
    </div>
  )
}
const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <div>
      <h1>Modal with custom types</h1>
      <button
        onClick={() => {
          showModal(params => <ModalForCustomStyle {...params} />)
        }}
      >
        Try me!
      </button>
    </div>
  )
}
```

### Animations

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, Modal } from 'context-react-modal'

const ModalForAnimate = ({ animationName, ...params }) => {
  return (
    <div>
      <Modal animationName={animationName} {...params}>
        {({ closeModal }) => (
          <div>
            <h1>Modal with amimation - {animationName}</h1>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  )
}

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <div>
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

### Custom animation

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, Modal } from 'context-react-modal'

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
        customAnimation={animationCustomStyle[customAnimationName]}
        {...params}
      >
        {({ closeModal }) => (
          <div>
            <h1>Modal with custom animation - scale</h1>
            <button onClick={closeModal}>Close</button>
          </div>
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

### label component

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, Modal } from 'context-react-modal'

const Label = ({ htmlFor, toogleCookie, ...params }) => {
  return (
    <div>
      <input {...params} onChange={toogleCookie} type='checkbox' />
      <label htmlFor={htmlFor}>do not show</label>
    </div>
  )
}

const App = () => {
  const { showModal } = React.useContext(ModalContext)

  return (
    <div>
      <h1>Custom label component</h1>
      <button
        onClick={() => {
          showModal(params => <Modal {...params} labelComponent={Label} />)
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
import { ModalContext, Modal } from 'context-react-modal'

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
