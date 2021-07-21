import { PLAYER_HAND_SIZE } from '../constants/gameVariables'
import { MOVEMENT_ICON, CARD_ABILITY } from './cardConstants'

export function createCardSet (setName = 'Setless') {
  let id = 1
  const setAbbreviation = setName
    .split(' ')
    .map(s => s.substr(0, 1))
    .join()
  return function createCard ({
    name = 'Unnamed',
    momentum = MOVEMENT_ICON.STRAIGHT,
    movement = [],
    xpGain = 0,
    ability = undefined,
    overwriteCost = undefined,
    costModifer = 0
  }) {
    function getValue () {
      let cost = costModifer
      if (momentum) cost += momentum.VALUE
      if (movement.length) {
        movement.forEach(move => cost += move.VALUE)
      }
      if (ability) cost += ability.VALUE
      cost += xpGain
      return cost
    }
    const estimatedCost = getValue()

    console.log(movement)
    return {
      id: setAbbreviation + id++,
      set: setName,
      cost: typeof overwriteCost === 'number' ? overwriteCost : estimatedCost,
      name,
      momentum,
      movement,
      xpGain,
      ability,
      estimatedCost
    }
  }
}

export function createAddCopiesFunction (cardCreatorFunction) {
  return function (amt, config) {
    const copies = []
    for (let i = 0; i < amt; i++) {
      copies.push(cardCreatorFunction(config))
    }
    return copies
  }
}

export function keySummer (cardList, key) {
  let sum = 0
  cardList.forEach(card => {
    sum += card[key]
  })
  return sum
}

export function keyStatCalculator (cardList, key) {
  const sum = keySummer(cardList, key)
  const avg = sum / cardList.length
  return {
    sum,
    avg,
    avgPerHand: avg * PLAYER_HAND_SIZE
  }
}

export function getIconStats (cardList) {
  const iconMap = {}
  Object.values(MOVEMENT_ICON).forEach(icon => {
    iconMap[icon.NAME] = 0
  })

  cardList.forEach(card => {
    iconMap[card.movement.NAME] = iconMap[card.movement.NAME] + 1
  })

  Object.keys(iconMap).forEach(iconName => {
    iconMap[iconName] = {
      count: iconMap[iconName],
      percentage: (iconMap[iconName] / cardList.length) * 100
    }
  })

  return iconMap
}

export function getAbilityStats (cardList) {}

export function calculateCardStats (cardList) {
  return {
    movementStats: getIconStats(cardList),
    //abilityStats,
    cost: keyStatCalculator(cardList, 'cost'),
    estimatedCost: keyStatCalculator(cardList, 'estimatedCost'),
    xpGain: keyStatCalculator(cardList, 'xpGain')
  }
}
