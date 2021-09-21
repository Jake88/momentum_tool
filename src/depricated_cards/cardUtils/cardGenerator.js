import {
  createCardSet
} from './cardUtils'
import { MOVEMENT_ICON } from './cardConstants'

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
  
  for (let i = 0; i < opts.length; i++) {
    copyPasteString += `
      createCard({
        momentum: ${opts[i]}
      }),
    `
    tempArr.push(createCard({
      momentum: MOVEMENT_ICON[opts[i]]
    }))
    for (let j = 0; j < opts.length; j++) {
      copyPasteString += `
        createCard({
          momentum: ${opts[i]},
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
        if (FLEXIBLE_OPTIONS.includes(opts[i])) flexibleCount++
        if (FLEXIBLE_OPTIONS.includes(opts[j])) flexibleCount++
        if (FLEXIBLE_OPTIONS.includes(opts[k])) flexibleCount++
        const limitedFlexibility = true//flexibleCount < 3

        // Make sure there is no zig-zag cards in 3 series cards.
        let rightCount = 0
        let leftCount = 0
        if (opts[i] === 'LEFT') leftCount++
        if (opts[j] === 'LEFT') leftCount++
        if (opts[k] === 'LEFT') leftCount++
        if (opts[i] === 'RIGHT') rightCount++
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
  return tempArr}

const AUTO_GENERATED_CARDS = generateCards()

export { AUTO_GENERATED_CARDS }
