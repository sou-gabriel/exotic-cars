import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(300px);
  } to {
    display: block;
    opacity: 1
    transform: translateX(0)
  }
`

export const Container = styled.div`
  display: none;
  background-color: #7B89F4;

  width: 100%;
  height: 100%;

  border-radius: 0px 0 0 8px;

  position: absolute;
  right: 0;
  top: 5.625rem;
  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  animation: ${appear} 200ms ease-in-out;
`

const DefaultLinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 9rem;
  height: 4rem;
  border-radius: 0.8125rem;

  font-weight: 700;
  font-size: 2rem;
`

export const SignInButton = styled(DefaultLinkStyle)`
  color: ${({ theme }) => theme.colors.shape};
`

export const SignUpButton = styled(DefaultLinkStyle)`
  color: ${({ theme }) => theme.colors.shape};
  border: 2px solid ${({ theme }) => theme.colors.shape};
`
