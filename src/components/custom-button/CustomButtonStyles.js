import styled, { css } from 'styled-components'

const RegularButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

const ShoppingCartButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  position: absolute;
  top: 250px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

const GoogleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getButtonType = props => {
  if (props.isGoogleSignIn) {
    return GoogleSignInButtonStyles
  } else if (props.isShoppingCart) {
    return ShoppingCartButtonStyles
  } else {
    return RegularButtonStyles
  }
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  outline: none;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonType}
`
