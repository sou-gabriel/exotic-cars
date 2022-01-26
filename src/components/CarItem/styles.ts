import styled from 'styled-components'

export const Container = styled.li`
  width: 17.9375rem;
  height: 239px;
  border-radius: 1.25rem;
  outline: 2px solid transparent;
  background: ${({ theme }) =>
    theme.colors.carCardBackground} 0% 0% no-repeat padding-box;
  transition: all 120ms ease-in-out;

  &:hover {
    transform: translateY(-0.15rem);
  }
`

export const RedirectButton = styled.button`
  padding: 1.4375rem 1rem 1.3125rem;
`

export const Heading = styled.header`
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

export const BulletsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

export const Bullet = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 999px;
  background: ${({ theme }) =>
    theme.colors.bulletsBackground} 0% 0% no-repeat padding-box;
  opacity: 0.64;
`

export const CarSideImage = styled.img`
  max-width: 100%;
  width: 244px;
  height: ;
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
