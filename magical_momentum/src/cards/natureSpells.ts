/**
 * MAGICAL MOMENTUM - Nature Magic Spell Cards (Green School)
 *
 * Nature magic focuses on growth, beasts, vines, terrain control,
 * healing, and momentum manipulation.
 */

import {
  NATURE_ABILITIES,
  UNIVERSAL_ABILITIES
} from '../spells/spellAbilities'

// Import movement types (we'll use same as original game)
// For now, defining basic movement types inline
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
  cost: number // XP cost to purchase
  momentum?: typeof MOVEMENT[keyof typeof MOVEMENT]
  movement: (typeof MOVEMENT[keyof typeof MOVEMENT])[]
  xpGain: number
  ability?: any
  estimatedCost: number
  flavor: string
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'LEGENDARY'
}

let cardIdCounter = 1

function createNatureSpell(config: {
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
    id: `NAT${cardIdCounter++}`,
    name,
    school: 'NATURE',
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
// NATURE SPELL CARDS
// ========================================

export const NATURE_SPELLS: SpellCard[] = [
  // ===== ENTANGLE SPELLS ===== (Rooting enemies)
  createNatureSpell({
    name: 'Thornwhip',
    momentum: MOVEMENT.WILD,
    ability: (NATURE_ABILITIES.ENTANGLE as Function)(3),
    xpGain: 1,
    flavor: 'Vines spring from the earth to snare your foes.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Choking Vines',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (NATURE_ABILITIES.ENTANGLE as Function)(4),
    xpGain: 2,
    flavor: 'The forest itself reaches out to stop them.',
    rarity: 'RARE'
  }),

  createNatureSpell({
    name: 'Root Prison',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    ability: (NATURE_ABILITIES.ENTANGLE as Function)(2),
    xpGain: 1,
    flavor: 'Roots burst forth, creating an inescapable cage.',
    rarity: 'COMMON'
  }),

  // ===== BEAST COMPANION SPELLS ===== (Summoning)
  createNatureSpell({
    name: 'Call of the Wild',
    momentum: MOVEMENT.STRAIGHT,
    ability: (NATURE_ABILITIES.BEAST_COMPANION as Function)(2),
    xpGain: 1,
    flavor: 'A spectral beast answers your call.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Pack Hunter',
    momentum: MOVEMENT.WILD,
    ability: (NATURE_ABILITIES.BEAST_COMPANION as Function)(3),
    xpGain: 2,
    costModifier: -1,
    flavor: 'The pack runs with you, mirroring every move.',
    rarity: 'RARE'
  }),

  createNatureSpell({
    name: 'Spirit Wolf',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (NATURE_ABILITIES.BEAST_COMPANION as Function)(1),
    xpGain: 1,
    flavor: 'A ghostly wolf races alongside you.',
    rarity: 'COMMON'
  }),

  // ===== VERDANT GROWTH SPELLS ===== (Healing + Movement)
  createNatureSpell({
    name: 'Nature\'s Blessing',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: NATURE_ABILITIES.VERDANT_GROWTH as any,
    xpGain: 2,
    flavor: 'Life energy surges through you, wounds closing.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Rejuvenation',
    momentum: MOVEMENT.WILD,
    ability: NATURE_ABILITIES.VERDANT_GROWTH as any,
    xpGain: 2,
    flavor: 'Green light washes over you, restoring vitality.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Healing Burst',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    ability: NATURE_ABILITIES.VERDANT_GROWTH as any,
    xpGain: 1,
    flavor: 'A pulse of natural energy heals and invigorates.',
    rarity: 'COMMON'
  }),

  // ===== VINE GRAPPLE SPELLS ===== (Mobility)
  createNatureSpell({
    name: 'Vine Swing',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.WILD],
    ability: (NATURE_ABILITIES.VINE_GRAPPLE as Function)(4),
    xpGain: 1,
    flavor: 'Launch vines to swing across impossible distances.',
    rarity: 'RARE'
  }),

  createNatureSpell({
    name: 'Forest Leapvine',
    momentum: MOVEMENT.WILD,
    ability: (NATURE_ABILITIES.VINE_GRAPPLE as Function)(3),
    xpGain: 2,
    costModifier: -1,
    flavor: 'Vines pull you through the canopy like a primate.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Quick Grab',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (NATURE_ABILITIES.VINE_GRAPPLE as Function)(2),
    xpGain: 1,
    flavor: 'A vine snaps out, yanking you forward.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Quick Grab',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (NATURE_ABILITIES.VINE_GRAPPLE as Function)(2),
    xpGain: 1,
    flavor: 'A vine snaps out, yanking you forward.',
    rarity: 'COMMON'
  }),

  // ===== WILD SHAPE SPELLS ===== (Transformation)
  createNatureSpell({
    name: 'Shapeshift',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT],
    ability: NATURE_ABILITIES.WILD_SHAPE as any,
    xpGain: 2,
    flavor: 'Your mount shifts form, adapting to the moment.',
    rarity: 'RARE'
  }),

  createNatureSpell({
    name: 'Adaptive Form',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT_OR_LEFT],
    ability: NATURE_ABILITIES.WILD_SHAPE as any,
    xpGain: 1,
    flavor: 'Nature's gift: the power to become what's needed.',
    rarity: 'UNCOMMON'
  }),

  // ===== THORNWHIP SPELLS ===== (Pull enemies back)
  createNatureSpell({
    name: 'Thorn Lash',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (NATURE_ABILITIES.THORNWHIP as Function)(3),
    xpGain: 1,
    flavor: 'Thorny vines lash out, dragging foes backward.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Briar Snare',
    momentum: MOVEMENT.WILD,
    ability: (NATURE_ABILITIES.THORNWHIP as Function)(4),
    xpGain: 2,
    flavor: 'Briars ensnare and pull your target toward you.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Vine Drag',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    ability: (NATURE_ABILITIES.THORNWHIP as Function)(2),
    xpGain: 1,
    flavor: 'Vines wrap around your foe, yanking them back.',
    rarity: 'COMMON'
  }),

  // ===== REGROWTH SPELLS ===== (Deck recovery + Healing)
  createNatureSpell({
    name: 'Cycle of Life',
    momentum: MOVEMENT.STRAIGHT,
    ability: NATURE_ABILITIES.REGROWTH as any,
    xpGain: 2,
    flavor: 'Death feeds life; what was lost returns.',
    rarity: 'UNCOMMON'
  }),

  createNatureSpell({
    name: 'Renewal',
    momentum: MOVEMENT.WILD,
    ability: NATURE_ABILITIES.REGROWTH as any,
    xpGain: 2,
    costModifier: 1,
    flavor: 'The cycle turns, bringing back the fallen.',
    rarity: 'RARE'
  }),

  createNatureSpell({
    name: 'Forest Rebirth',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: NATURE_ABILITIES.REGROWTH as any,
    xpGain: 1,
    flavor: 'From decay springs new life.',
    rarity: 'UNCOMMON'
  }),

  // ===== PURE MOVEMENT SPELLS ===== (Nature-themed movement)
  createNatureSpell({
    name: 'Fleet of Foot',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT],
    xpGain: 2,
    flavor: 'Move with the grace of a deer through the forest.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Woodland Sprint',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'The forest blurs past as you race through trees.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Agile Turn',
    momentum: MOVEMENT.LEFT,
    movement: [MOVEMENT.LEFT],
    xpGain: 1,
    flavor: 'Nimble as a fox, you weave through obstacles.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Agile Turn',
    momentum: MOVEMENT.RIGHT,
    movement: [MOVEMENT.RIGHT],
    xpGain: 1,
    flavor: 'Nimble as a fox, you weave through obstacles.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Nature\'s Path',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    movement: [MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'The forest shows you the way.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Nature\'s Path',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'The forest shows you the way.',
    rarity: 'COMMON'
  }),

  createNatureSpell({
    name: 'Wild Dash',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.WILD],
    xpGain: 2,
    flavor: 'Unpredictable as nature itself.',
    rarity: 'UNCOMMON'
  }),

  // ===== COMBO SPELLS ===== (Universal abilities with nature flavor)
  createNatureSpell({
    name: 'Temporal Bloom',
    momentum: MOVEMENT.WILD,
    ability: UNIVERSAL_ABILITIES.HASTE as any,
    xpGain: 2,
    flavor: 'Time accelerates, flowers bloom and wither in seconds.',
    rarity: 'RARE'
  }),

  createNatureSpell({
    name: 'Dispelling Pollen',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: UNIVERSAL_ABILITIES.DISPEL_MAGIC as any,
    xpGain: 1,
    flavor: 'Pollen disperses, cleansing magic from the air.',
    rarity: 'UNCOMMON'
  }),
]

export default NATURE_SPELLS

// Export stats
export const NATURE_DECK_STATS = {
  totalCards: NATURE_SPELLS.length,
  school: 'NATURE',
  rarityBreakdown: {
    COMMON: NATURE_SPELLS.filter(s => s.rarity === 'COMMON').length,
    UNCOMMON: NATURE_SPELLS.filter(s => s.rarity === 'UNCOMMON').length,
    RARE: NATURE_SPELLS.filter(s => s.rarity === 'RARE').length,
    LEGENDARY: NATURE_SPELLS.filter(s => s.rarity === 'LEGENDARY').length,
  },
  averageCost: Math.round(
    NATURE_SPELLS.reduce((sum, s) => sum + s.cost, 0) / NATURE_SPELLS.length
  ),
  totalXP: NATURE_SPELLS.reduce((sum, s) => sum + s.xpGain, 0),
}
