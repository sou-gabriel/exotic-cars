import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colors.shadow};
  border-right-color: transparent;
  animation: ${rotate} infinite linear 500ms;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
