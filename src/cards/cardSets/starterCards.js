import {
  createCardSet,
  createAddCopiesFunction,
  calculateCardStats
} from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateStarterCards () {
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
      overwriteCost: 0
    }),
    ...createCopies(1, {
      name: 'Left',
      momentum: LEFT,
      overwriteCost: 0,
    }),
    ...createCopies(1, {
      name: 'Right',
      momentum: RIGHT,
      overwriteCost: 0,
    })
  ]
}

export const STARTER_CARDS = generateStarterCards()

export function debug () {
  console.log('STARTER_CARDS')
  console.log('Number of cards: ', STARTER_CARDS.length)
  console.log('Cards: ', STARTER_CARDS)

  console.log(calculateCardStats(STARTER_CARDS))
}
