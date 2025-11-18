import { MovementIcon, CardAbility, CardAbilityFunction } from '../../types/card.types'

import IconStraight from '../../images/iconography/straight.svg'
import IconLeft from '../../images/iconography/left.svg'
import IconRight from '../../images/iconography/right.svg'
import IconStraightLeft from '../../images/iconography/straightLeft.svg'
import IconStraightRight from '../../images/iconography/straightRight.svg'
import IconWild from '../../images/iconography/wild.svg'
import IconLeftRight from '../../images/iconography/leftRight.svg'

export const MOVEMENT_ICON: Record<string, MovementIcon> = {
  STRAIGHT: {
    NAME: 'STRAIGHT',
    IMG: IconStraight,
    VALUE: 1
  },
  LEFT: {
    NAME: 'LEFT',
    IMG: IconLeft,
    VALUE: 1
  },
  RIGHT: {
    NAME: 'RIGHT',
    IMG: IconRight,
    VALUE: 1
  },
  STRAIGHT_OR_LEFT: {
    NAME: 'STRAIGHT_OR_LEFT',
    IMG: IconStraightLeft,
    VALUE: 2
  },
  STRAIGHT_OR_RIGHT: {
    NAME: 'STRAIGHT_OR_RIGHT',
    IMG: IconStraightRight,
    VALUE: 2
  },
  LEFT_OR_RIGHT: {
    NAME: 'LEFT_OR_RIGHT',
    IMG: IconLeftRight,
    VALUE: 2
  },
  WILD: {
    NAME: 'WILD',
    IMG: IconWild,
    VALUE: 3
  }
}

export const POSSIBLE_STRAIGHTS: string[] = [
  MOVEMENT_ICON.STRAIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_RIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_LEFT.NAME,
  MOVEMENT_ICON.WILD.NAME
]

export const POSSIBLE_LEFTS: string[] = [
  MOVEMENT_ICON.LEFT.NAME,
  MOVEMENT_ICON.LEFT_OR_RIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_LEFT.NAME,
  MOVEMENT_ICON.WILD.NAME
]

export const POSSIBLE_RIGHTS: string[] = [
  MOVEMENT_ICON.RIGHT.NAME,
  MOVEMENT_ICON.LEFT_OR_RIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_RIGHT.NAME,
  MOVEMENT_ICON.WILD.NAME
]

export const GAIN_XP_VALUE = 1

// Simplified: All abilities are plain objects for easier typing
export const CARD_ABILITY = {
  // WEAPONS
  HOOK: (x: number = 4): CardAbility => ({
    DESC: `HOOK a car within ${x} segment${x > 1 ? 's' : ''}.`,
    VALUE: 3
  }),
  OIL: {
    DESC: `Leave an OIL SLICK.`,
    VALUE: 2
  } as CardAbility,
  OBSTICLE: {
    DESC: `Leave an OBSTICLE.`,
    VALUE: 2.5
  } as CardAbility,

  // PROTECTION
  SHIELD: (x: number = 1): CardAbility => ({
    DESC: `Gain ${x} SHIELD.`,
    VALUE: 2
  }),
  STEADFAST: (x: number = 1): CardAbility => ({
    DESC: `Gain ${x} STEADFAST.`,
    VALUE: 2
  }),

  // UTILITY
  BOOST: (x: number = 1): CardAbility => ({
    DESC: `BOOST adjacent cards by ${x}`,
    VALUE: 4
  }),
  FORGET: (x: number = 1): CardAbility => ({
    DESC: `You may FORGET ${x} card${x > 1 ? 's' : ''}.`,
    VALUE: 3
  }),
  DRAW: (x: number = 1): CardAbility => ({
    DESC: `Draw ${x} additional card${x > 1 ? 's' : ''} next turn.`,
    VALUE: 3
  }),
  GRAPPLE: (x: number = 4): CardAbility => ({
    DESC: `GRAPPLE to a car within ${x} segments.`,
    VALUE: 5
  }),
  FORGET_SELF: {
    DESC: `After being played, FORGET this card.`,
    VALUE: 0
  } as CardAbility,
  LAST_STRETCH: {
    DESC: `If revealed last in your journey, double this cards movement.`,
    VALUE: 2
  } as CardAbility,

  // COMBO
  CHAINLINK: (x: number = 4): CardAbility => ({
    DESC: `HOOK a car within ${x} segments. Then GRAPPLE that car.`,
    VALUE: 5
  }),
  OFFLOAD: (x: number = 1): CardAbility => ({
    DESC: `FORGET ${x} card${x > 1 ? 's' : ''} and leave an OBSTICLE.`,
    VALUE: 5
  })
}
