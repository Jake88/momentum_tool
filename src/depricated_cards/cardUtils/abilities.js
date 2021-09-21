import { GAME_PHASE } from "../../constants/gameVariables";

const {ANY, DRAW, LEARNING, PLANNING, REVEAL} = GAME_PHASE

export const CARD_ABILITY = {
  // WEAPONS
  HOOK: {
    NAME: 'HOOK',
    PHASE: PLANNING,
    DESC: 
      `HOOK the next car infront`,
    VALUE: 3
  },
  OIL: {
    NAME: 'OIL SLICK',
    PHASE: PLANNING,
    DESC: 
      `Leave an OIL SLICK`,
    VALUE: 2
  },
  OBSTICLE: {
    NAME: `OFFLOAD`,
    PHASE: PLANNING,
    DESC: `Leave an OBSTICLE`,
    VALUE: 2.5
  },
  SHIFTER: {
    NAME: 'SHIFT',
    PHASE: PLANNING,
    DESC: `SWAP places with the next car infront`,
    value: 5
  },

  // PROTECTION
  SHIELD: {
    NAME: `SHIELD`,
    PHASE: ANY,
    DESC: `Gain a SHIELD token`,
      //`SHIELD against an incoming effect`,
    VALUE: 2
  },

  // UTILITY
  BOOST: {
    NAME: `BOOST`,
    PHASE: REVEAL,
    DESC: 
      `BOOST your next card`,
    VALUE: 4
  },
  FORGET: {
    NAME: `FORGET`,
    PHASE: LEARNING,
    DESC: 
      `You may FORGET a card in your journey during your LEARNING phase`,
    VALUE: 3
  },
  DRAW: {
    NAME: `DRAW`,
    PHASE: DRAW,
    DESC: 
      `DRAW an additional card during your next DRAW phase`,
    VALUE: 3
  },
  GRAPPLE: {
    NAME: `GRAPPLE`,
    PHASE: PLANNING,
    DESC: 
      `GRAPPLE to the next car infront`,
    VALUE: 5
  },
  GRAPPLE: {
    NAME: `GPS`,
    PHASE: REVEAL,
    DESC: 
      `Move forward 3 tiles in your current lane`,
    VALUE: 5
  },

  // COMBO
  KAGINAWA : {
    NAME: 'KAGINAWA',
    PHASE: PLANNING,
    DESC: 
      `HOOK then GRAPPLE the next car infront`,
    VALUE: 5
  }
}
