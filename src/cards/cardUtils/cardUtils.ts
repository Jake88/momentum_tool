import { PLAYER_HAND_SIZE } from '../../constants/gameVariables'
import {
  MOVEMENT_ICON,
  POSSIBLE_STRAIGHTS,
  POSSIBLE_RIGHTS,
  POSSIBLE_LEFTS
} from './cardConstants'
import {
  CardConfig,
  CardCreationConfig,
  CardCreatorFunction,
  CardCopiesFunction,
  KeyStats,
  MovementStats,
  CardStats,
  IconStat,
  MovementIcon
} from '../../types/card.types'

export function createCardSet(setName: string = 'Setless'): CardCreatorFunction {
  let id = 1
  const setAbbreviation = setName
    .split(' ')
    .map((s) => s.substr(0, 1))
    .join('')

  return function createCard({
    name = 'Unnamed',
    momentum = undefined,
    movement = [],
    xpGain = 0,
    ability = undefined,
    overwriteCost = undefined,
    costModifier = 0
  }: CardCreationConfig): CardConfig {
    function getValue(): number {
      let cost = costModifier
      if (momentum) cost += momentum.VALUE
      if (movement.length) {
        movement.forEach((move) => (cost += move.VALUE))
      }
      if (ability) cost += ability.VALUE
      cost += xpGain
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

export function createAddCopiesFunction(
  cardCreatorFunction: CardCreatorFunction
): CardCopiesFunction {
  return function (amt: number, config: CardCreationConfig): CardConfig[] {
    const copies: CardConfig[] = []
    for (let i = 0; i < amt; i++) {
      copies.push(cardCreatorFunction(config))
    }
    return copies
  }
}

export function keySummer(cardList: CardConfig[], key: keyof CardConfig): number {
  let sum = 0
  cardList.forEach((card) => {
    const value = card[key]
    if (typeof value === 'number') {
      sum += value
    }
  })
  return sum
}

export function keyStatCalculator(
  cardList: CardConfig[],
  key: keyof CardConfig
): KeyStats {
  let max = 0
  let min = 100
  cardList.forEach((card) => {
    const value = card[key]
    if (typeof value === 'number') {
      if (value > max) max = value
      if (value < min) min = value
    }
  })
  const sum = keySummer(cardList, key)
  const avg = sum / cardList.length
  return {
    sum,
    max,
    min,
    avg,
    avgPerHand: avg * PLAYER_HAND_SIZE
  }
}

export function getIconStats(cardList: CardConfig[]): MovementStats {
  let totalSymbolCount = 0
  const possibleMovementTypes = {
    possibleStraights: 0,
    possibleLefts: 0,
    possibleRights: 0
  }

  const iconMap: Record<string, IconStat> = {}
  Object.values(MOVEMENT_ICON).forEach((icon) => {
    iconMap[icon.NAME] = {
      momentumCount: 0,
      movementCount: 0,
      totalSymbols: 0,
      percentage: 0
    }
  })

  function increaseGeneralMovementPossibilities(icon: MovementIcon): void {
    if (POSSIBLE_STRAIGHTS.includes(icon.NAME)) possibleMovementTypes.possibleStraights++
    if (POSSIBLE_RIGHTS.includes(icon.NAME)) possibleMovementTypes.possibleRights++
    if (POSSIBLE_LEFTS.includes(icon.NAME)) possibleMovementTypes.possibleLefts++
  }

  cardList.forEach((card) => {
    if (card.momentum) {
      totalSymbolCount++
      iconMap[card.momentum.NAME].momentumCount++
      increaseGeneralMovementPossibilities(card.momentum)
    }

    card.movement.forEach((move) => {
      iconMap[move.NAME].movementCount++
      increaseGeneralMovementPossibilities(move)
    })
    totalSymbolCount += card.movement.length
  })

  Object.keys(iconMap).forEach((iconName) => {
    iconMap[iconName].totalSymbols =
      iconMap[iconName].momentumCount + iconMap[iconName].movementCount
    iconMap[iconName].percentage =
      (iconMap[iconName].totalSymbols / totalSymbolCount) * 100
  })

  return {
    ...possibleMovementTypes,
    STRAIGHT: iconMap.STRAIGHT,
    LEFT: iconMap.LEFT,
    RIGHT: iconMap.RIGHT,
    STRAIGHT_OR_LEFT: iconMap.STRAIGHT_OR_LEFT,
    STRAIGHT_OR_RIGHT: iconMap.STRAIGHT_OR_RIGHT,
    LEFT_OR_RIGHT: iconMap.LEFT_OR_RIGHT,
    WILD: iconMap.WILD
  }
}

export function getAbilityStats(cardList: CardConfig[]): Record<string, unknown> {
  // TODO: Implement ability statistics
  return {}
}

export function calculateCardStats(cardList: CardConfig[]): CardStats {
  return {
    cardCount: cardList.length,
    movementStats: getIconStats(cardList),
    cost: keyStatCalculator(cardList, 'cost'),
    estimatedCost: keyStatCalculator(cardList, 'estimatedCost'),
    xpGain: keyStatCalculator(cardList, 'xpGain')
  }
}
