import styled from 'styled-components'

export const Container = styled.li`
  width: 17.9375rem;
  padding: 1.4375rem 1rem 1.3125rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.carCardBackground} 0% 0% no-repeat padding-box;
`

export const Header = styled.header`
  margin-bottom: 0.375rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Brand = styled.strong`
  font-size: 1.0625rem;
  line-height: 0;
  color: ${({ theme }) => theme.colors.title};
`

export const Model = styled.p`
  font-weight: 400;
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors.title};
  text-transform: uppercase;
`

export const DetailsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
`

export const Bullet = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.bulletsBackground} 0% 0% no-repeat padding-box;
  opacity: 0.64;
`

export const Price = styled.p`
  font-size: 0.875rem;
  text-align: right;

  > strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.title};

    sup {
      font-size: 0.875rem;
    }
  }


`
