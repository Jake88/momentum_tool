import {
  createCardSet
} from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

const FLEXIBLE_OPTIONS = ['WILD', 'LEFT_OR_RIGHT', 'STRAIGHT_OR_RIGHT', 'STRAIGHT_OR_LEFT']

function generateCards () {
  const createCard = createCardSet('Auto Generated')
  
  // ALL cards. 392 options.
  const opts  = ['WILD', 'STRAIGHT', 'LEFT_OR_RIGHT', 'STRAIGHT_OR_LEFT', 'STRAIGHT_OR_RIGHT', 'LEFT', 'RIGHT']


  let copyPasteString = ''
  const tempArr = []
  
  for (let i = 0; i < momentumOpts.length; i++) {
    copyPasteString += `
      createCard({
        momentum: ${momentumOpts[i]}
      }),
    `
    tempArr.push(createCard({
      momentum: MOVEMENT_ICON[opts[i]],
      movement: [MOVEMENT_ICON[opts[j]]]
    }))
    for (let j = 0; j < opts.length; j++) {
      copyPasteString += `
        createCard({
          momentum: ${momentumOpts[i]},
          movement: [${opts[j]}]
        }),
      `
      tempArr.push(createCard({
        momentum: MOVEMENT_ICON[opts[i]],
        movement: [MOVEMENT_ICON[opts[j]]]
      }))
      for (let k = 0; k < opts.length; k++) {
        // Make sure there is not cards with too many flexible options available.
        let flexibleCount = 0
        if (FLEXIBLE_OPTIONS.includes(momentumOpts[i])) flexibleCount++
        if (FLEXIBLE_OPTIONS.includes(opts[j])) flexibleCount++
        if (FLEXIBLE_OPTIONS.includes(opts[k])) flexibleCount++
        const limitedFlexibility = true//flexibleCount < 3

        // Make sure there is no zig-zag cards in 3 series cards.
        let rightCount = 0
        let leftCount = 0
        if (momentumOpts[i] === 'LEFT') leftCount++
        if (opts[j] === 'LEFT') leftCount++
        if (opts[k] === 'LEFT') leftCount++
        if (momentumOpts[i] === 'RIGHT') rightCount++
        if (opts[j] === 'RIGHT') rightCount++
        if (opts[k] === 'RIGHT') rightCount++
        const incompatibleTurns = (rightCount > 0 && leftCount > 0)

        // Make sure cards have similar movements to be kind of consistant.
        let isConsistent = false;
        if (opts[k] === opts[j] || opts[k] === opts[i]) isConsistent = true


        if (limitedFlexibility && !incompatibleTurns && isConsistent) {
          copyPasteString += `
            createCard({
              momentum: ${opts[i]},
              movement: [${opts[j]}, ${opts[k]}],
            }),
          `
          tempArr.push(createCard({
            momentum: MOVEMENT_ICON[opts[i]],
            movement: [MOVEMENT_ICON[opts[j]], MOVEMENT_ICON[opts[k]]],
          }))
        }
      }
    }
  }

  // console.log(copyPasteString)
  return tempArr
  return [
    
  //  // WILD
  //  ...createCopies(2, {
  //   name: 'Wildest',
  //   momentum: WILD,
  //   xpGain: 3,
  // }),
  //  ...createCopies(2, {
  //   name: 'Anytime, anywhere',
  //   momentum: WILD,
  //   movement: [WILD],
  //   xpGain: 2,
  // }),
  //  ...createCopies(2, {
  //   name: 'Lead up',
  //   momentum: WILD,
  //   movement: [STRAIGHT],
  //   xpGain: 2,
  // }),
  // // // LEFT || RIGHT
  // ...createCopies(2, {
  //   name: 'Best choice',
  //   momentum: LEFT_OR_RIGHT,
  //   xpGain: 3,
  // }),
  // ...createCopies(2, {
  //   name: 'Calculated approach',
  //   momentum: LEFT_OR_RIGHT,
  //   movement: [LEFT_OR_RIGHT],
  //   xpGain: 2
  // }),
  // ...createCopies(2, {
  //   name: 'Ludacris approach',
  //   momentum: LEFT_OR_RIGHT,
  //   movement: [STRAIGHT, STRAIGHT],
  //   xpGain: 2
  // }),
  // // STRAIGHT
  // ...createCopies(4, {
  //   name: 'Floor it',
  //   momentum: STRAIGHT,
  //   movement: [STRAIGHT, STRAIGHT],
  //   xpGain: 3
  // }),
  // ...createCopies(2, {
  //   name: 'Setup straight',
  //   momentum: STRAIGHT,
  //   movement: [LEFT_OR_RIGHT],
  //   xpGain: 3
  // }),

  // // STRAIGHT || LEFT
  // ...createCopies(2, {
  //   name: 'The windies',
  //   momentum: STRAIGHT_OR_LEFT,
  //   movement: [STRAIGHT_OR_RIGHT],
  //   xpGain: 3w
  // }),
  // // STRAIGHT || RIGHT
  // ...createCopies(2, {
  //   name: 'The windies',
  //   momentum: STRAIGHT_OR_RIGHT,
  //   movement: [STRAIGHT_OR_LEFT],
  //   xpGain: 3
  // }),
]}

const ADVANCED_CARDS = generateCards()

function adjustXpGain() {
  ADVANCED_CARDS.forEach(card => {
    const delta = 5 - card.cost
    if (delta > 0) {
      card.xpGain += delta + 1
      card.cost += delta 
    }
  })
}

adjustXpGain()


export { ADVANCED_CARDS }
