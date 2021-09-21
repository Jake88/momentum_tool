import {
  createCardSet,
  createAddCopiesFunction,
  calculateCardStats
} from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'

function generateStarterCards () {
  const createCard = createCardSet('Learner')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    createCopies(20, {
      name: 'Driving Lession',
      overwriteCost: -1
    }),
    createCopies(20, {
      name: 'Auto Pilot',
      overwriteCost: 0,
      xpGain: -2,
      movement: [MOVEMENT_ICON.WILD]
    })
  ]
}

export const LEARNER_CARDS = generateStarterCards()

export function debug () {
  console.log('LEANER')
  console.log('Number of cards: ', LEARNER_CARDS.length)
  console.log('Cards: ', LEARNER_CARDS)

  console.log(calculateCardStats(LEARNER_CARDS))
}
