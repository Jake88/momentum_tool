import React from 'react'
import {
  CardBody,
  CardCost,
  CardAbilitySection,
  CardMovementSection,
  CardName,
  CardSet,
  CardXpGain,
  CardAbility,
  MomentumSection,
  MomentumLabel,
  MovementIcon
} from './Card.styles'
import { CardConfig } from '../types/card.types'

interface CardProps {
  cardConfig: CardConfig
}

export const Card: React.FC<CardProps> = ({ cardConfig }) => {
  return (
    <CardBody id={cardConfig.id}>
      {!!cardConfig.cost && <CardCost>{cardConfig.cost}</CardCost>}
      <CardSet>{cardConfig.set}</CardSet>
      <CardName>{cardConfig.name}</CardName>

      <CardAbilitySection>
        {!!cardConfig.xpGain && (
          <CardXpGain>
            <h3>XP</h3>
            {cardConfig.xpGain}
          </CardXpGain>
        )}
        {!!cardConfig.ability && (
          <CardAbility>
            <p>{cardConfig.ability.DESC}</p>
          </CardAbility>
        )}
        {(!!cardConfig.movement?.length || !!cardConfig.momentum) && (
          <CardMovementSection>
            {!!cardConfig.movement?.length &&
              cardConfig.movement.map((movement, index) => (
                <MovementIcon key={cardConfig.id + index} src={movement.IMG} />
              ))}
            <MomentumSection src={cardConfig.momentum?.IMG}>
              <MomentumLabel>Momentum</MomentumLabel>
            </MomentumSection>
          </CardMovementSection>
        )}
      </CardAbilitySection>
    </CardBody>
  )
}
