import { SearchForm } from 'components/SearchForm'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>Exotic <span>cars</span></S.Logo>
        <SearchForm />
        <S.Navigation>
          <S.SignUpButton to='#'>Sign Up</S.SignUpButton>
          <S.SignInButton to='#'>Sign In</S.SignInButton>
        </S.Navigation>
      </S.Content>
    </S.Container>
  )
}
