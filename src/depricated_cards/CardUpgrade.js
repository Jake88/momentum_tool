import React from 'react'
import Styled from 'styled-components'
import {
  CardBody,
  CardSet,
} from './Card.styles'

const AbilitySection = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 80%;
`

const AbilityHeader = Styled.h1`
font-size: 1em;
`

const AbilityDesc = Styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: .8em;
`

const AbilityIcon = Styled.img`
`

export const CardUpgrade = ({ cardConfig }) => {
  if (!cardConfig) return null
  return (
    <CardBody id={cardConfig.id} set='Upgrade'>
      <CardSet>Upgrade</CardSet>

      <AbilitySection>  
        <AbilityHeader>{cardConfig.name}</AbilityHeader>
        <AbilityDesc>{cardConfig.desc}</AbilityDesc>
        <span>{cardConfig.estimatePower}</span>
        <span>{cardConfig.meta}</span>
      </AbilitySection>
    </CardBody>
  )
}
