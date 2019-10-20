import React from 'react'
import ReactDOM from 'react-dom'
import {
  ModalProvider,
  ModalContext,
  ModalRoot,
  ContextModalType,
} from './lib/react-custom-modal'
import {
  DefaultModal,
  ModalForTypes,
  ModalForCustomTypes,
  ModalForAnimate,
  ModalForCustomAnimate,
  ModalForCustomStyle,
  ModalForCustomButton,
  ModalForChildren,
} from './modals'
import './styles.css'
import styled from 'styled-components'

const App = () => {
  const { showModal } = React.useContext<ContextModalType>(ModalContext)
  // React.useEffect(() => {
  //   pushArray(({ hideModal }: any) => [
  //     <DefaultModal onRequestClose={hideModal} />,
  //     <ModalForTypes onRequestClose={hideModal} type='danger' />,
  //     <DefaultModal onRequestClose={hideModal} />,
  //   ])
  // }, [])

  return (
    <>
      <h2>
        Модальное окно не привязано к текущему компоненту благодаря контексту,
        можно управлять ей из любого другого компонента
      </h2>
      <h2>Стандартное модальное окно</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <DefaultModal onRequestClose={hideModal} />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>Типы модальных окон (danger, success, primary)</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForTypes onRequestClose={hideModal} type='danger' />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForTypes onRequestClose={hideModal} type='success' />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForTypes onRequestClose={hideModal} type='primary' />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>
        Есть возможность кастомизации стилей для типов (danger, success,
        primary)
      </h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForCustomTypes onRequestClose={hideModal} type='danger' />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForCustomTypes onRequestClose={hideModal} type='success' />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForCustomTypes onRequestClose={hideModal} type='primary' />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>В библиотеку входит набор стандартных анимаций</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForAnimate onRequestClose={hideModal} animation='scale' />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForAnimate
                onRequestClose={hideModal}
                animation='translate'
              />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>Не нравится стандаотный набор анимаций? кастомизируйте!</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForCustomAnimate onRequestClose={hideModal} />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>
        Внешний вид так же можно кастомизировать, так же и кнопку закрытия
        модального окна
      </h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForCustomStyle onRequestClose={hideModal} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForCustomButton onRequestClose={hideModal} />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>
        Можно так же открывать модальное окно внутри другого, неограниченное
        кол-во раз
      </h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(({ hideModal }) => (
              <ModalForChildren onRequestClose={hideModal} />
            ))
          }}
        >
          Try me!
        </button>
      </FlexWrapper>
    </>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #000;
  padding: 20px 0;
  flex-wrap: wrap;
  & > button + button {
    margin-right: 50px;
  }
`

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ModalProvider>
    <App />
    <ModalRoot />
  </ModalProvider>,
  rootElement,
)
