import styled from 'styled-components'

export const Container = styled.li`
  width: 287px;
  padding: 23px 16px 20px 17px;
  border-radius: 20px;

  background: #f8f8fa 0% 0% no-repeat padding-box;
`

export const Header = styled.header`
  margin-bottom: 6px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Brand = styled.strong`
  display: block;

  font-size: 17px;
  line-height: 22px;
  color: #313136;
  text-align: left;
`

export const Model = styled.p`
  font-weight: 300;
  font-size: 22px;
  color: #313136;
  text-transform: uppercase;
`

export const Bullets = styled.span`
  display: flex;
  align-items: center;
  gap: 2px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: #c8c8ca;

    opacity: 0.64;
  }
`

export const Price = styled.p`
  font-size: 24px;
  color: #313136;
  text-align: right;

  sub {
    font-weight: 300;
    font-size: 14px;
  }
`
