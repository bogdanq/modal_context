import styled from 'styled-components'

export const StyledRootWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: 0 !important;
  backface-visibility: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Button = styled.button`
  padding: 10px 30px;
  border: 0;
  border-radius: 5px;
  background-color: #3085d6;
  box-shadow: none;
  color: #fff;
  font-size: 1.125em;
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
  &:hover {
    background-color: #4f9ce4;
  }
`
export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
`
