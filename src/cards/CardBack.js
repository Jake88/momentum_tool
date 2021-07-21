import React from 'react'
import Styled from 'styled-components'
import { CardBody } from './Card.styles'

const Label = Styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: #333;
  font-style: italic;
`

export const CardBack = () => (
  <CardBody id='cardback'>
    <Label>Momentum</Label>
  </CardBody>
)
