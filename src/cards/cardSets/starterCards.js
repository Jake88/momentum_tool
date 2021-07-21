import {
  createCardSet,
  createAddCopiesFunction,
  calculateCardStats
} from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'

function generateStarterCards () {
  const createCard = createCardSet('Starter')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    createCard({
      name: 'Wild',
      momentum: MOVEMENT_ICON.WILD,
      overwriteCost: 0
    }),
    ...createCopies(2, {
      name: 'Choices',
      momentum: MOVEMENT_ICON.LEFT_OR_RIGHT,
      overwriteCost: 0
    }),
    ...createCopies(3, {
      name: 'Straight',
      momentum: MOVEMENT_ICON.STRAIGHT,
      xpGain: 1,
      overwriteCost: 0
    }),
    ...createCopies(2, {
      name: 'Left',
      momentum: MOVEMENT_ICON.LEFT,
      overwriteCost: 0,
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Right',
      momentum: MOVEMENT_ICON.RIGHT,
      overwriteCost: 0,
      xpGain: 1
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
