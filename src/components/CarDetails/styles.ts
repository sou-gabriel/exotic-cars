import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section``

export const Heading = styled.header`
  margin-bottom: 0.5rem;

  display: flex;
  gap: 2.4375rem;
  align-items: center;

  @media (max-width: 425px) {
    margin-bottom: 2rem;

    flex-direction: column;
    gap: 1rem;
  }
`

export const BrandImage = styled.img`
  max-width: 91px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 4.1875rem;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 425px) {
    font-size: 2.125rem;
    line-height: 3.1875rem;
    text-align: center;
  }
`

export const Price = styled.p`
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 3.3125rem;
  color: ${({ theme }) => theme.colors.title};

  @media (max-width: 425px) {
    font-size: 1.5rem;
    line-height: 2.3125rem;
    text-align: left;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const RedirectLink = styled(Link)`
  width: 11.0625rem;
  height: 3.125rem;
  padding: 0.9375rem 1.0625rem 0.875rem 1.0625rem;
  border: 1px solid ${({ theme }) => theme.colors.title};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.title};
  white-space: nowrap;
  box-shadow: 0px 5px 20px ${({ theme }) => theme.colors.shadow};


  &.highlight {
    background: ${({ theme }) => theme.colors.title} 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 20px ${({ theme }) => theme.colors.shadow};
    border-radius: 25px;
    align-self: center;
    color: #fff;
  }
`

export const CarColorImageContainer = styled.div`
  max-width: 48.9375rem;
  height: 25.5rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  flex-shrink: 1;

  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 20rem;
  }

  @media (max-width: 425px) {
    margin-top: 1rem;
    height: 12rem;
  }
`

export const CarColorImage = styled.img`
  width 100%;
  flex-shrink: 1;
`

export const Label = styled.div`
  width: 4.8125rem;
  text-align: center;
  align-self: flex-start;
  text-transform: capitalize;
`

export const Numbering = styled.strong`
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 4.1875rem;
  color: ${({ theme }) => theme.colors.title};
`

export const Color = styled.p`
  font-weight: 300;
  font-size: 1.875rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.title};
`
