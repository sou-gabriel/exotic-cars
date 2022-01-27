import styled, { css } from 'styled-components'

interface IContainerProps {
  isActiveMenu: boolean
}

export const Container = styled.main<IContainerProps>`
  ${({ isActiveMenu }) => isActiveMenu && css`
    filter: blur(2px);
  `}
`

export const Content = styled.div`
  max-width: 1220px;
  height: fit-content;
  min-height: 100%;
  margin: 0 auto;
  padding: 1rem 1rem 2.5rem;
`
