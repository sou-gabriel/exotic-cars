import { SearchForm } from 'components/SearchForm'

import {
  Container,
  InnerContainer,
  Title,
  AuthButtons,
  SignUpButton,
  SignInButton,
} from './styles'

export const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>
          Exotict <span>cars</span>
        </Title>

        <SearchForm />

        <AuthButtons>
          <SignUpButton onClick={() => {}}>Sign Up</SignUpButton>
          <SignInButton onClick={() => {}}>Sign In</SignInButton>
        </AuthButtons>
      </InnerContainer>
    </Container>
  )
}
