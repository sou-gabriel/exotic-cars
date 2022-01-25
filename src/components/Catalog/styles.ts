import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1220px;
  height: fit-content;
  margin: 0 auto;
  padding: 1.375rem 0;
`

export const Content = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 17.9375rem);
  column-gap: 1.5rem;
  row-gap: 32px;
  justify-content: center;
  list-style: none;
`
