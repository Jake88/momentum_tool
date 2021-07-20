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
      movement: MOVEMENT_ICON.WILD,
      overwriteCost: 0
    }),
    ...createCopies(2, {
      name: 'Choices',
      movement: MOVEMENT_ICON.LEFT_OR_RIGHT,
      overwriteCost: 0
    }),
    ...createCopies(3, {
      name: 'Straight',
      xpGain: 1,
      overwriteCost: 0
    }),
    ...createCopies(2, {
      name: 'Left',
      movement: MOVEMENT_ICON.LEFT,
      overwriteCost: 0,
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Right',
      movement: MOVEMENT_ICON.RIGHT,
      overwriteCost: 0,
      xpGain: 1
    })
  ]
}

export const STARTER_CARDS = generateStarterCards()

function debug () {
  console.log('STARTER_CARDS')
  console.log('Number of cards: ', STARTER_CARDS.length)
  console.log('Cards: ', STARTER_CARDS)

  console.log(calculateCardStats(STARTER_CARDS))
}

debug()