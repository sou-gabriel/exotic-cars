import { ReactNode } from 'react'

import * as S from './styles'

interface IMainContentProps {
  children: ReactNode | ReactNode[]
}

export const MainContent = ({ children }: IMainContentProps) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
