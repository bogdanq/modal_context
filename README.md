# Context Modal

## Table of Contents

- [Installation](#installation)
- [API documentation](#api-documentation)
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

## Demos

https://bogdanq.github.io/modal-story/public/?path=/story/modals--default-modal
