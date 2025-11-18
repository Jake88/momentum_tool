/**
 * Core type definitions for the Momentum card system
 */

export interface MovementIcon {
  NAME: string
  IMG: string
  VALUE: number
}

export interface CardAbility {
  DESC: string
  VALUE: number
}

export type CardAbilityFunction = (x?: number) => CardAbility

export interface CardConfig {
  id: string
  set: string
  cost: number
  name: string
  momentum?: MovementIcon
  movement: MovementIcon[]
  xpGain: number
  ability?: CardAbility
  estimatedCost: number
}

export interface CardCreationConfig {
  name?: string
  momentum?: MovementIcon
  movement?: MovementIcon[]
  xpGain?: number
  ability?: CardAbility
  overwriteCost?: number
  costModifier?: number
}

export interface KeyStats {
  sum: number
  max: number
  min: number
  avg: number
  avgPerHand: number
}

export interface MovementStats {
  possibleStraights: number
  possibleLefts: number
  possibleRights: number
  STRAIGHT: IconStat
  LEFT: IconStat
  RIGHT: IconStat
  STRAIGHT_OR_LEFT: IconStat
  STRAIGHT_OR_RIGHT: IconStat
  LEFT_OR_RIGHT: IconStat
  WILD: IconStat
}

export interface IconStat {
  momentumCount: number
  movementCount: number
  totalSymbols: number
  percentage: number
}

export interface CardStats {
  cardCount: number
  movementStats: MovementStats
  cost: KeyStats
  estimatedCost: KeyStats
  xpGain: KeyStats
}

export type CardCreatorFunction = (config: CardCreationConfig) => CardConfig
export type CardCopiesFunction = (amt: number, config: CardCreationConfig) => CardConfig[]
