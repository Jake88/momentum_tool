import Styled from 'styled-components'
import { GREEN, NAVY } from './constants/styles'

export const PADDING_LG = `16px`
export const PADDING_MD = `12px`
export const PADDING_SM = `8px`

export const Row = Styled.div`
  text-align: ${({ center }) => (center ? 'center' : 'default')};
  padding: ${PADDING_LG};
`

export const Button = Styled.button`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${PADDING_LG};
  background-color: ${GREEN};
  border: 1px solid ${NAVY};
  border-radius: 3px;
  color: ${NAVY};
  cursor: pointer;
  font-weight: bold;
  
  
  &:hover, &:focus {
    color: black;
    border-color: black;
  }
`

export const Input = Styled.input`
  padding: ${PADDING_LG};
  color: ${NAVY};
  margin-right: ${PADDING_LG};
  border-radius: 3px;
  border: 1px solid ${NAVY};
`

export const Select = Styled.select`
  padding: ${PADDING_LG};
  color: ${NAVY};
  margin-right: ${PADDING_LG};
  border-radius: 3px;
  border: 1px solid ${NAVY};
`
