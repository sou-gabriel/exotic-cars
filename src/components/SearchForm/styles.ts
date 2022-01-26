import styled from 'styled-components'

export const Container = styled.form`
  height: 1.875rem;
  display: flex;
  gap: 2.9375rem;
  align-items: center;
  padding: 0 0.1875rem 0.1875rem 1.6875rem;
  border-radius: 1.125rem;
  background: rgba(243, 241, 252, 0.69) 0% 0% no-repeat padding-box;
`

export const Content = styled.div`
  height: 100%;
  padding-top: 0.375rem;
  border: none;
  display: flex;
  align-items: center;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:nth-child(1) {
    margin-right: 3.9375rem;
  }

  &:nth-child(2), &:nth-child(3) {
    input {
      width: 4.5625rem;
    }
  }

  &:nth-child(3) {
    margin-left: 1.5rem;
  }
`

export const Input = styled.input`
  font-weight: bold;
  font-size: 0.75rem;
  letter-spacing: 0.021875rem;
  color: ${({ theme }) => theme.colors.title};
`

export const SubmitButton = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000014;
`
