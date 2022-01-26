import { useState } from 'react'

import { SearchForm } from 'components/SearchForm'
import { Menu } from 'components/Menu'
import * as S from './styles'

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <S.Container>
      <S.Content>
        <S.Logo>Exotic <span>cars</span></S.Logo>
        <SearchForm />
        <S.Navigation>
          <S.SignUpButton to='#'>Sign Up</S.SignUpButton>
          <S.SignInButton to='#'>Sign In</S.SignInButton>
        </S.Navigation>
        <S.MenuButton onClick={() => setMenuIsOpen(oldState => !oldState)}>
          {menuIsOpen ? <S.IconCloseMenu /> : <S.IconOpenMenu />}
        </S.MenuButton>
        {menuIsOpen && <Menu isOpen={menuIsOpen} />}
      </S.Content>
    </S.Container>
  )
}
