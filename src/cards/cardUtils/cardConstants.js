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
      `Gain ${x} SHIELD for the round.`,
    VALUE: 3
  }),
  EVADE: {
    DESC: 
      `EVADE a car crash.`,
    VALUE: 3
  },

  // UTILITY
  BOOST: {
    DESC: 
      `BOOST adjacent cards`,
    VALUE: 3
  },
  FORGET: (x = 1) => ({
    DESC: 
      `FORGET ${x} card${x>1 ? 's' : ''}.`,
      VALUE: 3
  }),
  DRAW: (x = 1) => ({
    DESC: 
      `Draw ${x} additional card${x>1 ? 's' : ''} next turn.`,
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

export const UNIQUE_ABILITIES = {
  BUMPER_BARS: {
    DESC:  `Any time you would hit a wall, follow the lane instead.`,
    VALUE: 8
  },
  STUCK_PEDDAL: {
    DESC:  `This card goes face up at the start of your driveway line and remains there for the rest of the game.`,
    VALUE: 2
  },
  JOKERS_JOY: {
    DESC:  `When revealed, swap this card with the current leader's next unrevealed card.`,
    VALUE: 0
  },
  LOCK_UP: {
    DESC:  `HOOK an opponent within 6 segments, twice.`,
    VALUE: 6
  },
  SQUID_IT: {
    DESC:  `Gain SHIELD and leave OIL in your space.`,
    VALUE: 5
  },
  SLIP_N_SLIDE: {
    DESC:  `Leave OIL SLICKs in every tile you travel through.`,
    VALUE: 7
  },
}