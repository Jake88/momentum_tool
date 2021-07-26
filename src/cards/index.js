import { AUTO_GENERATED_CARDS } from './cardUtils/cardGenerator'
import { STARTER_CARDS } from './cardSets/starterCards'
import { ABILITY_CARDS } from './cardSets/abilityCards'
// import { AUTO_SHOP_CARDS } from './cardSets/autoShop/autoShop'
// import { BASIC_CARDS } from './cardSets/autoShop/basicCards'
// import { UNIQUE_CARDS } from './cardSets/uniqueCards'
// import { ADVANCED_CARDS } from './cardSets/chopShop/advancedCards'
// import { CHOP_SHOP_CARDS } from './cardSets/chopShop/chopShop'
import { AI_DECK } from './cardSets/MomentumAI/aiDeck'

function createCardList (cardLists) {
  let combinedList = []
  cardLists.forEach(list => {
    combinedList = [...combinedList, ...list]
  })
  return combinedList
}

console.log('test', AUTO_GENERATED_CARDS)

const BASIC_CARDS = []
const ADVANCED_CARDS = []
const POWER_CARDS = []

const createLists = () => {
  AUTO_GENERATED_CARDS.forEach(card => {
    if (card.cost < 3) {
    } else if (card.cost < 6) {
      card.set = 'Basic'
      card.id ='B' + BASIC_CARDS.length
      BASIC_CARDS.push(card)
      BASIC_CARDS.push({...card, id: 'B' + BASIC_CARDS.length})
      // Duplicate the less premium cards.
      // if (card.cost < 5) BASIC_CARDS.push(card)
    } else if (card.cost < 9) {
      card.set = 'Advanced'
      card.id ='A' + ADVANCED_CARDS.length
      ADVANCED_CARDS.push(card)
      // if (card.cost < 9) ADVANCED_CARDS.push(card)
    } else if (card.cost >= 9) {
      card.set = 'Power'
      card.id ='P' + POWER_CARDS.length
      card.movement.push(card.momentum)
      card.momentum = undefined
      POWER_CARDS.push(card)
    }
  })
}

createLists()

function adjustXpGain() {
  // ADVANCED_CARDS.forEach(card => {
  //   const delta = 5 - card.cost
  //   if (delta > 0) {
  //     card.xpGain += delta + 1
  //     card.cost += delta 
  //   }
  // })
}

// const ALL_CARDS = createCardList([STARTER_CARDS, BASIC_CARDS, UNIQUE_CARDS, ADVANCED_CARDS])

// export { STARTER_CARDS, AUTO_SHOP_CARDS, ALL_CARDS, BASIC_CARDS, UNIQUE_CARDS, ADVANCED_CARDS, CHOP_SHOP_CARDS, AI_DECK }

export { AUTO_GENERATED_CARDS, AI_DECK, STARTER_CARDS, BASIC_CARDS, ADVANCED_CARDS, POWER_CARDS, ABILITY_CARDS }