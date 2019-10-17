import React from 'react'
import ReactDOM from 'react-dom'
import {
  ModalProvider,
  ModalContext,
  ModalRoot,
  ContextModalType,
} from './lib/react-custom-modal'
import { ModalFirst, CustomModal } from './modals'
import { GlobalModalStyles } from './global'
import './styles.css'

const App = () => {
  const { showModal } = React.useContext<ContextModalType>(ModalContext)

  return (
    <>
      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <ModalFirst onRequestClose={hideModal} type='primary' />
          ))
        }
      >
        open first(primary)
      </button>

      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <ModalFirst type='success' onRequestClose={hideModal} />
          ))
        }
      >
        open second(success)
      </button>

      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <ModalFirst type='danger' onRequestClose={hideModal} />
          ))
        }
      >
        open third(danger)
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <CustomModal onRequestClose={hideModal} type='primary' />
          ))
        }
      >
        open first(primary) custom
      </button>
      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <CustomModal onRequestClose={hideModal} type='success' />
          ))
        }
      >
        open secind(success) custom
      </button>
      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <CustomModal onRequestClose={hideModal} type='danger' />
          ))
        }
      >
        open first(danger) custom
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <CustomModal onRequestClose={hideModal} />
          ))
        }
      >
        open default custom
      </button>
      <button
        onClick={() =>
          showModal(({ hideModal }) => (
            <ModalFirst onRequestClose={hideModal} />
          ))
        }
      >
        open default
      </button>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ModalProvider>
    <App />
    <GlobalModalStyles />
    <ModalRoot />
  </ModalProvider>,
  rootElement,
)
