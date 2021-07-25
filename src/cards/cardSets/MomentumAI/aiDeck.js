import {
  createCardSet
} from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'

function generateAllPossibleCombinations() {
  const createCard = createCardSet('Momentum AI')

  const { LEFT, RIGHT, STRAIGHT} = MOVEMENT_ICON
  const opts = [STRAIGHT, LEFT, RIGHT]

  const cards = []

  for (let i = 0; i < opts.length; i++) {
    for (let j = 0; j < opts.length; j++) {
      cards.push(createCard({
        momentum: opts[i],
        movement: [opts[j]],
        overwriteCost: 0
      }))
      for (let k = 0; k < opts.length; k++) {
        cards.push(createCard({
          momentum: opts[i],
          movement: [opts[j], opts[k]],
          overwriteCost: 0
        }))
      }
    }
  }
  return cards
}

export const AI_DECK = generateAllPossibleCombinations()