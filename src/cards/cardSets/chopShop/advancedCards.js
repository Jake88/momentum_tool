import {
  createCardSet,
  createAddCopiesFunction
} from '../../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../../cardUtils/cardConstants'

const {
  WILD, STRAIGHT, LEFT, RIGHT, LEFT_OR_RIGHT, STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

function generateCards () {
  const createCard = createCardSet('Advanced')
  const createCopies = createAddCopiesFunction(createCard)
  
  const momentumOpts = ['LEFT', 'RIGHT', 'STRAIGHT']
  const opts  = ['WILD', 'STRAIGHT', 'LEFT_OR_RIGHT', 'STRAIGHT_OR_LEFT', 'STRAIGHT_OR_RIGHT']

  let copyPasteString = ''
  
  for (let i = 0; i < momentumOpts.length; i++) {
    for (let j = 0; j < opts.length; j++) {
      copyPasteString += `
        createCard({
          momentum: ${momentumOpts[i]},
          movement: [${opts[j]}],
          xpGain: 2
        }),
      `
      for (let k = 0; k < opts.length; k++) {
        copyPasteString += `
          createCard({
            momentum: ${momentumOpts[i]},
            movement: [${opts[j]}, ${opts[k]}],
            xpGain: 2
          }),
        `
      }
    }
  }

  console.log(copyPasteString)

  return [
    
    createCard({
      momentum: LEFT,
      movement: [WILD],
      xpGain: 2
    }),
  
      createCard({
        momentum: LEFT,
        movement: [WILD, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [WILD, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [WILD, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [WILD, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [WILD, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: LEFT,
      movement: [STRAIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: LEFT,
      movement: [LEFT_OR_RIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: LEFT,
        movement: [LEFT_OR_RIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [LEFT_OR_RIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [LEFT_OR_RIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [LEFT_OR_RIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [LEFT_OR_RIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: LEFT,
      movement: [STRAIGHT_OR_LEFT],
      xpGain: 2
    }),
  
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_LEFT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_LEFT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: LEFT,
      movement: [STRAIGHT_OR_RIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_RIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_RIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: LEFT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: RIGHT,
      movement: [WILD],
      xpGain: 2
    }),
  
      createCard({
        momentum: RIGHT,
        movement: [WILD, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [WILD, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [WILD, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [WILD, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [WILD, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: RIGHT,
      movement: [STRAIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: RIGHT,
      movement: [LEFT_OR_RIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: RIGHT,
        movement: [LEFT_OR_RIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [LEFT_OR_RIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [LEFT_OR_RIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [LEFT_OR_RIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [LEFT_OR_RIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: RIGHT,
      movement: [STRAIGHT_OR_LEFT],
      xpGain: 2
    }),
  
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_LEFT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_LEFT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: RIGHT,
      movement: [STRAIGHT_OR_RIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_RIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_RIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: RIGHT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: STRAIGHT,
      movement: [WILD],
      xpGain: 2
    }),
  
      createCard({
        momentum: STRAIGHT,
        movement: [WILD, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [WILD, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [WILD, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [WILD, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [WILD, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: STRAIGHT,
      movement: [LEFT_OR_RIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: STRAIGHT,
        movement: [LEFT_OR_RIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [LEFT_OR_RIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [LEFT_OR_RIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [LEFT_OR_RIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [LEFT_OR_RIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: STRAIGHT,
      movement: [STRAIGHT_OR_LEFT],
      xpGain: 2
    }),
  
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_LEFT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_LEFT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
    createCard({
      momentum: STRAIGHT,
      movement: [STRAIGHT_OR_RIGHT],
      xpGain: 2
    }),
  
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_RIGHT, WILD],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_RIGHT, LEFT_OR_RIGHT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT_OR_LEFT],
        xpGain: 2
      }),
    
      createCard({
        momentum: STRAIGHT,
        movement: [STRAIGHT_OR_RIGHT, STRAIGHT_OR_RIGHT],
        xpGain: 2
      }),
    
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
  //   xpGain: 3
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
    const delta = 6 - card.cost
    if (delta > 0) {
      card.xpGain += delta
      card.cost += delta 
    }
  })
}

adjustXpGain()


export { ADVANCED_CARDS }
