import {
  createCardSet,
  createAddCopiesFunction
} from '../cardUtils/cardUtils'
import {
  CARD_ABILITY,
  MOVEMENT_ICON,
} from '../cardUtils/cardConstants'

  

// TODO: Decide whether these are going to be abilities applies to cards in the Advanced deck or to cards in the unique deck.
// The unique deck needs to be roughly balanced powers, since they don't cost anything to aquire!! So the values listed here are more for when they are in the Advanced deck
const UNIQUE_ABILITIES = {
  WALL_WHEELS: {
    DESC:  `Boost this card 8. While resolving this card if you would hit a wall, follow the lane instead.`,
    VALUE: 8
  },
  STUCK_PEDAL: {
    DESC:  `This card goes face up at the start of your driveway line and remains there for the rest of the game.`,
    VALUE: 2
  },
  JOKERS_JOY: {
    DESC:  `When revealed, swap this card with the current leader's next unrevealed card. If it's right it can't be wrong.`,
    VALUE: 0
  },
  LOCK_UP: {
    DESC:  `HOOK an opponent within 8 segments. Repeat this once.`,
    VALUE: 6
  },
  SQUID_DEFENCE: {
    DESC:  `Gain SHIELD and leave OIL.`,
    VALUE: 5
  },
  SLIP_N_SLIDE: {
    DESC:  `Leave OIL in every tile you travel through.`,
    VALUE: 7
  },
  ADDED_EXTRA: {
    DESC:  `Add this card to your deck, along with the unrevealed top card of the market.`,
    VALUE: 3
  },
  GET_OVER_HERE: {
    DESC:  `HOOK any car on the track.`,
    VALUE: 3
  },
  MOMENTUS: {
    DESC:  `The last card in your track gains the momentum of every card in your journey.`,
    VALUE: 3
  },
  ETHEREAL: { // Maybe better as a driver power?
    DESC:  `When revealed, become untargetable and unaffected by any effects this round. You share tiles with any token, obsticle or car, however walls still affect you.`,
    value: 8
  },
  TIME_WARP: {
    DESC:  `HOOK every car on the track. Repeat this 2 times. FORGET this card.`,
    VALUE: 3
  },
  BDU_SPONSORSHIP: {
    DESC:  `Sponsored by BDU. Lucky you!`,
    VALUE: 5
  },
  AUTO_PILOT: {
    DESC:  `Unless you crash into an obsticle, all your movement symbols are considered straight and you follow your current lane.`,
    VALUE: 5
  },
  MIMIC: {
    DESC:  `This cards' movement is an exact clone of the current leaders' revealed journey. Ignore any abilities, and momentum symbols are only counted once.`,
    VALUE: 5
  },
  BUMPER_BARS: { // figure out an ability here?
    DESC:  ``,
    VALUE: 5
  }
}

function generateCards () {
  const createCard = createCardSet('Unique Cards')

  // DESIGN NOTE: Because these do not cost money they should attempt to be somewhat balanced.

  // DESIGN NOTE: Most unique abilities should have 2-3 (ideally 3) XP to help with the transition into the Advanced deck.

  return [
    createCard({
      name: 'Get over here!',
      ability: UNIQUE_ABILITIES.GET_OVER_HERE,
      momentum: MOVEMENT_ICON.WILD,
    }),
    createCard({
      name: 'Born to be wild!',
      movement: [MOVEMENT_ICON.WILD, MOVEMENT_ICON.WILD],
      momentum: MOVEMENT_ICON.WILD
    }),
    createCard({
      name: 'Wall wheels!',
      ability: UNIQUE_ABILITIES.WALL_WHEELS,
      movement: [MOVEMENT_ICON.STRAIGHT],
    }),
    createCard({
      name: 'Stuck pedal!',
      ability: UNIQUE_ABILITIES.STUCK_PEDDAL,
      momentum: [MOVEMENT_ICON.LEFT_OR_RIGHT],
    }),
    createCard({
      name: 'Joker!',
      ability: UNIQUE_ABILITIES.JOKERS_JOY,
      momentum: MOVEMENT_ICON.RIGHT
    }),
    createCard({
      name: 'Lock up!',
      ability: UNIQUE_ABILITIES.LOCK_UP,
      momentum: MOVEMENT_ICON.WILD,
    }),
    createCard({
      name: 'Squid shield!',
      ability: UNIQUE_ABILITIES.SQUID_DEFENCE,
      momentum: MOVEMENT_ICON.WILD,
    }),
    createCard({
      name: `Slip'n'slide!`,
      ability: UNIQUE_ABILITIES.SLIP_N_SLIDE,
      momentum: MOVEMENT_ICON.WILD,
      movement: [MOVEMENT_ICON.STRAIGHT, MOVEMENT_ICON.LEFT_OR_RIGHT]
    }),
    createCard({
      name: 'Added extra!',
      ability: UNIQUE_ABILITIES.ADDED_EXTRA,
      momentum: MOVEMENT_ICON.WILD
    }),
    createCard({
      name: 'Momentus!',
      ability: UNIQUE_ABILITIES.MOMENTUS,
      momentum: MOVEMENT_ICON.WILD,
    }),
    createCard({
      name: 'Ethereal!',
      ability: UNIQUE_ABILITIES.ETHEREAL,
      momentum: MOVEMENT_ICON.WILD,
    }),
    createCard({
      name: 'Time warp!',
      ability: UNIQUE_ABILITIES.TIME_WARP,
      momentum: MOVEMENT_ICON.WILD,
    }),
    createCard({
      name: 'BDU Sponsorship!',
      ability: UNIQUE_ABILITIES.BDU_SPONSORSHIP,
      momentum: MOVEMENT_ICON.WILD,
      xpGain: 5
    }),
    createCard({
      name: 'Auto pilot!',
      ability: UNIQUE_ABILITIES.AUTO_PILOT,
      momentum: MOVEMENT_ICON.WILD,
    }),
  ]
}

export const UNIQUE_CARDS = generateCards()
