import { createCardSet } from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'
import { CardConfig, CardAbility } from '../../types/card.types'

const UNIQUE_ABILITIES: Record<string, CardAbility> = {
  WALL_WHEELS: {
    DESC: `Boost this card 8. While resolving this card if you would hit a wall, follow the lane instead.`,
    VALUE: 8
  },
  GET_OVER_HERE: {
    DESC: `HOOK any car on the track.`,
    VALUE: 3
  }
  // Add more as needed
}

function generateCards(): CardConfig[] {
  const createCard = createCardSet('Unique Cards')
  return [
    createCard({
      name: 'Get over here!',
      ability: UNIQUE_ABILITIES.GET_OVER_HERE,
      momentum: MOVEMENT_ICON.WILD
    }),
    createCard({
      name: 'Born to be wild!',
      movement: [MOVEMENT_ICON.WILD, MOVEMENT_ICON.WILD],
      momentum: MOVEMENT_ICON.WILD
    }),
    createCard({
      name: 'Wall wheels!',
      ability: UNIQUE_ABILITIES.WALL_WHEELS,
      movement: [MOVEMENT_ICON.STRAIGHT]
    })
  ]
}

export const UNIQUE_CARDS = generateCards()
