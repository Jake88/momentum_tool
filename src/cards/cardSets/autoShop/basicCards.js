import {
  createCardSet,
  createAddCopiesFunction
} from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateCards () {
  const createCard = createCardSet('Basic')
  const createCopies = createAddCopiesFunction(createCard)
  return [
   // WILD
   ...createCopies(2, {
    name: 'Wild',
    momentum: WILD,
    xpGain: 1
  }),
   ...createCopies(2, {
    name: 'Wilder',
    momentum: WILD,
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    movement: [WILD],
    xpGain: 2
  }),
  // LEFT || RIGHT
  ...createCopies(3, {
    name: 'Better choices',
    momentum: LEFT_OR_RIGHT,
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    movement: [LEFT_OR_RIGHT],
    xpGain: 2
  }),  
  ...createCopies(2, {
    name: '',
    momentum: LEFT_OR_RIGHT,
    movement: [STRAIGHT],
    xpGain: 1
  }),
  // STRAIGHT
  ...createCopies(3, {
    name: 'Fundamental',
    momentum: STRAIGHT,
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    momentum: STRAIGHT,
    movement: [LEFT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    momentum: STRAIGHT,
    movement: [RIGHT],
    xpGain: 2
  }),
  ...createCopies(3, {
    name: 'Reckless',
    momentum: STRAIGHT,
    movement: [STRAIGHT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    movement: [STRAIGHT, STRAIGHT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    movement: [STRAIGHT],
    xpGain: 3,
  }),
  // LEFT
  ...createCopies(2, {
    name: 'Drift',
    momentum: LEFT,
    xpGain: 2
  }),
  ...createCopies(2, {
    name: 'Hard left',
    momentum: LEFT,
    movement: [LEFT],
    xpGain: 1
  }),
  ...createCopies(1, {
    name: 'Zig',
    momentum: LEFT,
    movement: [RIGHT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: 'Adjust',
    movement: [LEFT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: '',
    movement: [LEFT],
    xpGain: 3,
  }),
  // RIGHT
  ...createCopies(2, {
    name: 'Drift',
    momentum: RIGHT,
    xpGain: 2
  }),
  ...createCopies(2, {
    name: 'Hard right',
    momentum: RIGHT,
    movement: [RIGHT],
    xpGain: 1
  }),
  ...createCopies(1, {
    name: 'Zag',
    momentum: RIGHT,
    movement: [LEFT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: 'Ease out',
    momentum: RIGHT,
    movement: [STRAIGHT],
    xpGain: 1
  }),
  ...createCopies(2, {
    name: 'Adjust',
    movement: [RIGHT],
    xpGain: 2,
    costModifier: -1
  }),
  ...createCopies(2, {
    name: '',
    movement: [RIGHT],
    xpGain: 3,
  }),
  // STRAIGHT || LEFT
  ...createCopies(2, {
    name: 'Cautious approach',
    momentum: STRAIGHT_OR_LEFT,
    xpGain: 1
  }),
  ...createCopies(1, {
    name: '',
    momentum: STRAIGHT_OR_LEFT,
    movement: [LEFT],
    xpGain: 1
  }),
  ...createCopies(1, {
    name: '',
    momentum: STRAIGHT_OR_LEFT,
    movement: [STRAIGHT],
    xpGain: 1
  }),
  // STRAIGHT || RIGHT
  ...createCopies(2, {
    name: 'Cautious approach',
    momentum: STRAIGHT_OR_RIGHT,
    xpGain: 1
  }),
  ...createCopies(1, {
    name: '',
    momentum: STRAIGHT_OR_RIGHT,
    movement: [RIGHT],
    xpGain: 1
  }),
  ...createCopies(1, {
    name: '',
    momentum: STRAIGHT_OR_RIGHT,
    movement: [STRAIGHT],
    xpGain: 1
  }),
]}

export const BASIC_CARDS = generateCards()