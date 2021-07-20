import { STARTER_CARDS } from './cardSets/starterCards'

function createCardList(cardLists) {
  let combinedList = []
  cardLists.forEach(list => {
    combinedList = [...combinedList, ...list]
  })
  return combinedList
}

const ALL_CARDS = createCardList(
  STARTER_CARDS
)

export { STARTER_CARDS }
