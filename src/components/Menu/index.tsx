import * as S from './styles'

interface IMenuProps {
  isOpen: boolean
}

export const Menu = ({ isOpen }: IMenuProps) => {
  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.SignInButton to='#'>Sign In</S.SignInButton>
      <S.SignUpButton to='#'>Sign Up</S.SignUpButton>
    </S.Container>
  )
}
