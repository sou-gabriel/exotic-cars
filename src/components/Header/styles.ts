import styled from 'styled-components'

export const Container = styled.header`
  padding: 1.625rem 0.5rem 1.5625rem;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
`

export const InnerContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.strong`
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

export const AuthButtons = styled.div`
  display: flex;
  gap: 1.75rem;
`

export const SignUpButton = styled.button`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.authButton};
`

export const SignInButton = styled.button`
  padding: 0.4375rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.authButton};
  border-radius: 0.8125rem;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.authButton};
`
