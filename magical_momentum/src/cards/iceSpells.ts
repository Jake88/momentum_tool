/**
 * MAGICAL MOMENTUM - Ice & Water Magic Spell Cards (Blue School)
 *
 * Ice magic focuses on control, freezing, slowing opponents,
 * precision movement, and defensive abilities.
 */

import {
  ICE_ABILITIES,
  UNIVERSAL_ABILITIES
} from '../spells/spellAbilities'

const MOVEMENT = {
  STRAIGHT: { NAME: 'STRAIGHT', VALUE: 1 },
  LEFT: { NAME: 'LEFT', VALUE: 1 },
  RIGHT: { NAME: 'RIGHT', VALUE: 1 },
  STRAIGHT_OR_LEFT: { NAME: 'STRAIGHT_OR_LEFT', VALUE: 2 },
  STRAIGHT_OR_RIGHT: { NAME: 'STRAIGHT_OR_RIGHT', VALUE: 2 },
  LEFT_OR_RIGHT: { NAME: 'LEFT_OR_RIGHT', VALUE: 2 },
  WILD: { NAME: 'WILD', VALUE: 3 },
}

export interface SpellCard {
  id: string
  name: string
  school: string
  cost: number
  momentum?: typeof MOVEMENT[keyof typeof MOVEMENT]
  movement: (typeof MOVEMENT[keyof typeof MOVEMENT])[]
  xpGain: number
  ability?: any
  estimatedCost: number
  flavor: string
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'LEGENDARY'
}

let cardIdCounter = 1

function createIceSpell(config: {
  name: string
  momentum?: typeof MOVEMENT[keyof typeof MOVEMENT]
  movement?: (typeof MOVEMENT[keyof typeof MOVEMENT])[]
  xpGain?: number
  ability?: any
  costModifier?: number
  overwriteCost?: number
  flavor: string
  rarity?: 'COMMON' | 'UNCOMMON' | 'RARE' | 'LEGENDARY'
}): SpellCard {
  const {
    name,
    momentum,
    movement = [],
    xpGain = 0,
    ability,
    costModifier = 0,
    overwriteCost,
    flavor,
    rarity = 'COMMON'
  } = config

  let cost = costModifier
  if (momentum) cost += momentum.VALUE
  if (movement.length) {
    movement.forEach(m => (cost += m.VALUE))
  }
  if (ability) cost += ability.VALUE
  cost += xpGain

  const estimatedCost = Math.ceil(cost)

  return {
    id: `ICE${cardIdCounter++}`,
    name,
    school: 'ICE',
    cost: typeof overwriteCost === 'number' ? overwriteCost : estimatedCost,
    momentum,
    movement,
    xpGain,
    ability,
    estimatedCost,
    flavor,
    rarity
  }
}

// ========================================
// ICE & WATER SPELL CARDS
// ========================================

export const ICE_SPELLS: SpellCard[] = [
  // ===== FREEZE SPELLS ===== (Slowing Opponents)
  createIceSpell({
    name: 'Frost Bolt',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (ICE_ABILITIES.FREEZE as Function)(4),
    xpGain: 1,
    flavor: 'A lance of ice slows your target to a crawl.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Freezing Ray',
    momentum: MOVEMENT.WILD,
    ability: (ICE_ABILITIES.FREEZE as Function)(5),
    xpGain: 2,
    flavor: 'Arctic cold radiates from you, freezing all it touches.',
    rarity: 'RARE'
  }),

  createIceSpell({
    name: 'Chill Touch',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    ability: (ICE_ABILITIES.FREEZE as Function)(3),
    xpGain: 1,
    flavor: 'A touch of winter slows their advance.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Chill Touch',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    ability: (ICE_ABILITIES.FREEZE as Function)(3),
    xpGain: 1,
    flavor: 'A touch of winter slows their advance.',
    rarity: 'COMMON'
  }),

  // ===== ICE WALL SPELLS ===== (Blocking Lanes)
  createIceSpell({
    name: 'Frozen Barrier',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.ICE_WALL as any,
    xpGain: 1,
    flavor: 'Conjure a wall of impenetrable ice.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Glacial Wall',
    momentum: MOVEMENT.WILD,
    ability: ICE_ABILITIES.ICE_WALL as any,
    xpGain: 2,
    flavor: 'Raise an icy rampart to block the path.',
    rarity: 'RARE'
  }),

  createIceSpell({
    name: 'Ice Blockade',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.ICE_WALL as any,
    xpGain: 1,
    flavor: 'Freeze the lane, forcing opponents to detour.',
    rarity: 'UNCOMMON'
  }),

  // ===== TIDAL PUSH SPELLS ===== (Push/Pull)
  createIceSpell({
    name: 'Tidal Wave',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.WILD],
    ability: (ICE_ABILITIES.TIDAL_PUSH as Function)(3),
    xpGain: 2,
    flavor: 'Water surges, pushing or pulling at your command.',
    rarity: 'RARE'
  }),

  createIceSpell({
    name: 'Undertow',
    momentum: MOVEMENT.WILD,
    ability: (ICE_ABILITIES.TIDAL_PUSH as Function)(4),
    xpGain: 2,
    costModifier: -1,
    flavor: 'The current drags them where you will.',
    rarity: 'RARE'
  }),

  createIceSpell({
    name: 'Wave Pulse',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    ability: (ICE_ABILITIES.TIDAL_PUSH as Function)(2),
    xpGain: 1,
    flavor: 'A pulse of water repositions your target.',
    rarity: 'UNCOMMON'
  }),

  // ===== CRYSTALLIZE SPELLS ===== (Hazard Mitigation)
  createIceSpell({
    name: 'Frozen Path',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.CRYSTALLIZE as any,
    xpGain: 1,
    flavor: 'Turn danger into opportunity with a touch of ice.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Crystal Shield',
    momentum: MOVEMENT.WILD,
    ability: ICE_ABILITIES.CRYSTALLIZE as any,
    xpGain: 2,
    flavor: 'Hazards become stepping stones of ice.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Ice Over',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.CRYSTALLIZE as any,
    xpGain: 1,
    flavor: 'Freeze the danger solid, then race across it.',
    rarity: 'COMMON'
  }),

  // ===== FROST ARMOR SPELLS ===== (Defense)
  createIceSpell({
    name: 'Frozen Shell',
    momentum: MOVEMENT.STRAIGHT,
    ability: ICE_ABILITIES.FROST_ARMOR as any,
    xpGain: 2,
    flavor: 'Encase yourself in protective ice.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Ice Plating',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    ability: ICE_ABILITIES.FROST_ARMOR as any,
    xpGain: 1,
    flavor: 'Crystals form a protective layer.',
    rarity: 'COMMON'
  }),

  // ===== GLACIAL PATH SPELLS ===== (Safe Passage)
  createIceSpell({
    name: 'Bridge of Ice',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.GLACIAL_PATH as any,
    xpGain: 2,
    flavor: 'Conjure a bridge over treacherous terrain.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Frozen Crossing',
    momentum: MOVEMENT.WILD,
    ability: ICE_ABILITIES.GLACIAL_PATH as any,
    xpGain: 2,
    flavor: 'Ice creates a path where none existed.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Ice Step',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    movement: [MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.GLACIAL_PATH as any,
    xpGain: 1,
    flavor: 'Step on frozen air itself.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Ice Step',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: ICE_ABILITIES.GLACIAL_PATH as any,
    xpGain: 1,
    flavor: 'Step on frozen air itself.',
    rarity: 'COMMON'
  }),

  // ===== ABSOLUTE ZERO SPELLS ===== (Total Freeze/Stun)
  createIceSpell({
    name: 'Absolute Zero',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT],
    ability: (ICE_ABILITIES.ABSOLUTE_ZERO as Function)(3),
    xpGain: 3,
    flavor: 'Reduce them to motionless ice.',
    rarity: 'LEGENDARY'
  }),

  createIceSpell({
    name: 'Deep Freeze',
    momentum: MOVEMENT.STRAIGHT,
    ability: (ICE_ABILITIES.ABSOLUTE_ZERO as Function)(2),
    xpGain: 2,
    costModifier: 1,
    flavor: 'Time stops for the frozen.',
    rarity: 'RARE'
  }),

  // ===== PURE MOVEMENT SPELLS ===== (Ice-themed)
  createIceSpell({
    name: 'Glacial Glide',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    xpGain: 2,
    flavor: 'Slide across ice with supernatural grace.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Frozen Flow',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'Flow like water, fast and unstoppable.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Ice Slide',
    momentum: MOVEMENT.LEFT,
    movement: [MOVEMENT.LEFT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'Bank smoothly on a sheet of ice.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Ice Slide',
    momentum: MOVEMENT.RIGHT,
    movement: [MOVEMENT.RIGHT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'Bank smoothly on a sheet of ice.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Precision Turn',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    movement: [MOVEMENT.LEFT, MOVEMENT.LEFT],
    xpGain: 1,
    flavor: 'Control your trajectory with icy precision.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Precision Turn',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    movement: [MOVEMENT.RIGHT, MOVEMENT.RIGHT],
    xpGain: 1,
    flavor: 'Control your trajectory with icy precision.',
    rarity: 'COMMON'
  }),

  createIceSpell({
    name: 'Flowing Path',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.WILD],
    xpGain: 2,
    flavor: 'Like water, you adapt to any course.',
    rarity: 'UNCOMMON'
  }),

  // ===== COMBO SPELLS ===== (Universal with ice flavor)
  createIceSpell({
    name: 'Frozen Time',
    momentum: MOVEMENT.WILD,
    ability: UNIVERSAL_ABILITIES.TIME_WARP as any,
    xpGain: 3,
    flavor: 'Freeze time itself for one perfect moment.',
    rarity: 'LEGENDARY'
  }),

  createIceSpell({
    name: 'Dispelling Frost',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: UNIVERSAL_ABILITIES.DISPEL_MAGIC as any,
    xpGain: 1,
    flavor: 'Ice crystals shatter magical effects.',
    rarity: 'UNCOMMON'
  }),

  createIceSpell({
    name: 'Permafrost Slow',
    momentum: MOVEMENT.STRAIGHT,
    ability: (UNIVERSAL_ABILITIES.SLOW as Function)(4),
    xpGain: 2,
    flavor: 'Reduce them to half speed with biting cold.',
    rarity: 'RARE'
  }),
]

export default ICE_SPELLS

export const ICE_DECK_STATS = {
  totalCards: ICE_SPELLS.length,
  school: 'ICE',
  rarityBreakdown: {
    COMMON: ICE_SPELLS.filter(s => s.rarity === 'COMMON').length,
    UNCOMMON: ICE_SPELLS.filter(s => s.rarity === 'UNCOMMON').length,
    RARE: ICE_SPELLS.filter(s => s.rarity === 'RARE').length,
    LEGENDARY: ICE_SPELLS.filter(s => s.rarity === 'LEGENDARY').length,
  },
  averageCost: Math.round(
    ICE_SPELLS.reduce((sum, s) => sum + s.cost, 0) / ICE_SPELLS.length
  ),
  totalXP: ICE_SPELLS.reduce((sum, s) => sum + s.xpGain, 0),
}
