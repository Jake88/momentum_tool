import { STARTER_CARDS } from './cardSets/starterCards'
import { AUTO_SHOP_CARDS } from './cardSets/autoShop'
import { BASIC_CARDS } from './cardSets/basicCards'

function createCardList (cardLists) {
  let combinedList = []
  cardLists.forEach(list => {
    combinedList = [...combinedList, ...list]
  })
  return combinedList
}

const ALL_CARDS = createCardList([STARTER_CARDS])

export { STARTER_CARDS, AUTO_SHOP_CARDS, ALL_CARDS, BASIC_CARDS }
