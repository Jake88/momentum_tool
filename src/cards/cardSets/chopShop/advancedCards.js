import {
  createCardSet,
  createAddCopiesFunction
} from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateCards () {
  const createCard = createCardSet('Advanced Cards')
  const createCopies = createAddCopiesFunction(createCard)
  return [
   // WILD
   ...createCopies(2, {
    name: 'Wildest',
    momentum: WILD,
    xpGain: 3,
    costModifier: -1
  }),
   ...createCopies(2, {
    name: 'Anytime, anywhere',
    momentum: WILD,
    movement: [WILD],
    xpGain: 2,
    costModifier: -1
  }),
   ...createCopies(2, {
    name: 'Lead up',
    momentum: WILD,
    movement: [STRAIGHT],
    xpGain: 2,
    costModifier: -1
  }),
  // // LEFT || RIGHT
  ...createCopies(2, {
    name: 'Best choice',
    momentum: LEFT_OR_RIGHT,
    xpGain: 3,
    costModifier: -1
  }),
  ...createCopies(2, {
    name: 'Calculated approach',
    momentum: LEFT_OR_RIGHT,
    movement: [LEFT_OR_RIGHT],
    xpGain: 2
  }),
  ...createCopies(2, {
    name: 'Ludacris approach',
    momentum: LEFT_OR_RIGHT,
    movement: [STRAIGHT, STRAIGHT],
    xpGain: 2
  }),
  // STRAIGHT
  ...createCopies(4, {
    name: 'Floor it',
    momentum: STRAIGHT,
    movement: [STRAIGHT, STRAIGHT],
    xpGain: 3
  }),
  ...createCopies(2, {
    name: 'Setup straight',
    momentum: STRAIGHT,
    movement: [LEFT_OR_RIGHT],
    xpGain: 3
  }),

  // STRAIGHT || LEFT
  ...createCopies(2, {
    name: 'The windies',
    momentum: STRAIGHT_OR_LEFT,
    movement: [STRAIGHT_OR_RIGHT],
    xpGain: 3
  }),
  // STRAIGHT || RIGHT
  ...createCopies(2, {
    name: 'The windies',
    momentum: STRAIGHT_OR_RIGHT,
    movement: [STRAIGHT_OR_LEFT],
    xpGain: 3
  }),
]}

export const ADVANCED_CARDS = generateCards()