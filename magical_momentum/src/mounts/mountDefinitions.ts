/**
 * MAGICAL MOMENTUM - Mount Definitions
 *
 * Defines all magical creatures that can be mounted for racing.
 * Each mount has unique passives, movement bonuses, and magic affinities.
 */

export type MountType = 'GROUND' | 'FLYING' | 'GROUND_FLYING' | 'PHASING' | 'TELEPORT'
export type MagicAffinity = 'NATURE' | 'FIRE' | 'ICE' | 'LIGHT' | 'SHADOW' | 'ARCANE' | 'STORM' | 'EARTH' | 'UNIVERSAL'

export interface MountPassiveAbility {
  name: string
  description: string
  effect: string // Mechanical effect description
  value: number // Equivalent cost value (for balance)
}

export interface MountDefinition {
  id: string
  name: string
  species: string
  type: MountType
  passive: MountPassiveAbility
  movementBonus: string
  affinity: MagicAffinity | MagicAffinity[]
  affinityEffect: string
  hp: number // Starting HP
  flavor: string
}

// ========================================
// 🐉 DRAGONS
// ========================================

export const EMBER_DRAGON: MountDefinition = {
  id: 'DRAGON_EMBER',
  name: 'Ember Dragon',
  species: 'DRAGON',
  type: 'FLYING',
  passive: {
    name: 'Fiery Wake',
    description: 'Leave burning trail that damages followers',
    effect: 'Mounts behind you take 1 damage per turn for 2 turns',
    value: 2.5
  },
  movementBonus: '+1 to STRAIGHT flying movement',
  affinity: 'FIRE',
  affinityEffect: 'Fire magic spells cost -1',
  hp: 8,
  flavor: 'Born from volcanic fury, its wings spread ash across the sky.'
}

export const FROST_WYRM: MountDefinition = {
  id: 'DRAGON_FROST',
  name: 'Frost Wyrm',
  species: 'DRAGON',
  type: 'FLYING',
  passive: {
    name: 'Icy Breath',
    description: 'Freeze obstacles in path',
    effect: 'Ignore 1 obstacle per turn by freezing it',
    value: 2.5
  },
  movementBonus: 'Immune to cold-based hazards',
  affinity: 'ICE',
  affinityEffect: 'Ice magic spells cost -1',
  hp: 8,
  flavor: 'Ancient wyrm of the frozen wastes, its breath turns air to ice.'
}

export const STORM_DRAGON: MountDefinition = {
  id: 'DRAGON_STORM',
  name: 'Storm Dragon',
  species: 'DRAGON',
  type: 'FLYING',
  passive: {
    name: 'Lightning Rider',
    description: 'Double movement on storm segments',
    effect: 'When on storm terrain, gain +2 movement',
    value: 2
  },
  movementBonus: '+1 altitude change per turn (free)',
  affinity: 'STORM',
  affinityEffect: 'Storm magic spells cost -1',
  hp: 7,
  flavor: 'Tempest incarnate, riding thunderheads between worlds.'
}

export const SHADOW_DRAGON: MountDefinition = {
  id: 'DRAGON_SHADOW',
  name: 'Shadow Dragon',
  species: 'DRAGON',
  type: 'PHASING',
  passive: {
    name: 'Shadowmeld',
    description: 'Phase through obstacles',
    effect: 'Once per lap, phase through any obstacle or mount',
    value: 3
  },
  movementBonus: 'Can move through other mounts',
  affinity: 'SHADOW',
  affinityEffect: 'Shadow magic spells cost -1',
  hp: 6,
  flavor: 'Dwelling between light and dark, it slips through reality itself.'
}

// ========================================
// 🦅 HIPPOGRIFFS
// ========================================

export const SILVERWIND_HIPPOGRIFF: MountDefinition = {
  id: 'HIPPOGRIFF_SILVER',
  name: 'Silverwind Hippogriff',
  species: 'HIPPOGRIFF',
  type: 'GROUND_FLYING',
  passive: {
    name: 'Noble Bearing',
    description: 'Immune to fear and curse effects',
    effect: 'Cannot be affected by FEAR or CURSE spells',
    value: 2
  },
  movementBonus: '+1 to diagonal movement (turns)',
  affinity: 'LIGHT',
  affinityEffect: 'Light magic spells cost -1',
  hp: 7,
  flavor: 'Proud and regal, it carries only the worthy.'
}

export const EARTHBOUND_HIPPOGRIFF: MountDefinition = {
  id: 'HIPPOGRIFF_EARTH',
  name: 'Earthbound Hippogriff',
  species: 'HIPPOGRIFF',
  type: 'GROUND_FLYING',
  passive: {
    name: 'Terrain Master',
    description: 'Ignore ground terrain penalties',
    effect: 'Rough terrain, mud, rocks have no movement penalty',
    value: 2.5
  },
  movementBonus: 'Can switch ground/flying freely each turn',
  affinity: 'NATURE',
  affinityEffect: 'Nature magic spells cost -1',
  hp: 8,
  flavor: 'Equally at home on land or air, master of all terrains.'
}

// ========================================
// 🐴 PEGASUS
// ========================================

export const SUNBURST_PEGASUS: MountDefinition = {
  id: 'PEGASUS_SUN',
  name: 'Sunburst Pegasus',
  species: 'PEGASUS',
  type: 'FLYING',
  passive: {
    name: "Dawn's Grace",
    description: 'Heal at start of each lap',
    effect: 'Heal 1 damage at the start of each lap',
    value: 2
  },
  movementBonus: '+1 speed when in first place',
  affinity: 'LIGHT',
  affinityEffect: 'Gain +1 XP from light spells',
  hp: 6,
  flavor: 'Radiant wings carry the light of dawn itself.'
}

export const MOONLIGHT_PEGASUS: MountDefinition = {
  id: 'PEGASUS_MOON',
  name: 'Moonlight Pegasus',
  species: 'PEGASUS',
  type: 'FLYING',
  passive: {
    name: 'Lunar Surge',
    description: 'Enhanced momentum at night',
    effect: 'Double momentum bonus during night/shadow terrain',
    value: 2.5
  },
  movementBonus: '+1 to all turning movement',
  affinity: 'ARCANE',
  affinityEffect: 'Arcane magic spells cost -1',
  hp: 6,
  flavor: 'Silver mane shimmers with moonlight and mystery.'
}

// ========================================
// 🦁 GRIFFINS
// ========================================

export const ROYAL_GRIFFIN: MountDefinition = {
  id: 'GRIFFIN_ROYAL',
  name: 'Royal Griffin',
  species: 'GRIFFIN',
  type: 'GROUND_FLYING',
  passive: {
    name: "Predator's Focus",
    description: 'Bonus movement when targeting opponents',
    effect: '+2 movement when using aggressive/targeting spells',
    value: 2.5
  },
  movementBonus: 'Grapple/Hook range +2 segments',
  affinity: ['FIRE', 'LIGHT'],
  affinityEffect: 'Red and White spells cost -1',
  hp: 7,
  flavor: 'King of the skies, fierce and majestic.'
}

export const STORMCLAW_GRIFFIN: MountDefinition = {
  id: 'GRIFFIN_STORM',
  name: 'Stormclaw Griffin',
  species: 'GRIFFIN',
  type: 'FLYING',
  passive: {
    name: 'Dive Attack',
    description: 'Descending grants bonus movement',
    effect: 'When descending altitude, gain +1 movement',
    value: 2
  },
  movementBonus: 'Free altitude change when using aggressive spells',
  affinity: ['STORM', 'FIRE'],
  affinityEffect: 'Storm and Fire spells cost -1',
  hp: 7,
  flavor: 'Lightning crackles along its talons as it dives.'
}

// ========================================
// 🔥 PHOENIX
// ========================================

export const ETERNAL_PHOENIX: MountDefinition = {
  id: 'PHOENIX_ETERNAL',
  name: 'Eternal Phoenix',
  species: 'PHOENIX',
  type: 'FLYING',
  passive: {
    name: 'Rebirth',
    description: 'Resurrect from elimination',
    effect: 'First elimination each race: resurrect at last checkpoint',
    value: 5
  },
  movementBonus: 'Immune to fire damage',
  affinity: 'FIRE',
  affinityEffect: 'Fire magic spells gain +1 power',
  hp: 5,
  flavor: 'Death is but a doorway for the eternal flame.'
}

export const FROST_PHOENIX: MountDefinition = {
  id: 'PHOENIX_FROST',
  name: 'Frost Phoenix',
  species: 'PHOENIX',
  type: 'FLYING',
  passive: {
    name: 'Frozen Rebirth',
    description: 'Sacrifice movement to heal',
    effect: 'Can sacrifice 2 movement to heal 2 damage',
    value: 2.5
  },
  movementBonus: 'Immune to ice damage',
  affinity: 'ICE',
  affinityEffect: 'Ice magic spells gain +1 power',
  hp: 5,
  flavor: 'Reborn from winter\'s heart, frozen yet alive.'
}

// ========================================
// 🐉 WYVERNS
// ========================================

export const POISON_WYVERN: MountDefinition = {
  id: 'WYVERN_POISON',
  name: 'Poison Wyvern',
  species: 'WYVERN',
  type: 'FLYING',
  passive: {
    name: 'Venom Spit',
    description: 'Damage followers continuously',
    effect: 'Mounts directly behind you take 1 damage per turn',
    value: 2.5
  },
  movementBonus: '+1 ground movement',
  affinity: ['SHADOW', 'NATURE'],
  affinityEffect: 'Shadow and Nature spells cost -1',
  hp: 7,
  flavor: 'Its tail drips with toxins that scar the earth.'
}

export const THUNDER_WYVERN: MountDefinition = {
  id: 'WYVERN_THUNDER',
  name: 'Thunder Wyvern',
  species: 'WYVERN',
  type: 'FLYING',
  passive: {
    name: 'Storm Caller',
    description: 'Create lightning hazards',
    effect: 'Leave lightning hazards behind (1 damage when triggered)',
    value: 2.5
  },
  movementBonus: '+1 speed in storm terrain',
  affinity: 'STORM',
  affinityEffect: 'Storm magic spells cost -1',
  hp: 6,
  flavor: 'Thunder follows in its wake like a loyal hound.'
}

// ========================================
// 🦄 UNICORNS
// ========================================

export const CRYSTAL_UNICORN: MountDefinition = {
  id: 'UNICORN_CRYSTAL',
  name: 'Crystal Unicorn',
  species: 'UNICORN',
  type: 'GROUND',
  passive: {
    name: 'Purifying Aura',
    description: 'Remove debuffs automatically',
    effect: 'Remove 1 curse/debuff each turn automatically',
    value: 3
  },
  movementBonus: '+2 to STRAIGHT ground movement',
  affinity: 'LIGHT',
  affinityEffect: 'Healing spells gain +2 power',
  hp: 6,
  flavor: 'Its crystalline horn purifies all it touches.'
}

export const NIGHTMARE_UNICORN: MountDefinition = {
  id: 'UNICORN_NIGHTMARE',
  name: 'Nightmare Unicorn',
  species: 'UNICORN',
  type: 'PHASING',
  passive: {
    name: 'Fear Aura',
    description: 'Slow adjacent opponents',
    effect: 'Adjacent mounts have -1 movement',
    value: 2.5
  },
  movementBonus: 'Can phase through 1 obstacle per turn',
  affinity: 'SHADOW',
  affinityEffect: 'Shadow magic spells cost -1',
  hp: 6,
  flavor: 'Corrupted by darkness, a twisted reflection of purity.'
}

// ========================================
// 🦂 MANTICORES
// ========================================

export const SCORPION_MANTICORE: MountDefinition = {
  id: 'MANTICORE_SCORPION',
  name: 'Scorpion Manticore',
  species: 'MANTICORE',
  type: 'GROUND_FLYING',
  passive: {
    name: 'Tail Spike',
    description: 'Long-range attacks',
    effect: 'Can attack opponents up to 3 segments away (1 damage)',
    value: 2
  },
  movementBonus: '+1 to aggressive spell range',
  affinity: ['FIRE', 'SHADOW'],
  affinityEffect: 'Fire and Shadow spells cost -1',
  hp: 8,
  flavor: 'A chimeric horror, deadly from any distance.'
}

// ========================================
// ⚡ THUNDERBIRDS
// ========================================

export const AZURE_THUNDERBIRD: MountDefinition = {
  id: 'THUNDERBIRD_AZURE',
  name: 'Azure Thunderbird',
  species: 'THUNDERBIRD',
  type: 'FLYING',
  passive: {
    name: 'Call Lightning',
    description: 'Generate storm clouds',
    effect: 'Create storm clouds that boost your speed (+2 movement)',
    value: 3
  },
  movementBonus: '+2 movement during storms',
  affinity: 'STORM',
  affinityEffect: 'Storm magic spells gain +2 power',
  hp: 6,
  flavor: 'Lightning dances between its feathers.'
}

// ========================================
// 🔥❄️⚡ CHIMERA
// ========================================

export const TRI_ELEMENT_CHIMERA: MountDefinition = {
  id: 'CHIMERA_TRI',
  name: 'Tri-Element Chimera',
  species: 'CHIMERA',
  type: 'GROUND_FLYING',
  passive: {
    name: 'Elemental Shift',
    description: 'Choose element each turn',
    effect: 'Choose fire/ice/lightning element each turn (gain immunity)',
    value: 3.5
  },
  movementBonus: 'Adapt to any elemental hazard',
  affinity: ['FIRE', 'ICE', 'STORM'],
  affinityEffect: 'Can use any 2 magic colors at -1 cost',
  hp: 9,
  flavor: 'Three heads, three elements, infinite possibilities.'
}

// ========================================
// 🦅 ROCS
// ========================================

export const GIANT_ROC: MountDefinition = {
  id: 'ROC_GIANT',
  name: 'Giant Roc',
  species: 'ROC',
  type: 'FLYING',
  passive: {
    name: 'Massive Wings',
    description: 'Ascending grants huge bonus',
    effect: 'When ascending, gain +2 movement',
    value: 2.5
  },
  movementBonus: 'Can carry/push other mounts',
  affinity: 'UNIVERSAL',
  affinityEffect: 'Neutral to all magic schools',
  hp: 10,
  flavor: 'So massive its shadow darkens entire valleys.'
}

// ========================================
// 🐍 SKY SERPENTS
// ========================================

export const JADE_SKY_SERPENT: MountDefinition = {
  id: 'SERPENT_JADE',
  name: 'Jade Sky Serpent',
  species: 'SKY_SERPENT',
  type: 'FLYING',
  passive: {
    name: 'Serpentine Dodge',
    description: 'Ignore hazards',
    effect: 'Ignore first hazard each turn',
    value: 2
  },
  movementBonus: '+1 to all turning movement',
  affinity: ['NATURE', 'ARCANE'],
  affinityEffect: 'Nature and Arcane spells cost -1',
  hp: 5,
  flavor: 'Sinuous and graceful, it flows through the air like water.'
}

// ========================================
// 🌑 NIGHTMARE STEEDS
// ========================================

export const ABYSSAL_NIGHTMARE: MountDefinition = {
  id: 'NIGHTMARE_ABYSSAL',
  name: 'Abyssal Nightmare',
  species: 'NIGHTMARE_STEED',
  type: 'GROUND',
  passive: {
    name: 'Shadow Step',
    description: 'Teleport through darkness',
    effect: 'Teleport 2 segments once per lap (shadow terrain only)',
    value: 3
  },
  movementBonus: '+3 ground speed in darkness',
  affinity: 'SHADOW',
  affinityEffect: 'Shadow magic spells gain +2 power',
  hp: 7,
  flavor: 'Hooves of shadow leave no prints on reality.'
}

// ========================================
// MOUNT COLLECTIONS
// ========================================

export const ALL_MOUNTS: MountDefinition[] = [
  // Dragons
  EMBER_DRAGON,
  FROST_WYRM,
  STORM_DRAGON,
  SHADOW_DRAGON,

  // Hippogriffs
  SILVERWIND_HIPPOGRIFF,
  EARTHBOUND_HIPPOGRIFF,

  // Pegasus
  SUNBURST_PEGASUS,
  MOONLIGHT_PEGASUS,

  // Griffins
  ROYAL_GRIFFIN,
  STORMCLAW_GRIFFIN,

  // Phoenix
  ETERNAL_PHOENIX,
  FROST_PHOENIX,

  // Wyverns
  POISON_WYVERN,
  THUNDER_WYVERN,

  // Unicorns
  CRYSTAL_UNICORN,
  NIGHTMARE_UNICORN,

  // Others
  SCORPION_MANTICORE,
  AZURE_THUNDERBIRD,
  TRI_ELEMENT_CHIMERA,
  GIANT_ROC,
  JADE_SKY_SERPENT,
  ABYSSAL_NIGHTMARE,
]

export const MOUNTS_BY_TYPE = {
  GROUND: ALL_MOUNTS.filter(m => m.type === 'GROUND'),
  FLYING: ALL_MOUNTS.filter(m => m.type === 'FLYING'),
  GROUND_FLYING: ALL_MOUNTS.filter(m => m.type === 'GROUND_FLYING'),
  PHASING: ALL_MOUNTS.filter(m => m.type === 'PHASING'),
}

export const MOUNTS_BY_AFFINITY = {
  NATURE: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('NATURE') : m.affinity === 'NATURE'),
  FIRE: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('FIRE') : m.affinity === 'FIRE'),
  ICE: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('ICE') : m.affinity === 'ICE'),
  LIGHT: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('LIGHT') : m.affinity === 'LIGHT'),
  SHADOW: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('SHADOW') : m.affinity === 'SHADOW'),
  ARCANE: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('ARCANE') : m.affinity === 'ARCANE'),
  STORM: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('STORM') : m.affinity === 'STORM'),
  EARTH: ALL_MOUNTS.filter(m => Array.isArray(m.affinity) ? m.affinity.includes('EARTH') : m.affinity === 'EARTH'),
}

export default ALL_MOUNTS
