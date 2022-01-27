import { ReactNode } from 'react'

import * as S from './styles'

interface IMainContentProps {
  children: ReactNode | ReactNode[]
  menuIsOpen: boolean
}

export const MainContent = ({ children, menuIsOpen }: IMainContentProps) => {
  return (
    <S.Container isActiveMenu={menuIsOpen}>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
