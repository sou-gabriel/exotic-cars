import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

export const ActionButton = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.title};
  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.carouselButtonBackground};
`

export const CarCardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`

export const CarCard = styled.div`
  width: 17rem;
`

export const ImageContainer = styled.div`
  width: 15rem;
  height: 11.125rem;
  padding: 1rem 0;
  border-radius: 1.5625rem;
  background-color: ${({ theme }) => theme.colors.panelBackground};
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
  transform: translateX(2.5rem);
`
