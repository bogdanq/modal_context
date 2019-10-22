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
  React.useEffect(() => {
    showModal([
      <ModalForAnimate
        animationName='jackIn'
        cookie={{
          name: 'default_modal_2',
          maxAge: 1000 * 60,
        }}
      />,
      <ModalForAnimate
        animationName='translate'
        cookie={{
          name: 'default_modal_3',
          maxAge: 1000 * 60,
        }}
      />,
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
            showModal(<DefaultModal />)
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>Типы модальных окон (danger, success, primary)</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(<ModalForTypes type='danger' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForTypes type='success' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForTypes type='primary' />)
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
            showModal(<ModalForCustomTypes type='danger' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForCustomTypes type='success' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForCustomTypes type='primary' />)
          }}
        >
          Try me!
        </button>
      </FlexWrapper>

      <h2>В библиотеку входит набор стандартных анимаций</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='scale' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='translate' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='rotate' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='jackIn' />)
          }}
        >
          Try me! jackIn
        </button>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='rubber' />)
          }}
        >
          Try me! rubber
        </button>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='swing' />)
          }}
        >
          Try me! swing
        </button>
        <button
          onClick={() => {
            showModal(<ModalForAnimate animationName='rollin' />)
          }}
        >
          Try me! rollin
        </button>
      </FlexWrapper>

      <h2>Не нравится стандаотный набор анимаций? кастомизируйте!</h2>
      <FlexWrapper>
        <button
          onClick={() => {
            showModal(<ModalForCustomAnimate customAnimationName='rollin' />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForCustomAnimate customAnimationName='zoom' />)
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
            showModal(<ModalForCustomStyle />)
          }}
        >
          Try me!
        </button>
        <button
          onClick={() => {
            showModal(<ModalForCustomButton />)
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
            showModal(<ModalForChildren />)
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
