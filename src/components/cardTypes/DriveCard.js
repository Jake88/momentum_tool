import React from 'react'
import Styled from 'styled-components'

import { CardBody } from '../Card.styles'

import ashphalt from  '../../images/ashphalt.JPG'

import { MovementIcon } from '../icons/MovementIcons'

const CARD_COLOUR = {
  ACCELERATION: 'blue',
  TOP_SPEED: 'red',
  HANDLING: 'yellowgreen',
  DECISIVE: 'purple'
}


const Sidebar = Styled.div`
  position: relative;
  height: 100%;
  width: 40px;
  background: linear-gradient(#000000 0%, ${({background}) => background} 100% );
  border-right: 2px solid yellowgreen;

  & > div {
    height: 100%;
    width: 100%;
    //background: linear-gradient(90deg, #00000000 0%, #000000AA 100%);

    writing-mode: vertical-rl;
    color: yellowgreen;
    font-weight: bold;
    font-size:38px;
    overflow: hidden;
    max-width: 40px;
  }

  &:last-child {
    transform: rotate(180deg);
  }
`

const AshphaltBackground = Styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: 
    url(${ashphalt}),
    linear-gradient(red 0%, orange 50%, yellow 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: hard-light;
  filter: contrast(1.7) grayscale(.5);
`

const MovementPillar = Styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background: linear-gradient(90deg, #000000dd 0%, #00000090 50%, #000000dd 100%);
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    max-height: 33.4%;
  }
`

const Momentum = Styled.div`
  border-top: none;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, .7) 0%, rgb(0, 0, 0, 0) 100%);
`

const MomentumLabel = Styled.p`
  font-weight: bold;
  color: red;
  position: absolute;
  top: 0;
`


const Movement = Styled.div`
  width: 100%;
`

const Combo = Styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, .7) 100%);
`

const ComboLabel = Styled.p`
  font-weight: bold;
  color: yellowgreen;
  position: absolute;
  bottom: 0;
`

const ArrowSeparator = Styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-top: 4px solid yellowgreen;
  border-right: 4px solid yellowgreen;
  transform: translateY(40px) scaleY(.7) rotate(-45deg);
`

const IconWarper = Styled.div`
  flex-grow: 1;
  overflow: hidden;
  transform: scale(${({scale}) => `${1 - scale}, ${.6 - scale}`}) rotate(-90deg);
`

export const DriveCard = ({ driveCard, index }) => {
  return (
    <CardBody id={'card' + index}>
      <AshphaltBackground />
      <Sidebar background={CARD_COLOUR.HANDLING}>
        <div>Basic Handling</div>
      </Sidebar>
      <MovementPillar>
          <Momentum>
            <MomentumLabel>Momentum</MomentumLabel>
            <IconWarper scale={.3}>
              <MovementIcon type='Left' color='red' />
            </IconWarper>
          </Momentum>
          <Movement>
            <ArrowSeparator />
            <IconWarper scale={.15}>
              <MovementIcon type='StraightOrLeft' />
            </IconWarper>
          </Movement>
          <Combo>
            <ArrowSeparator />
            <IconWarper scale={0.0}>
              <MovementIcon type='DoubleStraight' straightColor='yellowGreen' leftColor='yellowgreen' rightColor='yellowgreen'/>
            </IconWarper>
            <ComboLabel>Handling Combo</ComboLabel>
          </Combo>
        </MovementPillar>
      <Sidebar background={CARD_COLOUR.HANDLING}>
        <div>Basic Handling</div>
      </Sidebar>
    </CardBody>
  )
}
