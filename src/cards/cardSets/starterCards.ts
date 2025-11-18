import {
  createCardSet,
  createAddCopiesFunction,
  calculateCardStats
} from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'
import { CardConfig } from '../../types/card.types'

const {
  WILD,
  STRAIGHT,
  LEFT,
  RIGHT,
  LEFT_OR_RIGHT
} = MOVEMENT_ICON

function generateStarterCards(): CardConfig[] {
  const createCard = createCardSet('Starter')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    createCard({
      name: 'Wild',
      momentum: WILD,
      overwriteCost: 0
    }),
    ...createCopies(2, {
      name: 'Choices',
      momentum: LEFT_OR_RIGHT,
      overwriteCost: 0
    }),
    ...createCopies(3, {
      name: 'Straight',
      momentum: STRAIGHT,
      xpGain: 1,
      overwriteCost: 0
    }),
    ...createCopies(2, {
      name: 'Left',
      momentum: LEFT,
      overwriteCost: 0,
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Right',
      momentum: RIGHT,
      overwriteCost: 0,
      xpGain: 1
    })
  ]
}

export const STARTER_CARDS = generateStarterCards()

export function debug(): void {
  console.log('STARTER_CARDS')
  console.log('Number of cards: ', STARTER_CARDS.length)
  console.log('Cards: ', STARTER_CARDS)

  console.log(calculateCardStats(STARTER_CARDS))
}
