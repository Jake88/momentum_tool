import {
  createCardSet,
  createAddCopiesFunction
} from '../cardUtils/cardUtils'
import {
  CARD_ABILITY
} from '../cardUtils/abilities'

const { BOOST, GRAPPLE, OBSTICLE, OIL, SHIELD, DRAW, FORGET, HOOK, KAGINAWA, SHIFTER } = CARD_ABILITY

function generateCards () {
  const createCard = createCardSet('Ability')
  const createCopies = createAddCopiesFunction(createCard)

  // const cards = []
  // Object.values(CARD_ABILITY).forEach(ability => {
  //   const card = createCard({
  //     ability,
  //     type: 'ABILITY'
  //   })
  //   cards.push(card)
  //   cards.push(card)
  //   cards.push(card)
  //   // cards.push({...card, id: card.id + 'b'})
  //   // cards.push({...card, id: card.id + 'c'})
  // })  

  return [
    ...createCopies(3, {ability: BOOST, type: 'ABILITY'}),
    ...createCopies(3, {ability: GRAPPLE, type: 'ABILITY'}),
    ...createCopies(3, {ability: OBSTICLE, type: 'ABILITY'}),
    ...createCopies(3, {ability: OIL, type: 'ABILITY'}),
    ...createCopies(3, {ability: SHIELD, type: 'ABILITY'}),
    ...createCopies(3, {ability: DRAW, type: 'ABILITY'}),
    ...createCopies(3, {ability: FORGET, type: 'ABILITY'}),
    ...createCopies(3, {ability: HOOK, type: 'ABILITY'}),
    ...createCopies(3, {ability: KAGINAWA, type: 'ABILITY'}),
    ...createCopies(2, {ability: SHIFTER, type: 'ABILITY'}),
  ]
}

export const ABILITY_CARDS = generateCards()