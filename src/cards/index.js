import { STARTER_CARDS } from './cardSets/starterCards'
import { AUTO_SHOP_CARDS } from './cardSets/autoShop/autoShop'
import { BASIC_CARDS } from './cardSets/autoShop/basicCards'
import { UNIQUE_CARDS } from './cardSets/uniqueCards'
import { ADVANCED_CARDS } from './cardSets/chopShop/advancedCards'
import { CHOP_SHOP_CARDS } from './cardSets/chopShop/chopShop'
import { AI_DECK } from './cardSets/MomentumAI/aiDeck'

console.log(AI_DECK)

function createCardList (cardLists) {
  let combinedList = []
  cardLists.forEach(list => {
    combinedList = [...combinedList, ...list]
  })
  return combinedList
}

const ALL_CARDS = createCardList([STARTER_CARDS, BASIC_CARDS, UNIQUE_CARDS, ADVANCED_CARDS])

export { STARTER_CARDS, AUTO_SHOP_CARDS, ALL_CARDS, BASIC_CARDS, UNIQUE_CARDS, ADVANCED_CARDS, CHOP_SHOP_CARDS, AI_DECK }
