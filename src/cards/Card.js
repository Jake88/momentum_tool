import React from 'react'
import {
  CardBody,
  CardCost,
  CardMovement,
  CardName,
  CardSet,
  CardXpGain,
  CardAbility
} from './Card.styles'

export const Card = ({ cardConfig }) => {
  return (
    <CardBody id={cardConfig.id}>
      {!!cardConfig.cost && <CardCost>{cardConfig.cost}</CardCost>}
      <CardSet>{cardConfig.set}</CardSet>
      <CardName>{cardConfig.name}</CardName>

      <CardXpGain>
        <h3>XP</h3>
        {cardConfig.xpGain}
      </CardXpGain>
      <CardAbility>{cardConfig.ability}</CardAbility>
      <CardMovement>
        <img src={cardConfig.movement.IMG} />
      </CardMovement>
    </CardBody>
  )
}
