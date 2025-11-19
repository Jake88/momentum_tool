/**
 * MAGICAL MOMENTUM - Wizard Definitions
 *
 * Defines all wizard types, their magic schools, and rider abilities.
 * Wizards determine which spell decks are available in a race.
 */

import { MagicAffinity } from '../mounts/mountDefinitions'

export interface WizardAbility {
  name: string
  description: string
  effect: string
  cooldown: 'ONCE_PER_LAP' | 'ONCE_PER_RACE' | 'ALWAYS_ACTIVE' | 'CHARGES'
  value: number // Equivalent cost value
}

export interface WizardDefinition {
  id: string
  name: string
  title: string
  school: MagicAffinity
  color: string // Hex color for UI
  riderAbility: WizardAbility
  deckBonus: string // Bonus applied to school's deck
  playstyle: string
  deckSize: number // Number of spells in their school deck
  flavor: string
}

// ========================================
// 🌿 GREEN WIZARD - Nature Magic
// ========================================

export const GREEN_WIZARD: WizardDefinition = {
  id: 'WIZARD_GREEN',
  name: 'Verdant Sage',
  title: 'Master of the Living World',
  school: 'NATURE',
  color: '#2d5016',
  riderAbility: {
    name: 'Living Terrain',
    description: 'Create vine bridge over hazard or gap',
    effect: 'Once per lap, create a safe passage over any hazard or gap',
    cooldown: 'ONCE_PER_LAP',
    value: 4
  },
  deckBonus: 'All Nature spells gain +1 XP generation',
  playstyle: 'Terrain control, healing, momentum manipulation',
  deckSize: 30,
  flavor: 'The forest bends to their will, paths appear where none existed.'
}

// ========================================
// 🔥 RED WIZARD - Fire & Chaos Magic
// ========================================

export const RED_WIZARD: WizardDefinition = {
  id: 'WIZARD_RED',
  name: 'Pyromancer',
  title: 'Herald of Destruction',
  school: 'FIRE',
  color: '#8b0000',
  riderAbility: {
    name: 'Wildfire Rush',
    description: 'Burst of speed leaving burning trail',
    effect: 'Once per lap, gain +3 movement but leave burning trail behind (1 damage)',
    cooldown: 'ONCE_PER_LAP',
    value: 4
  },
  deckBonus: 'All Fire spells gain +1 power',
  playstyle: 'Aggressive, high-risk/high-reward, speed spikes',
  deckSize: 30,
  flavor: 'They race like wildfire, consuming all in their path.'
}

// ========================================
// ❄️ BLUE WIZARD - Water & Ice Magic
// ========================================

export const BLUE_WIZARD: WizardDefinition = {
  id: 'WIZARD_BLUE',
  name: 'Frost Mage',
  title: 'Sovereign of Winter',
  school: 'ICE',
  color: '#0047ab',
  riderAbility: {
    name: 'Frozen Time',
    description: 'Freeze opponent in place',
    effect: 'Once per lap, freeze target opponent (they skip next turn)',
    cooldown: 'ONCE_PER_LAP',
    value: 5
  },
  deckBonus: 'Ice spells can slow multiple targets',
  playstyle: 'Control, slowing opponents, defensive',
  deckSize: 30,
  flavor: 'Time itself freezes at their command.'
}

// ========================================
// ✨ WHITE WIZARD - Light & Holy Magic
// ========================================

export const WHITE_WIZARD: WizardDefinition = {
  id: 'WIZARD_WHITE',
  name: 'Radiant Cleric',
  title: 'Champion of the Dawn',
  school: 'LIGHT',
  color: '#f0e68c',
  riderAbility: {
    name: 'Divine Protection',
    description: 'Immune to first negative effect',
    effect: 'Immune to first negative effect (curse, damage, debuff) each lap',
    cooldown: 'ONCE_PER_LAP',
    value: 3
  },
  deckBonus: 'Light spells grant temporary SHIELD tokens',
  playstyle: 'Defensive, healing, protection, sustain',
  deckSize: 30,
  flavor: 'Blessed by light, darkness cannot touch them.'
}

// ========================================
// 🌑 BLACK WIZARD - Shadow & Necromancy
// ========================================

export const BLACK_WIZARD: WizardDefinition = {
  id: 'WIZARD_BLACK',
  name: 'Shadowmancer',
  title: 'Walker of the Dark Path',
  school: 'SHADOW',
  color: '#1a1a1a',
  riderAbility: {
    name: 'Life Drain',
    description: 'Damaging opponents heals you',
    effect: 'When your spells damage opponents, heal equal damage',
    cooldown: 'ALWAYS_ACTIVE',
    value: 4
  },
  deckBonus: 'Shadow spells gain +1 range',
  playstyle: 'Curses, life drain, attrition, teleportation',
  deckSize: 30,
  flavor: 'They feed on the suffering of their rivals.'
}

// ========================================
// 🔮 PURPLE WIZARD - Arcane & Illusion
// ========================================

export const PURPLE_WIZARD: WizardDefinition = {
  id: 'WIZARD_PURPLE',
  name: 'Illusionist',
  title: 'Master of Impossible Realities',
  school: 'ARCANE',
  color: '#9370db',
  riderAbility: {
    name: 'Mirror Image',
    description: 'Create illusory copy',
    effect: 'Create illusion that can take 1 hit for you (resets each lap)',
    cooldown: 'ONCE_PER_LAP',
    value: 2.5
  },
  deckBonus: 'Arcane spells can target any opponent (ignore range)',
  playstyle: 'Teleportation, spell copying, unpredictable',
  deckSize: 30,
  flavor: 'Reality bends around them, truth becomes suggestion.'
}

// ========================================
// ⚡ YELLOW WIZARD - Lightning & Storm
// ========================================

export const YELLOW_WIZARD: WizardDefinition = {
  id: 'WIZARD_YELLOW',
  name: 'Stormcaller',
  title: 'Voice of Thunder',
  school: 'STORM',
  color: '#ffd700',
  riderAbility: {
    name: 'Thunderbolt',
    description: 'Lightning strike for damage and stun',
    effect: 'Once per lap, strike target with lightning (2 damage, stun 1 turn)',
    cooldown: 'ONCE_PER_LAP',
    value: 4.5
  },
  deckBonus: 'Storm spells gain +1 movement',
  playstyle: 'Speed, multi-target damage, weather control',
  deckSize: 30,
  flavor: 'The storm answers their call, lightning their loyal hound.'
}

// ========================================
// 🪨 BROWN WIZARD - Earth & Crystal
// ========================================

export const BROWN_WIZARD: WizardDefinition = {
  id: 'WIZARD_BROWN',
  name: 'Geomancer',
  title: 'Guardian of Stone',
  school: 'EARTH',
  color: '#8b4513',
  riderAbility: {
    name: 'Stone Skin',
    description: 'Reduce all damage',
    effect: 'Take 50% less damage from all sources (always active)',
    cooldown: 'ALWAYS_ACTIVE',
    value: 4
  },
  deckBonus: 'Earth spells create persistent obstacles',
  playstyle: 'Extreme durability, obstacle creation, defensive',
  deckSize: 30,
  flavor: 'Immovable as mountains, enduring as stone.'
}

// ========================================
// WIZARD COLLECTIONS
// ========================================

export const ALL_WIZARDS: WizardDefinition[] = [
  GREEN_WIZARD,
  RED_WIZARD,
  BLUE_WIZARD,
  WHITE_WIZARD,
  BLACK_WIZARD,
  PURPLE_WIZARD,
  YELLOW_WIZARD,
  BROWN_WIZARD,
]

export const WIZARDS_BY_SCHOOL: Record<MagicAffinity, WizardDefinition | undefined> = {
  NATURE: GREEN_WIZARD,
  FIRE: RED_WIZARD,
  ICE: BLUE_WIZARD,
  LIGHT: WHITE_WIZARD,
  SHADOW: BLACK_WIZARD,
  ARCANE: PURPLE_WIZARD,
  STORM: YELLOW_WIZARD,
  EARTH: BROWN_WIZARD,
  UNIVERSAL: undefined,
}

// ========================================
// DECK CONSTRUCTION SYSTEM
// ========================================

export interface RaceConfiguration {
  selectedWizards: WizardDefinition[]
  randomDeckOption: 'NONE' | 'NEUTRAL' | 'RANDOM_SCHOOL' | 'PLAYER_CHOICE'
  startingSpells: number // How many starter spells each player gets
  deckBuildingVariant: 'SHARED_MARKETPLACE' | 'DRAFT' | 'STARTER_SPLIT'
}

export function createRaceDeck(config: RaceConfiguration): {
  totalCards: number
  schoolDistribution: Record<string, number>
  description: string
} {
  const schoolCounts: Record<string, number> = {}

  // Count spells from selected wizards
  config.selectedWizards.forEach(wizard => {
    schoolCounts[wizard.school] = wizard.deckSize
  })

  let totalCards = config.selectedWizards.reduce((sum, w) => sum + w.deckSize, 0)

  // Add random deck if configured
  if (config.randomDeckOption === 'NEUTRAL') {
    schoolCounts['NEUTRAL'] = 20
    totalCards += 20
  } else if (config.randomDeckOption === 'RANDOM_SCHOOL') {
    // Would add a random school deck
    schoolCounts['RANDOM'] = 30
    totalCards += 30
  }

  const wizardNames = config.selectedWizards.map(w => w.name).join(' & ')
  const description = `Race Deck: ${wizardNames} (${totalCards} total spells)`

  return {
    totalCards,
    schoolDistribution: schoolCounts,
    description
  }
}

// ========================================
// EXAMPLE RACE CONFIGURATIONS
// ========================================

export const EXAMPLE_2_PLAYER_RACE: RaceConfiguration = {
  selectedWizards: [GREEN_WIZARD, RED_WIZARD],
  randomDeckOption: 'NEUTRAL',
  startingSpells: 10,
  deckBuildingVariant: 'SHARED_MARKETPLACE'
}

export const EXAMPLE_3_PLAYER_RACE: RaceConfiguration = {
  selectedWizards: [GREEN_WIZARD, RED_WIZARD, BLUE_WIZARD],
  randomDeckOption: 'NONE',
  startingSpells: 10,
  deckBuildingVariant: 'SHARED_MARKETPLACE'
}

export const EXAMPLE_DRAFT_RACE: RaceConfiguration = {
  selectedWizards: [WHITE_WIZARD, BLACK_WIZARD],
  randomDeckOption: 'PLAYER_CHOICE',
  startingSpells: 5,
  deckBuildingVariant: 'DRAFT'
}

// ========================================
// WIZARD SYNERGIES
// ========================================

export interface WizardSynergy {
  wizard1: WizardDefinition
  wizard2: WizardDefinition
  synergyName: string
  description: string
  thematicBonus?: string
}

export const WIZARD_SYNERGIES: WizardSynergy[] = [
  {
    wizard1: GREEN_WIZARD,
    wizard2: BLUE_WIZARD,
    synergyName: 'Primal Elements',
    description: 'Nature and Water combine for growth control',
    thematicBonus: 'Ice/Vine combo spells cost -1'
  },
  {
    wizard1: RED_WIZARD,
    wizard2: YELLOW_WIZARD,
    synergyName: 'Elemental Fury',
    description: 'Fire and Lightning create devastating combos',
    thematicBonus: 'Damage spells deal +1 damage'
  },
  {
    wizard1: WHITE_WIZARD,
    wizard2: BLACK_WIZARD,
    synergyName: 'Eternal Conflict',
    description: 'Light and Shadow create balance/chaos',
    thematicBonus: 'All spells gain +1 XP but cost +1'
  },
  {
    wizard1: PURPLE_WIZARD,
    wizard2: BLACK_WIZARD,
    synergyName: 'Dark Mysteries',
    description: 'Illusion and Shadow for ultimate deception',
    thematicBonus: 'Teleport and Phase spells cost -1'
  },
  {
    wizard1: BROWN_WIZARD,
    wizard2: GREEN_WIZARD,
    synergyName: 'Forces of Nature',
    description: 'Earth and Nature create unstoppable terrain',
    thematicBonus: 'Obstacle spells are permanent'
  },
]

// ========================================
// WIZARD RIVALRIES
// ========================================

export interface WizardRivalry {
  wizard1: WizardDefinition
  wizard2: WizardDefinition
  rivalryName: string
  description: string
  mechanicEffect?: string
}

export const WIZARD_RIVALRIES: WizardRivalry[] = [
  {
    wizard1: RED_WIZARD,
    wizard2: BLUE_WIZARD,
    rivalryName: 'Fire vs Ice',
    description: 'Ancient elemental opposition',
    mechanicEffect: 'Fire spells melt ice obstacles, Ice spells extinguish fire hazards'
  },
  {
    wizard1: WHITE_WIZARD,
    wizard2: BLACK_WIZARD,
    rivalryName: 'Light vs Shadow',
    description: 'Eternal struggle between light and dark',
    mechanicEffect: 'Light spells deal double damage to shadow mounts, Shadow spells ignore light shields'
  },
  {
    wizard1: GREEN_WIZARD,
    wizard2: RED_WIZARD,
    rivalryName: 'Growth vs Destruction',
    description: 'Creation battles annihilation',
    mechanicEffect: 'Fire spells burn nature obstacles, Nature spells can smother fires'
  },
  {
    wizard1: BROWN_WIZARD,
    wizard2: YELLOW_WIZARD,
    rivalryName: 'Stone vs Storm',
    description: 'Immovable meets unstoppable',
    mechanicEffect: 'Lightning can shatter stone, Stone walls block wind'
  },
]

export default ALL_WIZARDS
