import React from 'react'
import Styled from 'styled-components'
import { LIGHT_BLUE } from '../constants/styles'
import { CardBody } from './Card.styles'

const Label = Styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: ${LIGHT_BLUE};
  font-style: italic;
  justify-content: bottom;
`

export const CardBack = () => (
  <CardBody id='cardback'>
    <Label>Momentum</Label>
  </CardBody>
)
