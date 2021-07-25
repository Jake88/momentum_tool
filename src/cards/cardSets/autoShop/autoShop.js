import {
  createCardSet,
  createAddCopiesFunction
} from '../../cardUtils/cardUtils'
import { CARD_ABILITY, MOVEMENT_ICON } from '../../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateCards () {
  const createCard = createCardSet('Auto Shop')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    // XP GAIN
    // ...createCopies(4, {
    //   name: 'Hindsight',
    //   momentum: LEFT_OR_RIGHT,
    //   ability: CARD_ABILITY.FORGET_SELF,
    //   xpGain: 3,
    //   overwriteCost: 2
    // }),

    // WEAPONS
    // HOOK
    ...createCopies(2, {
      name: 'Hooker',
      momentum: STRAIGHT,
      ability: CARD_ABILITY.HOOK(),
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Hooker',
      momentum: LEFT,
      ability: CARD_ABILITY.HOOK(),
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Hooker',
      momentum: RIGHT,
      ability: CARD_ABILITY.HOOK(),
      xpGain: 2
    }),

    // OIL SLICK
    ...createCopies(2, {
      name: 'Oil leak',
      momentum: STRAIGHT,
      ability: CARD_ABILITY.OIL,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Steering fluid',
      momentum: RIGHT,
      ability: CARD_ABILITY.OIL,
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Steering fluid',
      momentum: LEFT,
      ability: CARD_ABILITY.OIL,
      xpGain: 2
    }),

    // OBSTICLE
    ...createCopies(2, {
      name: 'Litter',
      momentum: STRAIGHT,
      ability: CARD_ABILITY.OBSTICLE,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Litter',
      momentum: RIGHT,
      ability: CARD_ABILITY.OBSTICLE,
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Litter',
      momentum: LEFT,
      ability: CARD_ABILITY.OBSTICLE,
      xpGain: 2
    }),

    // DEFENCE
    // SHIELD
    ...createCopies(3, {
      name: 'New windscreen',
      momentum: STRAIGHT,
      ability: CARD_ABILITY.SHIELD(),
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'New windscreen',
      momentum: LEFT_OR_RIGHT,
      ability: CARD_ABILITY.SHIELD(),
      xpGain: 1
    }),

    // STEADFAST
    ...createCopies(2, {
      name: 'Sturdy',
      momentum: STRAIGHT,
      ability: CARD_ABILITY.STEADFAST(),
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Immovable',
      momentum: LEFT_OR_RIGHT,
      ability: CARD_ABILITY.STEADFAST(),
      xpGain: 1
    }),

    // UTILITY
    // BOOST
    ...createCopies(2, {
      name: 'NOS',
      ability: CARD_ABILITY.BOOST(),
      xpGain: 1
    }),

    // GRAPPLE
    ...createCopies(2, {
      name: 'Grapple',
      ability: CARD_ABILITY.GRAPPLE(),
      xpGain: 1
    }),

    // LAST_STRETCH
    ...createCopies(2, {
      name: 'Empty the tank',
      ability: CARD_ABILITY.LAST_STRETCH,
      momentum: STRAIGHT,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Empty the tank',
      ability: CARD_ABILITY.LAST_STRETCH,
      momentum: LEFT,
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Empty the tank',
      ability: CARD_ABILITY.LAST_STRETCH,
      momentum: RIGHT,
      xpGain: 2
    }),

    // COMBO 
    // CHAINLINK 
    ...createCopies(2, {
      name: 'Chainlink',
      ability: CARD_ABILITY.CHAINLINK(),
      momentum: STRAIGHT,
    }),

  ]
}

export const AUTO_SHOP_CARDS = generateCards()