import { PLAYER_HAND_SIZE } from '../../constants/gameVariables'
import { MOVEMENT_ICON, CARD_ABILITY, POSSIBLE_STRAIGHTS, POSSIBLE_RIGHTS, POSSIBLE_LEFTS } from './cardConstants'

export function createCardSet (setName = 'Setless') {
  let id = 1
  const setAbbreviation = setName
    .split(' ')
    .map(s => s.substr(0, 1))
    .join('')
  return function createCard ({
    name = 'Unnamed',
    momentum = undefined,
    movement = [],
    xpGain = 0,
    ability = undefined,
    overwriteCost = undefined,
    costModifier = 0
  }) {
    function getValue () {
      let cost = costModifier - 1
      if (momentum) cost += momentum.VALUE
      if (movement.length) {
        movement.forEach(move => cost += move.VALUE)
      }
      if (ability) cost += ability.VALUE
      cost += xpGain * (xpGain - .5)
      return Math.ceil(cost)
    }
    const estimatedCost = getValue()

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
  let totalSymbolCount = 0
  const possibleMovementTypes = {
    possibleStraights: 0,
    possibleLefts: 0,
    possibleRights: 0
  }
  const iconMap = {}
  Object.values(MOVEMENT_ICON).forEach(icon => {
    iconMap[icon.NAME] = {
      momentumCount: 0,
      movementCount: 0,
      totalSymbols: 0,
      percentage: 0
    }
  })

  function increaseGeneralMovementPossibilities(icon) {
    if (POSSIBLE_STRAIGHTS.includes(icon.NAME)) possibleMovementTypes.possibleStraights++
    if (POSSIBLE_RIGHTS.includes(icon.NAME)) possibleMovementTypes.possibleRights++
    if (POSSIBLE_LEFTS.includes(icon.NAME)) possibleMovementTypes.possibleLefts++
  }

  cardList.forEach(card => {
    if (card.momentum) {
      totalSymbolCount++
      iconMap[card.momentum.NAME].momentumCount++
      increaseGeneralMovementPossibilities(card.momentum)
    }

    card.movement.forEach(move => {
      iconMap[move.NAME].movementCount++
      increaseGeneralMovementPossibilities(move)
    })
    totalSymbolCount += card.movement.length
  })

  Object.keys(iconMap).forEach(iconName => {
    iconMap[iconName].totalSymbols = iconMap[iconName].momentumCount + iconMap[iconName].movementCount
    iconMap[iconName].percentage = (iconMap[iconName].totalSymbols / totalSymbolCount) * 100
  })

  return {...possibleMovementTypes, ...iconMap}
}

export function getAbilityStats (cardList) {}

export function calculateCardStats (cardList) {
  return {
    cardCount: cardList.length,
    movementStats: getIconStats(cardList),
    //abilityStats,
    cost: keyStatCalculator(cardList, 'cost'),
    estimatedCost: keyStatCalculator(cardList, 'estimatedCost'),
    xpGain: keyStatCalculator(cardList, 'xpGain')
  }
}
