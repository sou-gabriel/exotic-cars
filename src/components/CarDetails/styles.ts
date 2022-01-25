import styled from 'styled-components'

interface NavigationButtonProps {
  isFill: boolean
}

export const Container = styled.section`
  max-width: 1220px;
  height: fit-content;
  margin: 0 auto;
  padding: 1.375rem 0;
`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4375rem;
`

export const Logo = styled.img``

export const Model = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.title};
`

export const Price = styled.p`
  font-weight: 300;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.title};
  text-transform: uppercase;
`

export const Preview = styled.div``

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Bottom = styled.div`
  margin-bottom: 2.6875rem;
  display: flex;
  justify-content: center;
`

export const NavigationButton = styled.button<NavigationButtonProps>`
  min-width: 11.0625rem;
  padding: 0.9375rem 1.125rem 0.875rem 1.0625rem;
  border: 1px solid ${({ theme }) => theme.colors.title};
  border-radius: 1.5625rem;
  box-shadow: 0 5px 20px ${({ theme }) => theme.colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ isFill, theme }) =>
    isFill ? theme.colors.title : 'transparent'};
  font-weight: 300;
  font-size: 1rem;
  color: ${({ isFill, theme }) =>
    isFill ? theme.colors.shape : theme.colors.title};
`

export const Image = styled.img``

export const Data = styled.span`
  align-self: flex-start;
  font-size: 3.125rem;
`

export const Color = styled.p`
  font-weight: 300;
  text-transform: capitalize;
`
