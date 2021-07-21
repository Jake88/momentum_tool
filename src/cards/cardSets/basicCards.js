import {
  createCardSet,
  createAddCopiesFunction
} from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'

function generateCards () {
  const createCard = createCardSet('Basic Cards')
  const createCopies = createAddCopiesFunction(createCard)
  return [
   // WILD
   ...createCopies(2, {
    name: 'Wild',
    momentum: MOVEMENT_ICON.WILD,
  }),
   ...createCopies(2, {
    name: 'Wilder',
    momentum: MOVEMENT_ICON.WILD,
    xpGain: 2
  }),
  // LEFT || RIGHT
  ...createCopies(3, {
    name: 'Better choices',
    momentum: MOVEMENT_ICON.LEFT_OR_RIGHT,
    xpGain: 2
  }),
  // STRAIGHT
  ...createCopies(3, {
    name: 'Fundamental',
    momentum: MOVEMENT_ICON.STRAIGHT,
    xpGain: 2
  }),
  ...createCopies(3, {
    name: 'Reckless',
    momentum: MOVEMENT_ICON.STRAIGHT,
    movement: [MOVEMENT_ICON.STRAIGHT],
    xpGain: 2
  }),
  // LEFT
  ...createCopies(2, {
    name: 'Drift',
    momentum: MOVEMENT_ICON.LEFT,
    xpGain: 2
  }),
  // RIGHT
  ...createCopies(2, {
    name: 'Drift',
    momentum: MOVEMENT_ICON.RIGHT,
    xpGain: 2
  }),
  // STRAIGHT || LEFT
  ...createCopies(2, {
    name: 'Cautious approach',
    momentum: MOVEMENT_ICON.STRAIGHT_OR_LEFT,
    xpGain: 1
  }),
  // STRAIGHT || RIGHT
  ...createCopies(2, {
    name: 'Cautious approach',
    momentum: MOVEMENT_ICON.STRAIGHT_OR_RIGHT,
    xpGain: 1
  }),
]}

export const BASIC_CARDS = generateCards()