import { Dispatch, SetStateAction } from 'react'

import { SearchForm, Menu } from '../'
import * as S from './styles'

interface IHeaderProps {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ menuIsOpen, setMenuIsOpen }: IHeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          Exotic <span>cars</span>
        </S.Logo>
        <SearchForm />
        <S.Navigation>
          <S.SignUpButton to='#'>Sign Up</S.SignUpButton>
          <S.SignInButton to='#'>Sign In</S.SignInButton>
        </S.Navigation>
        <S.MenuButton onClick={() => setMenuIsOpen((oldState) => !oldState)}>
          {menuIsOpen ? <S.IconCloseMenu /> : <S.IconOpenMenu />}
        </S.MenuButton>
        {menuIsOpen && <Menu isOpen={menuIsOpen} />}
      </S.Content>
    </S.Container>
  )
}
