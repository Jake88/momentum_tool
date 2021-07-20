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
    VALUE: 1.5
  },
  RIGHT: {
    NAME: 'RIGHT',
    IMG: IconRight,
    VALUE: 1.5
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

export const GAIN_XP_VALUE = 1

export const CARD_ABILITY = {
  HOOK: {
    DESC: x =>
      `Hook a car within ${x} segments. A hooked car is pulled backwards 1 segment in the same lane.`,
    VALUE: 3
  },
  OIL: {
    DESC: x =>
      `Leave an oil slick in the space of the car. When anyone hits an oil slick, any “steering” effects of cards they control are ignored for the remainder of the round.`,
    VALUE: 2
  },
  NITRO: {
    DESC: x =>
      `Boost doubles the cards it is associated with (IE it doubles the card it has momentum with, and it doubles the card that uses the card for momentum. It’s two adjacent cards!)`,
    VALUE: 3
  },
  SHIELD: {
    DESC: x =>
      `Gain ${x} protection for the round, preventing that many negative effects. This is cumulative (multiple shields can stack)`,
    VALUE: 3
  },
  EVADE: {
    DESC: x =>
      `The next crash you might be involved in, you ignore it, the other player does not.`,
    VALUE: 3
  }
}
