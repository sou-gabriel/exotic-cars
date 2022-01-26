import styled from 'styled-components'

export const Container = styled.section``

export const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem 0.83rem;
  flex-wrap: wrap;
  list-style: none;

  position: relative;
`

export const ScrollTopButton = styled.button`
  width: 4.5rem;
  height: 4.5rem;

  position: fixed;
  bottom: 85px;
  right: 85px;
`
