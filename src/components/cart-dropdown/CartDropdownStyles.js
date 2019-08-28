import styled from 'styled-components'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;  
`

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-bottom: auto;
`

export const EmptyMessageContainer = styled.div`
  font-size: 16px;
  margin: 50px auto;
  height: 140px;
`
