import {
  createCardSet,
  createAddCopiesFunction
} from '../cardUtils/cardUtils'
import { CARD_ABILITY, MOVEMENT_ICON } from '../cardUtils/cardConstants'

function generateCards () {
  const createCard = createCardSet('Auto Shop')
  const createCopies = createAddCopiesFunction(createCard)
  return [
    // XP GAIN
    ...createCopies(4, {
      name: 'Foresight',
      momentum: MOVEMENT_ICON.LEFT_OR_RIGHT,
      ability: CARD_ABILITY.FORGET_SELF,
      xpGain: 0,
      overwriteCost: -2
    }),
    ...createCopies(4, {
      name: 'Hindsight',
      momentum: MOVEMENT_ICON.LEFT_OR_RIGHT,
      ability: CARD_ABILITY.FORGET_SELF,
      xpGain: 3,
      overwriteCost: 2
    }),

    // WEAPONS
    // HOOK
    ...createCopies(2, {
      name: 'Hooker',
      momentum: MOVEMENT_ICON.STRAIGHT,
      ability: CARD_ABILITY.HOOK(3),
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Hooker',
      momentum: MOVEMENT_ICON.LEFT,
      ability: CARD_ABILITY.HOOK(),
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Hooker',
      momentum: MOVEMENT_ICON.RIGHT,
      ability: CARD_ABILITY.HOOK(),
      xpGain: 1
    }),

    // OIL SLICK
    ...createCopies(2, {
      name: 'Steering fluid',
      momentum: MOVEMENT_ICON.RIGHT,
      ability: CARD_ABILITY.OIL,
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Steering fluid',
      momentum: MOVEMENT_ICON.LEFT,
      ability: CARD_ABILITY.OIL,
      xpGain: 1
    }),

    // OBSTICLE
    ...createCopies(2, {
      name: 'Litter',
      momentum: MOVEMENT_ICON.STRAIGHT,
      ability: CARD_ABILITY.OBSTICLE,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Litter',
      momentum: MOVEMENT_ICON.RIGHT,
      ability: CARD_ABILITY.OBSTICLE,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Litter',
      momentum: MOVEMENT_ICON.LEFT,
      ability: CARD_ABILITY.OBSTICLE,
      xpGain: 1
    }),

    // DEFENCE
    // SHIELD
    ...createCopies(3, {
      name: 'New windscreen',
      momentum: MOVEMENT_ICON.STRAIGHT,
      ability: CARD_ABILITY.SHIELD(),
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'New windscreen',
      momentum: MOVEMENT_ICON.LEFT_OR_RIGHT,
      ability: CARD_ABILITY.SHIELD(),
      xpGain: 2
    }),

    // EVADE
    ...createCopies(2, {
      name: 'Second chance',
      momentum: MOVEMENT_ICON.STRAIGHT,
      ability: CARD_ABILITY.EVADE,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Second chance',
      momentum: MOVEMENT_ICON.LEFT_OR_RIGHT,
      ability: CARD_ABILITY.EVADE,
      xpGain: 2
    }),

    // UTILITY
    // BOOST
    ...createCopies(2, {
      name: 'NOS',
      ability: CARD_ABILITY.BOOST,
      xpGain: 1
    }),

    // FORGET
    ...createCopies(2, {
      name: 'Make room',
      ability: CARD_ABILITY.FORGET(),
      momentum: MOVEMENT_ICON.STRAIGHT,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Make room',
      ability: CARD_ABILITY.FORGET(),
      momentum: MOVEMENT_ICON.LEFT,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Make room',
      ability: CARD_ABILITY.FORGET(),
      momentum: MOVEMENT_ICON.RIGHT,
      xpGain: 1
    }),

    // DRAW
    ...createCopies(4, {
      name: 'Conserve fuel',
      movement: [MOVEMENT_ICON.STRAIGHT],
      ability: CARD_ABILITY.DRAW(),
      xpGain: 1
    }),
    ...createCopies(4, {
      name: 'Pitstop',
      ability: CARD_ABILITY.DRAW(2),
      costModifier: 2
    }),

    // COMBO 
    ...createCopies(2, {
      name: 'Pop the trunk',
      ability: CARD_ABILITY.OFFLOAD(),
      momentum: MOVEMENT_ICON.STRAIGHT,
    }),
  ]
}

export const AUTO_SHOP_CARDS = generateCards()