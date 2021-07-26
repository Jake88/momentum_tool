import React from 'react'
import Styled from 'styled-components'
import {
  CardBody,
  // CardAbilitySection,
  // CardAbility,
  CardMovementSection,
  CardName,
  CardSet,
  MovementIcon
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
`

const AbilityPhase = Styled.h2`
margin: 0;
font-weight: normal;
font-size: 1rem;
border: 1px solid black;
padding: 5px;
padding-top: 8px;
width: 100%;
text-align: center;
margin-top: 10px;
border-radius: 50px;
position: relative;

&::before {
  content: 'PHASE';
  position: absolute;
  top: -9px;
  background-color: #333;
  color: #99d8ff;
  vertical-align: middle;
  right: 30%;
  width: 40%;
  font-size: .7rem;
  border: 1px solid black;
  border-radius: 50%;
}
`

const AbilityDesc = Styled.p`
  flex-grow: 1;
  text-align: center;
`

const AbilityIcon = Styled.img`
`

export const CardAbility = ({ cardConfig }) => {
  if (!cardConfig) return null
  return (
    <CardBody id={cardConfig.id} set={cardConfig.set}>
      <CardSet>{cardConfig.set}</CardSet>

      <AbilitySection>  
        <AbilityHeader>{cardConfig.ability.NAME}</AbilityHeader>
        <AbilityPhase>{cardConfig.ability.PHASE}</AbilityPhase>
        <AbilityDesc>{cardConfig.ability.DESC}</AbilityDesc>
        {/* <AbilityIcon></AbilityIcon> */}
      </AbilitySection>

        <CardAbility>
        </CardAbility>
        {(!!cardConfig.movement?.length || !!cardConfig.momentum) && (
          <CardMovementSection>
            {!!cardConfig.movement?.length && (
              cardConfig.movement.map((movement, index) => (
                <MovementIcon key={cardConfig.id + index} src={movement.IMG}/>
              ))
            )}
          </CardMovementSection>
        )}
    </CardBody>
  )
}
