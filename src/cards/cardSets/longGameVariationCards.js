import {
  createCardSet,
  createAddCopiesFunction
} from '../cardUtils/cardUtils'
import { CARD_ABILITY, MOVEMENT_ICON } from '../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateCards () {
  const createCard = createCardSet('Auto Shop')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    // FORGET
    ...createCopies(2, {
      name: 'Make room',
      ability: CARD_ABILITY.FORGET(),
      momentum: STRAIGHT,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Make room',
      ability: CARD_ABILITY.FORGET(),
      momentum: LEFT,
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Make room',
      ability: CARD_ABILITY.FORGET(),
      momentum: RIGHT,
      xpGain: 2
    }),

    // DRAW
    ...createCopies(4, {
      name: 'Conserve fuel',
      movement: [STRAIGHT],
      ability: CARD_ABILITY.DRAW(),
      xpGain: 1
    }),
    ...createCopies(4, {
      name: 'Pitstop',
      ability: CARD_ABILITY.DRAW(2),
      costModifier: 3
    }),
      
    // COMBO
    // OFFLOAD
    ...createCopies(2, {
      name: 'Pop the trunk',
      ability: CARD_ABILITY.OFFLOAD(),
      momentum: STRAIGHT,
    }),
  ]
}

export const LONG_GAME_VARIATION_CARDS = generateCards();