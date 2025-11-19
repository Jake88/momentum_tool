/**
 * MAGICAL MOMENTUM - Fire & Chaos Magic Spell Cards (Red School)
 *
 * Fire magic focuses on destruction, speed, randomness, aggression,
 * burning hazards, and explosive movement.
 */

import {
  FIRE_ABILITIES,
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

function createFireSpell(config: {
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
    id: `FIRE${cardIdCounter++}`,
    name,
    school: 'FIRE',
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
// FIRE & CHAOS SPELL CARDS
// ========================================

export const FIRE_SPELLS: SpellCard[] = [
  // ===== FIREBALL SPELLS ===== (Direct Damage)
  createFireSpell({
    name: 'Fireball',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: (FIRE_ABILITIES.FIREBALL as Function)(4),
    xpGain: 1,
    flavor: 'A roaring sphere of flame streaks toward your target.',
    rarity: 'COMMON'
  }),

  createFireSpell({
    name: 'Greater Fireball',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT],
    ability: (FIRE_ABILITIES.FIREBALL as Function)(5),
    xpGain: 2,
    flavor: 'An inferno compressed into a single devastating projectile.',
    rarity: 'RARE'
  }),

  createFireSpell({
    name: 'Quick Blast',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    ability: (FIRE_ABILITIES.FIREBALL as Function)(3),
    xpGain: 1,
    flavor: 'A hasty burst of flame, less powerful but quick.',
    rarity: 'COMMON'
  }),

  createFireSpell({
    name: 'Quick Blast',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    ability: (FIRE_ABILITIES.FIREBALL as Function)(3),
    xpGain: 1,
    flavor: 'A hasty burst of flame, less powerful but quick.',
    rarity: 'COMMON'
  }),

  // ===== CHAOS BOLT SPELLS ===== (Random Teleportation)
  createFireSpell({
    name: 'Chaos Blink',
    momentum: MOVEMENT.WILD,
    ability: FIRE_ABILITIES.CHAOS_BOLT as any,
    xpGain: 2,
    costModifier: -1,
    flavor: 'Reality bends... but in which direction?',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Wild Warp',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.CHAOS_BOLT as any,
    xpGain: 2,
    flavor: 'Chaos magic tears open a rift to... somewhere.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Unstable Portal',
    momentum: MOVEMENT.STRAIGHT,
    ability: FIRE_ABILITIES.CHAOS_BOLT as any,
    xpGain: 1,
    flavor: 'Step through and hope for the best.',
    rarity: 'COMMON'
  }),

  // ===== INFERNO TRAIL SPELLS ===== (Area Denial)
  createFireSpell({
    name: 'Trail of Fire',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.INFERNO_TRAIL as any,
    xpGain: 2,
    flavor: 'Flames follow in your wake, punishing pursuers.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Burning Path',
    momentum: MOVEMENT.WILD,
    ability: FIRE_ABILITIES.INFERNO_TRAIL as any,
    xpGain: 2,
    flavor: 'The track behind you erupts in flames.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Scorch Mark',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.INFERNO_TRAIL as any,
    xpGain: 1,
    flavor: 'Leave a smoldering trail of destruction.',
    rarity: 'COMMON'
  }),

  // ===== BLAZING SPEED SPELLS ===== (Speed with Self-Damage)
  createFireSpell({
    name: 'Blazing Rush',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.BLAZING_SPEED as any,
    xpGain: 2,
    flavor: 'Speed at the cost of pain.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Reckless Dash',
    momentum: MOVEMENT.WILD,
    ability: FIRE_ABILITIES.BLAZING_SPEED as any,
    xpGain: 2,
    costModifier: -1,
    flavor: 'Burn yourself to ash if it means victory.',
    rarity: 'RARE'
  }),

  createFireSpell({
    name: 'Flame Sprint',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.BLAZING_SPEED as any,
    xpGain: 1,
    flavor: 'Your mount\'s hooves leave trails of fire.',
    rarity: 'COMMON'
  }),

  // ===== METEOR STRIKE SPELLS ===== (AOE Damage)
  createFireSpell({
    name: 'Meteor Swarm',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.WILD],
    ability: FIRE_ABILITIES.METEOR_STRIKE as any,
    xpGain: 3,
    flavor: 'The sky rains destruction upon all.',
    rarity: 'LEGENDARY'
  }),

  createFireSpell({
    name: 'Falling Star',
    momentum: MOVEMENT.WILD,
    ability: FIRE_ABILITIES.METEOR_STRIKE as any,
    xpGain: 2,
    flavor: 'When all must burn, call down the stars.',
    rarity: 'RARE'
  }),

  // ===== WILDFIRE SPELLS ===== (One-Time Power Spike)
  createFireSpell({
    name: 'Wildfire Surge',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.WILDFIRE as any,
    xpGain: 1,
    costModifier: -1,
    flavor: 'Consume everything in a final blaze.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Combustion',
    momentum: MOVEMENT.WILD,
    ability: FIRE_ABILITIES.WILDFIRE as any,
    xpGain: 2,
    costModifier: -1,
    flavor: 'Explode forward, leaving ash in your wake.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Flash Fire',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.WILDFIRE as any,
    xpGain: 1,
    costModifier: -2,
    flavor: 'A brief inferno, then nothing but cinders.',
    rarity: 'COMMON'
  }),

  // ===== EXPLOSIVE RUNE SPELLS ===== (Traps)
  createFireSpell({
    name: 'Exploding Rune',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: FIRE_ABILITIES.EXPLOSIVE_RUNE as any,
    xpGain: 1,
    flavor: 'Plant a trap of pure fire.',
    rarity: 'COMMON'
  }),

  createFireSpell({
    name: 'Fire Trap',
    momentum: MOVEMENT.WILD,
    ability: FIRE_ABILITIES.EXPLOSIVE_RUNE as any,
    xpGain: 2,
    flavor: 'A hidden explosive waiting for its victim.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Burning Glyph',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    ability: FIRE_ABILITIES.EXPLOSIVE_RUNE as any,
    xpGain: 1,
    flavor: 'Inscribe destruction into the track itself.',
    rarity: 'COMMON'
  }),

  // ===== PURE MOVEMENT SPELLS ===== (Fire-themed speed)
  createFireSpell({
    name: 'Flame Acceleration',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    xpGain: 2,
    flavor: 'Fire propels you forward with explosive force.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Rocket Boost',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'Flames erupt from your mount like a rocket.',
    rarity: 'COMMON'
  }),

  createFireSpell({
    name: 'Scorching Turn',
    momentum: MOVEMENT.LEFT,
    movement: [MOVEMENT.LEFT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'Bank hard, leaving flames in your turn.',
    rarity: 'COMMON'
  }),

  createFireSpell({
    name: 'Scorching Turn',
    momentum: MOVEMENT.RIGHT,
    movement: [MOVEMENT.RIGHT, MOVEMENT.STRAIGHT],
    xpGain: 1,
    flavor: 'Bank hard, leaving flames in your turn.',
    rarity: 'COMMON'
  }),

  createFireSpell({
    name: 'Burning Maneuver',
    momentum: MOVEMENT.STRAIGHT_OR_LEFT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.LEFT],
    xpGain: 2,
    flavor: 'Fire guides your path.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Burning Maneuver',
    momentum: MOVEMENT.STRAIGHT_OR_RIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.RIGHT],
    xpGain: 2,
    flavor: 'Fire guides your path.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Chaotic Dash',
    momentum: MOVEMENT.LEFT_OR_RIGHT,
    movement: [MOVEMENT.WILD],
    xpGain: 2,
    flavor: 'Unpredictable as wildfire.',
    rarity: 'UNCOMMON'
  }),

  // ===== COMBO SPELLS ===== (Universal abilities with fire flavor)
  createFireSpell({
    name: 'Pyroclasm',
    momentum: MOVEMENT.WILD,
    movement: [MOVEMENT.STRAIGHT],
    ability: UNIVERSAL_ABILITIES.HASTE as any,
    xpGain: 2,
    flavor: 'Volcanic fury doubles your momentum.',
    rarity: 'RARE'
  }),

  createFireSpell({
    name: 'Smoke Screen',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT],
    ability: UNIVERSAL_ABILITIES.DISPEL_MAGIC as any,
    xpGain: 1,
    flavor: 'Thick smoke disrupts all magic.',
    rarity: 'UNCOMMON'
  }),

  createFireSpell({
    name: 'Immolation',
    momentum: MOVEMENT.STRAIGHT,
    movement: [MOVEMENT.STRAIGHT, MOVEMENT.STRAIGHT],
    ability: UNIVERSAL_ABILITIES.ETHEREAL_FORM as any,
    xpGain: 2,
    flavor: 'Become living fire, passing through all obstacles.',
    rarity: 'RARE'
  }),
]

export default FIRE_SPELLS

export const FIRE_DECK_STATS = {
  totalCards: FIRE_SPELLS.length,
  school: 'FIRE',
  rarityBreakdown: {
    COMMON: FIRE_SPELLS.filter(s => s.rarity === 'COMMON').length,
    UNCOMMON: FIRE_SPELLS.filter(s => s.rarity === 'UNCOMMON').length,
    RARE: FIRE_SPELLS.filter(s => s.rarity === 'RARE').length,
    LEGENDARY: FIRE_SPELLS.filter(s => s.rarity === 'LEGENDARY').length,
  },
  averageCost: Math.round(
    FIRE_SPELLS.reduce((sum, s) => sum + s.cost, 0) / FIRE_SPELLS.length
  ),
  totalXP: FIRE_SPELLS.reduce((sum, s) => sum + s.xpGain, 0),
}
