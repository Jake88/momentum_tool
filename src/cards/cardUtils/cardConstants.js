import IconStraight from '../../images/iconography/straight.svg'
import IconLeft from '../../images/iconography/left.svg'
import IconRight from '../../images/iconography/right.svg'
import IconStraightLeft from '../../images/iconography/straightLeft.svg'
import IconStraightRight from '../../images/iconography/straightRight.svg'
import IconWild from '../../images/iconography/wild.svg'
import IconLeftRight from '../../images/iconography/leftRight.svg'

export const MOVEMENT_ICON = {
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
    VALUE: 2.5
  },
  STRAIGHT_OR_RIGHT: {
    NAME: 'STRAIGHT_OR_RIGHT',
    IMG: IconStraightRight,
    VALUE: 2.5
  },
  LEFT_OR_RIGHT: {
    NAME: 'LEFT_OR_RIGHT',
    IMG: IconLeftRight,
    VALUE: 3
  },
  WILD: {
    NAME: 'WILD',
    IMG: IconWild,
    VALUE: 4
  }
}

export const POSSIBLE_STRAIGHTS = [
  MOVEMENT_ICON.STRAIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_RIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_LEFT.NAME,
  MOVEMENT_ICON.WILD.NAME
]

export const POSSIBLE_LEFTS = [
  MOVEMENT_ICON.LEFT.NAME,
  MOVEMENT_ICON.LEFT_OR_RIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_LEFT.NAME,
  MOVEMENT_ICON.WILD.NAME
]

export const POSSIBLE_RIGHTS = [
  MOVEMENT_ICON.RIGHT.NAME,
  MOVEMENT_ICON.LEFT_OR_RIGHT.NAME,
  MOVEMENT_ICON.STRAIGHT_OR_RIGHT.NAME,
  MOVEMENT_ICON.WILD.NAME
]

export const GAIN_XP_VALUE = 1

export const CARD_ABILITY = {
  // WEAPONS
  HOOK: (x = 3) => ({
    DESC: 
      `HOOK a car within ${x} segment${x>1 ? 's' : ''}.`,
    VALUE: 3
  }),
  OIL: {
    DESC: 
      `Leave an OIL SLICK.`,
    VALUE: 2
  },
  OBSTICLE: {
    DESC: `Leave an OBSTICLE.`,
    VALUE: 2
  },

  // PROTECTION
  SHIELD: (x = 1) => ({
    DESC: 
      `Gain ${x} SHIELD.`,
    VALUE: 3
  }),
  STEADFAST: (x = 1) => ({
    DESC: 
      `Gain ${x} STEADFAST.`,
    VALUE: 2
  }),

  // UTILITY
  BOOST: (x = 1) => ({
    DESC: 
      `BOOST adjacent cards by ${x}`,
    VALUE: 3
  }),
  FORGET: (x = 1) => ({
    DESC: 
      `You may FORGET ${x} card${x>1 ? 's' : ''}.`,
    VALUE: 3
  }),
  DRAW: (x = 1) => ({
    DESC: 
      `Draw ${x} additional card${x>1 ? 's' : ''} next turn.`,
    VALUE: 3
  }),
  GRAPPLE: (x = 1) => ({
    DESC: 
      `GRAPPLE to a card within 4 segments for ${x} reveals`,
    VALUE: 3
  }),
  FORGET_SELF: {
    DESC: 
      `After being played, FORGET this card.`,
      VALUE: 0
  },

  // COMBO
  OFFLOAD: (x = 1) => ({
    DESC: 
      `FORGET ${x} card${x>1 ? 's' : ''} and leave an OBSTICLE.`,
    VALUE: 5
  }),
}
