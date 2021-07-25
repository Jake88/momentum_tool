import {
  createCardSet,
  createAddCopiesFunction
} from '../../cardUtils/cardUtils'
import { CARD_ABILITY, MOVEMENT_ICON } from '../../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

const {
  HOOK, OIL, BOOST, CHAINLINK, FORGET_SELF, GRAPPLE, LAST_STRETCH, OBSTICLE, SHIELD, STEADFAST
} = CARD_ABILITY

function generateCards () {
  const createCard = createCardSet('Chop Shop')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    // // WEAPONS
    // // HOOK
    ...createCopies(2, {
      name: `Reel 'em in`,
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: HOOK(),
      xpGain: 2
    }),
    ...createCopies(1, {
      name: `Reel 'em in`,
      momentum: STRAIGHT,
      movement: [WILD],
      ability: HOOK()
    }),
    ...createCopies(1, {
      name: `Reel 'em in`,
      momentum: STRAIGHT,
      movement: [LEFT_OR_RIGHT],
      ability: HOOK()
    }),

    // OIL SLICK
    ...createCopies(2, {
      name: 'Brake fluid',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: OIL,
      xpGain: 3
    }),
    ...createCopies(2, {
      name: 'Steering fluid',
      momentum: LEFT_OR_RIGHT,
      ability: OIL,
      xpGain: 3
    }),

    // OBSTICLE
    ...createCopies(2, {
      name: 'Spare tyre',
      momentum: STRAIGHT,
      movement: [LEFT_OR_RIGHT],
      ability: OBSTICLE,
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Spare tyre',
      momentum: LEFT_OR_RIGHT,
      ability: OBSTICLE,
      xpGain: 2
    }),

    // DEFENCE
    // SHIELD
    ...createCopies(2, {
      name: 'Diamond windscreen',
      momentum: WILD,
      movement: [STRAIGHT],
      ability: SHIELD(2),
      costModifier: 1
    }),

    // STEADFAST
    ...createCopies(2, {
      name: 'The rock',
      momentum: LEFT_OR_RIGHT,
      ability: STEADFAST(),
      xpGain: 3
    }),

    // UTILITY
    // BOOST
    ...createCopies(2, {
      name: 'NOS',
      ability: BOOST(2),
      costModifier: 3
    }),

    // GRAPPLE
    ...createCopies(2, {
      name: 'Grapple',
      ability: GRAPPLE(5),
      xpGain: 2
    }),

    // LAST_STRETCH
    ...createCopies(2, {
      name: 'Home stretch',
      ability: LAST_STRETCH,
      momentum: STRAIGHT,
      movement: [STRAIGHT, STRAIGHT],
      xpGain: 2
    }),

    // // COMBO 
    // // CHAINLINK 
    ...createCopies(2, {
      name: 'Chainlink',
      ability: CHAINLINK(),
      momentum: WILD,
    }),
  ]
}
  
export const CHOP_SHOP_CARDS = generateCards()