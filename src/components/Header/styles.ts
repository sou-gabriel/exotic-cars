import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  height: 5.625rem;
  padding: 1.625rem 0;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
`

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.strong`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.96px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};

  > span {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.64px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  gap: 1.75rem;
  align-items: center;
`

export const SignUpButton = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.authButton};
`

export const SignInButton = styled(Link)`
  padding: 0.4375rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.authButton};
  border-radius: 0.8125rem;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.authButton};
`
