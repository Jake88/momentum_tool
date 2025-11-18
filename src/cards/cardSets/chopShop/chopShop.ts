import { createCardSet, createAddCopiesFunction } from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON, CARD_ABILITY } from '../../cardUtils/cardConstants'
import { CardConfig } from '../../../types/card.types'

const { WILD, STRAIGHT } = MOVEMENT_ICON

function generateCards(): CardConfig[] {
  const createCard = createCardSet('Chop Shop')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    ...createCopies(2, {
      name: 'Chop Shop Special',
      momentum: WILD,
      ability: (CARD_ABILITY.BOOST as Function)(),
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Modified Straight',
      momentum: STRAIGHT,
      ability: (CARD_ABILITY.SHIELD as Function)(),
      xpGain: 2
    })
  ]
}

export const CHOP_SHOP_CARDS = generateCards()
