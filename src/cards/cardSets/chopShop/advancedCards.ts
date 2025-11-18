import { createCardSet, createAddCopiesFunction } from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'
import { CardConfig } from '../../../types/card.types'

const { WILD, STRAIGHT } = MOVEMENT_ICON

function generateCards(): CardConfig[] {
  const createCard = createCardSet('Advanced Cards')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    ...createCopies(2, {
      name: 'Advanced Wild',
      momentum: WILD,
      xpGain: 3
    }),
    ...createCopies(3, {
      name: 'Advanced Straight',
      momentum: STRAIGHT,
      xpGain: 3
    })
  ]
}

export const ADVANCED_CARDS = generateCards()
