import React from 'react'
import {
  CardBody,
  CardCost,
  CardMovementSection,
  CardName,
  CardSet,
  CardXpGain,
  CardAbility,
  MomentumSection,
  MomentumLabel,
  MovementIcon
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
      <CardMovementSection>
        {!!cardConfig.movement?.length && (
          cardConfig.movement.map(movement => (
            <MovementIcon src={movement.IMG}/>
          ))
        )}
        <MomentumSection src={cardConfig.momentum.IMG}>
          <MomentumLabel>Momentum</MomentumLabel>
        </MomentumSection>
      </CardMovementSection>
    </CardBody>
  )
}
