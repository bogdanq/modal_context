import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext, ModalRootProvider } from './lib/react-custom-modal'
import { ContextModalType } from './lib/react-custom-modal/types'
import {
  DefaultModal,
  ModalForTypes,
  ModalForCustomTypes,
  ModalForAnimate,
  ModalForCustomAnimate,
  ModalForCustomStyle,
  ModalForChildren,
} from './modals'
import './styles.css'
import styled from 'styled-components'

const App = () => {
  const { showModal } = React.useContext<ContextModalType>(ModalContext)

  React.useEffect(() => {
    showModal([
      params => (
        <ModalForAnimate
          {...params}
          animationName='jackIn'
          condition={() => true}
          cookie={{
            name: 'default_modal_0',
          }}
        />
      ),
      params => (
        <ModalForTypes
          {...params}
          animationName='rollin'
          condition={() => true}
          cookie={{
            name: 'default_modal_1',
          }}
        />
      ),
    ])
  }, [])

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
            showModal(params => <DefaultModal {...params} />)
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>Типы модальных окон (danger, success, primary)</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(params => <ModalForTypes type='danger' {...params} />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => <ModalForTypes type='success' {...params} />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => <ModalForTypes type='primary' {...params} />)
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
            showModal(params => (
              <ModalForCustomTypes type='danger' {...params} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForCustomTypes type='success' {...params} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForCustomTypes type='primary' {...params} />
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
            showModal(params => (
              <ModalForAnimate animationName='scale' {...params} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForAnimate animationName='translate' {...params} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForAnimate animationName='rotate' {...params} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForAnimate animationName='jackIn' {...params} />
            ))
          }}
        >
          Try me! jackIn
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForAnimate animationName='rubber' {...params} />
            ))
          }}
        >
          Try me! rubber
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForAnimate animationName='swing' {...params} />
            ))
          }}
        >
          Try me! swing
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForAnimate animationName='rollin' {...params} />
            ))
          }}
        >
          Try me! rollin
        </button>
      </FlexWrapper>

      <h2>Не нравится стандаотный набор анимаций? кастомизируйте!</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForCustomAnimate customAnimationName='rollin' {...params} />
            ))
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(params => (
              <ModalForCustomAnimate customAnimationName='zoom' {...params} />
            ))
          }}
        >
          Try me! zoom
        </button>
      </FlexWrapper>

      <h2>
        Внешний вид так же можно кастомизировать, так же и кнопку закрытия
        модального окна
      </h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(params => <ModalForCustomStyle {...params} />)
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
            showModal(params => <ModalForChildren {...params} />)
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
  <ModalRootProvider>
    <App />
  </ModalRootProvider>,
  rootElement,
)
