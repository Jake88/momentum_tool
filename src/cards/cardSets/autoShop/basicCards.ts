import {
  createCardSet,
  createAddCopiesFunction
} from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'
import { CardConfig } from '../../../types/card.types'

const {
  WILD,
  STRAIGHT,
  LEFT,
  RIGHT,
  LEFT_OR_RIGHT,
  STRAIGHT_OR_LEFT,
  STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateCards(): CardConfig[] {
  const createCard = createCardSet('Basic Cards')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    // WILD
    ...createCopies(2, {
      name: 'Wild',
      momentum: WILD,
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Wilder',
      momentum: WILD,
      xpGain: 2
    }),
    // LEFT || RIGHT
    ...createCopies(3, {
      name: 'Better choices',
      momentum: LEFT_OR_RIGHT,
      xpGain: 2
    }),
    // STRAIGHT
    ...createCopies(3, {
      name: 'Fundamental',
      momentum: STRAIGHT,
      xpGain: 2
    }),
    ...createCopies(3, {
      name: 'Reckless',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      xpGain: 2
    }),
    // LEFT
    ...createCopies(2, {
      name: 'Drift',
      momentum: LEFT,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Ease out',
      momentum: LEFT,
      movement: [STRAIGHT],
      xpGain: 1
    }),
    // RIGHT
    ...createCopies(2, {
      name: 'Drift',
      momentum: RIGHT,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Ease out',
      momentum: RIGHT,
      movement: [STRAIGHT],
      xpGain: 1
    }),
    // STRAIGHT || LEFT
    ...createCopies(2, {
      name: 'Cautious approach',
      momentum: STRAIGHT_OR_LEFT,
      xpGain: 1
    }),
    // STRAIGHT || RIGHT
    ...createCopies(2, {
      name: 'Cautious approach',
      momentum: STRAIGHT_OR_RIGHT,
      xpGain: 1
    })
  ]
}

export const BASIC_CARDS = generateCards()
