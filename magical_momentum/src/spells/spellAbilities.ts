/**
 * MAGICAL MOMENTUM - Spell Abilities
 *
 * This file defines all magical spell abilities for the Magical Momentum game.
 * Each ability has a description and a VALUE used for cost calculation.
 */

export interface SpellAbility {
  DESC: string
  VALUE: number
  SCHOOL?: string // Which magic school this belongs to
}

export interface SpellAbilityFunction {
  (x?: number): SpellAbility
}

// ========================================
// 🌿 NATURE MAGIC ABILITIES (Green School)
// ========================================

export const NATURE_ABILITIES = {
  ENTANGLE: (x: number = 3): SpellAbility => ({
    DESC: `ENTANGLE a mount within ${x} segment${x > 1 ? 's' : ''} (skip their next turn).`,
    VALUE: 4,
    SCHOOL: 'NATURE'
  }),

  BEAST_COMPANION: (x: number = 2): SpellAbility => ({
    DESC: `Summon a BEAST COMPANION that copies your movement for ${x} turn${x > 1 ? 's' : ''}.`,
    VALUE: 3,
    SCHOOL: 'NATURE'
  }),

  VERDANT_GROWTH: {
    DESC: `VERDANT GROWTH: Heal 2 damage and gain +1 movement this turn.`,
    VALUE: 3,
    SCHOOL: 'NATURE'
  } as SpellAbility,

  VINE_GRAPPLE: (x: number = 4): SpellAbility => ({
    DESC: `VINE GRAPPLE to any point within ${x} segment${x > 1 ? 's' : ''}.`,
    VALUE: 4,
    SCHOOL: 'NATURE'
  }),

  WILD_SHAPE: {
    DESC: `WILD SHAPE: Transform into different creature type for 1 turn.`,
    VALUE: 3.5,
    SCHOOL: 'NATURE'
  } as SpellAbility,

  THORNWHIP: (x: number = 3): SpellAbility => ({
    DESC: `THORNWHIP pulls target within ${x} segments back 2 spaces.`,
    VALUE: 3,
    SCHOOL: 'NATURE'
  }),

  REGROWTH: {
    DESC: `REGROWTH: Return 1 forgotten spell to deck and heal 1 damage.`,
    VALUE: 3,
    SCHOOL: 'NATURE'
  } as SpellAbility,
}

// ========================================
// 🔥 FIRE/CHAOS MAGIC ABILITIES (Red School)
// ========================================

export const FIRE_ABILITIES = {
  FIREBALL: (x: number = 4): SpellAbility => ({
    DESC: `FIREBALL: Deal 2 damage to target within ${x} segment${x > 1 ? 's' : ''}.`,
    VALUE: 3,
    SCHOOL: 'FIRE'
  }),

  CHAOS_BOLT: {
    DESC: `CHAOS BOLT: Teleport 1d6 segments in random direction.`,
    VALUE: 2.5,
    SCHOOL: 'FIRE'
  } as SpellAbility,

  INFERNO_TRAIL: {
    DESC: `INFERNO TRAIL: Leave burning path (1 damage to followers for 3 turns).`,
    VALUE: 3,
    SCHOOL: 'FIRE'
  } as SpellAbility,

  BLAZING_SPEED: {
    DESC: `BLAZING SPEED: +3 movement this turn, take 1 damage.`,
    VALUE: 3,
    SCHOOL: 'FIRE'
  } as SpellAbility,

  METEOR_STRIKE: {
    DESC: `METEOR STRIKE: Deal 1 damage to ALL mounts including self.`,
    VALUE: 4,
    SCHOOL: 'FIRE'
  } as SpellAbility,

  WILDFIRE: {
    DESC: `WILDFIRE: +2 movement, leave fire hazard, FORGET this spell.`,
    VALUE: 2,
    SCHOOL: 'FIRE'
  } as SpellAbility,

  EXPLOSIVE_RUNE: {
    DESC: `EXPLOSIVE RUNE: Place trap that deals 2 damage when triggered.`,
    VALUE: 2.5,
    SCHOOL: 'FIRE'
  } as SpellAbility,
}

// ========================================
// ❄️ WATER/ICE MAGIC ABILITIES (Blue School)
// ========================================

export const ICE_ABILITIES = {
  FREEZE: (x: number = 4): SpellAbility => ({
    DESC: `FREEZE target within ${x} segments (they have -2 movement next turn).`,
    VALUE: 3,
    SCHOOL: 'ICE'
  }),

  ICE_WALL: {
    DESC: `ICE WALL: Create barrier blocking 1 lane for 2 turns.`,
    VALUE: 3,
    SCHOOL: 'ICE'
  } as SpellAbility,

  TIDAL_PUSH: (x: number = 3): SpellAbility => ({
    DESC: `TIDAL PUSH: Push or pull target ${x} segments in any direction.`,
    VALUE: 4,
    SCHOOL: 'ICE'
  }),

  CRYSTALLIZE: {
    DESC: `CRYSTALLIZE: Turn next hazard into +2 movement bonus.`,
    VALUE: 2.5,
    SCHOOL: 'ICE'
  } as SpellAbility,

  FROST_ARMOR: {
    DESC: `FROST ARMOR: Gain SHIELD(2), but -1 movement this turn.`,
    VALUE: 3,
    SCHOOL: 'ICE'
  } as SpellAbility,

  GLACIAL_PATH: {
    DESC: `GLACIAL PATH: Create ice bridge over hazards (+2 movement).`,
    VALUE: 2.5,
    SCHOOL: 'ICE'
  } as SpellAbility,

  ABSOLUTE_ZERO: (x: number = 3): SpellAbility => ({
    DESC: `ABSOLUTE ZERO: Freeze target within ${x} segments (skip their turn).`,
    VALUE: 5,
    SCHOOL: 'ICE'
  }),
}

// ========================================
// ✨ LIGHT/HOLY MAGIC ABILITIES (White School)
// ========================================

export const LIGHT_ABILITIES = {
  DIVINE_SHIELD: (x: number = 1): SpellAbility => ({
    DESC: `DIVINE SHIELD: Gain ${x} SHIELD token${x > 1 ? 's' : ''}.`,
    VALUE: 2 * x,
    SCHOOL: 'LIGHT'
  }),

  PURIFY: {
    DESC: `PURIFY: Remove all curses and debuffs from yourself.`,
    VALUE: 3,
    SCHOOL: 'LIGHT'
  } as SpellAbility,

  BLESSING: {
    DESC: `BLESSING: Next spell you cast gains +2 movement.`,
    VALUE: 3,
    SCHOOL: 'LIGHT'
  } as SpellAbility,

  SMITE: (x: number = 4): SpellAbility => ({
    DESC: `SMITE: Deal 3 damage to shadow/undead mount within ${x} segments.`,
    VALUE: 2.5,
    SCHOOL: 'LIGHT'
  }),

  RADIANT_BARRIER: {
    DESC: `RADIANT BARRIER: Create light wall (damages dark mounts passing through).`,
    VALUE: 3,
    SCHOOL: 'LIGHT'
  } as SpellAbility,

  SACRED_FLAME: {
    DESC: `SACRED FLAME: Deal 1 damage to all dark-aligned mounts.`,
    VALUE: 2,
    SCHOOL: 'LIGHT'
  } as SpellAbility,

  RESURRECTION: {
    DESC: `RESURRECTION: Recover from elimination once this race.`,
    VALUE: 5,
    SCHOOL: 'LIGHT'
  } as SpellAbility,
}

// ========================================
// 🌑 SHADOW/NECROMANCY ABILITIES (Black School)
// ========================================

export const SHADOW_ABILITIES = {
  CURSE_OF_WEAKNESS: (x: number = 4, turns: number = 3): SpellAbility => ({
    DESC: `CURSE: Target within ${x} segments has -1 movement for ${turns} turns.`,
    VALUE: 3.5,
    SCHOOL: 'SHADOW'
  }),

  FEAR: {
    DESC: `FEAR: Target must discard 1 spell from hand.`,
    VALUE: 3,
    SCHOOL: 'SHADOW'
  } as SpellAbility,

  LIFE_DRAIN: (x: number = 4): SpellAbility => ({
    DESC: `LIFE DRAIN: Deal 1 damage to target within ${x} segments, heal 1 damage.`,
    VALUE: 3,
    SCHOOL: 'SHADOW'
  }),

  SHADOW_STEP: (x: number = 4): SpellAbility => ({
    DESC: `SHADOW STEP: Teleport to any shadow space within ${x} segments.`,
    VALUE: 4,
    SCHOOL: 'SHADOW'
  }),

  RAISE_DEAD: {
    DESC: `RAISE DEAD: Return 1 forgotten spell to your hand.`,
    VALUE: 3,
    SCHOOL: 'SHADOW'
  } as SpellAbility,

  DARKNESS: {
    DESC: `DARKNESS: Create shadow zone (blocks vision, +2 to shadow spells).`,
    VALUE: 2.5,
    SCHOOL: 'SHADOW'
  } as SpellAbility,

  SOUL_SHACKLE: (x: number = 3): SpellAbility => ({
    DESC: `SOUL SHACKLE: Link to target within ${x} segments (they take 1 damage when you do).`,
    VALUE: 3.5,
    SCHOOL: 'SHADOW'
  }),
}

// ========================================
// 🔮 ARCANE/ILLUSION ABILITIES (Purple School)
// ========================================

export const ARCANE_ABILITIES = {
  TELEPORT: (x: number = 5): SpellAbility => ({
    DESC: `TELEPORT to any space within ${x} segments (ignores obstacles).`,
    VALUE: 5,
    SCHOOL: 'ARCANE'
  }),

  MIRROR_SPELL: {
    DESC: `MIRROR SPELL: Copy last spell cast by any opponent.`,
    VALUE: 4,
    SCHOOL: 'ARCANE'
  } as SpellAbility,

  INVISIBILITY: {
    DESC: `INVISIBILITY: Phase through obstacles and mounts this turn.`,
    VALUE: 3,
    SCHOOL: 'ARCANE'
  } as SpellAbility,

  SWAP_POSITIONS: (x: number = 5): SpellAbility => ({
    DESC: `SWAP POSITIONS: Trade places with target within ${x} segments.`,
    VALUE: 4,
    SCHOOL: 'ARCANE'
  }),

  ILLUSION_COPY: {
    DESC: `ILLUSION COPY: Create fake that takes 1 hit for you.`,
    VALUE: 2.5,
    SCHOOL: 'ARCANE'
  } as SpellAbility,

  PORTAL: {
    DESC: `PORTAL: Create linked entry/exit portals.`,
    VALUE: 4,
    SCHOOL: 'ARCANE'
  } as SpellAbility,

  BLINK: (x: number = 3): SpellAbility => ({
    DESC: `BLINK ${x} segments in chosen direction.`,
    VALUE: 3,
    SCHOOL: 'ARCANE'
  }),

  COUNTERSPELL: {
    DESC: `COUNTERSPELL: Negate target opponent's spell (reactive).`,
    VALUE: 4,
    SCHOOL: 'ARCANE'
  } as SpellAbility,
}

// ========================================
// ⚡ LIGHTNING/STORM ABILITIES (Yellow School)
// ========================================

export const STORM_ABILITIES = {
  LIGHTNING_BOLT: (x: number = 4): SpellAbility => ({
    DESC: `LIGHTNING BOLT: Deal 2 damage to target within ${x} segments, stun 1 turn.`,
    VALUE: 4,
    SCHOOL: 'STORM'
  }),

  CHAIN_LIGHTNING: (x: number = 3): SpellAbility => ({
    DESC: `CHAIN LIGHTNING: Deal 1 damage to target and 2 adjacent mounts within ${x} segments.`,
    VALUE: 4.5,
    SCHOOL: 'STORM'
  }),

  SPEED_OF_LIGHT: {
    DESC: `SPEED OF LIGHT: Gain +4 movement this turn.`,
    VALUE: 4,
    SCHOOL: 'STORM'
  } as SpellAbility,

  STORM_CALL: {
    DESC: `STORM CALL: Create storm (+1 movement for 3 turns).`,
    VALUE: 3,
    SCHOOL: 'STORM'
  } as SpellAbility,

  ENERGIZE: {
    DESC: `ENERGIZE: Adjacent spells in sequence gain +1 movement.`,
    VALUE: 3,
    SCHOOL: 'STORM'
  } as SpellAbility,

  THUNDERCLAP: {
    DESC: `THUNDERCLAP: Deal 1 damage to all adjacent mounts.`,
    VALUE: 2.5,
    SCHOOL: 'STORM'
  } as SpellAbility,

  STATIC_CHARGE: {
    DESC: `STATIC CHARGE: Next spell you cast deals +1 damage.`,
    VALUE: 2,
    SCHOOL: 'STORM'
  } as SpellAbility,
}

// ========================================
// 🪨 EARTH/CRYSTAL ABILITIES (Brown School)
// ========================================

export const EARTH_ABILITIES = {
  STONE_WALL: {
    DESC: `STONE WALL: Create permanent obstacle blocking path.`,
    VALUE: 3.5,
    SCHOOL: 'EARTH'
  } as SpellAbility,

  EARTHQUAKE: {
    DESC: `EARTHQUAKE: All mounts take 1 damage and lose 1 movement.`,
    VALUE: 3,
    SCHOOL: 'EARTH'
  } as SpellAbility,

  PETRIFY: (x: number = 4): SpellAbility => ({
    DESC: `PETRIFY target within ${x} segments (skip their turn).`,
    VALUE: 4.5,
    SCHOOL: 'EARTH'
  }),

  CRYSTAL_SHIELD: {
    DESC: `CRYSTAL SHIELD: Gain SHIELD(3), cannot move this turn.`,
    VALUE: 3,
    SCHOOL: 'EARTH'
  } as SpellAbility,

  MOUNTAIN_PATH: {
    DESC: `MOUNTAIN PATH: Ignore all terrain penalties this turn.`,
    VALUE: 2.5,
    SCHOOL: 'EARTH'
  } as SpellAbility,

  QUICKSAND: {
    DESC: `QUICKSAND: Create trap (mounts lose 2 movement when triggered).`,
    VALUE: 2.5,
    SCHOOL: 'EARTH'
  } as SpellAbility,

  STONE_FORM: {
    DESC: `STONE FORM: Immune to damage this turn, -2 movement.`,
    VALUE: 3,
    SCHOOL: 'EARTH'
  } as SpellAbility,
}

// ========================================
// 🌟 NEUTRAL/UNIVERSAL ABILITIES
// ========================================

export const UNIVERSAL_ABILITIES = {
  TIME_WARP: {
    DESC: `TIME WARP: Take extra turn, then skip next turn.`,
    VALUE: 5,
    SCHOOL: 'UNIVERSAL'
  } as SpellAbility,

  DISPEL_MAGIC: {
    DESC: `DISPEL MAGIC: Remove all magical effects from target area.`,
    VALUE: 3,
    SCHOOL: 'UNIVERSAL'
  } as SpellAbility,

  POLYMORPH: (x: number = 4): SpellAbility => ({
    DESC: `POLYMORPH target within ${x} segments into frog (skip turn, -3 movement next).`,
    VALUE: 5,
    SCHOOL: 'UNIVERSAL'
  }),

  HASTE: {
    DESC: `HASTE: Double your momentum this turn.`,
    VALUE: 3.5,
    SCHOOL: 'UNIVERSAL'
  } as SpellAbility,

  SLOW: (x: number = 4): SpellAbility => ({
    DESC: `SLOW target within ${x} segments (half movement this turn).`,
    VALUE: 3,
    SCHOOL: 'UNIVERSAL'
  }),

  MANA_SURGE: {
    DESC: `MANA SURGE: Gain +2 XP this turn.`,
    VALUE: 2,
    SCHOOL: 'UNIVERSAL'
  } as SpellAbility,

  ETHEREAL_FORM: {
    DESC: `ETHEREAL FORM: Phase through all obstacles this turn.`,
    VALUE: 2.5,
    SCHOOL: 'UNIVERSAL'
  } as SpellAbility,
}

// ========================================
// COMBINED SPELL ABILITIES EXPORT
// ========================================

export const SPELL_ABILITIES = {
  // Nature (Green)
  ...NATURE_ABILITIES,

  // Fire/Chaos (Red)
  ...FIRE_ABILITIES,

  // Water/Ice (Blue)
  ...ICE_ABILITIES,

  // Light/Holy (White)
  ...LIGHT_ABILITIES,

  // Shadow/Necromancy (Black)
  ...SHADOW_ABILITIES,

  // Arcane/Illusion (Purple)
  ...ARCANE_ABILITIES,

  // Lightning/Storm (Yellow)
  ...STORM_ABILITIES,

  // Earth/Crystal (Brown)
  ...EARTH_ABILITIES,

  // Universal
  ...UNIVERSAL_ABILITIES,
}

// Export individual schools for deck building
export const MAGIC_SCHOOLS = {
  NATURE: NATURE_ABILITIES,
  FIRE: FIRE_ABILITIES,
  ICE: ICE_ABILITIES,
  LIGHT: LIGHT_ABILITIES,
  SHADOW: SHADOW_ABILITIES,
  ARCANE: ARCANE_ABILITIES,
  STORM: STORM_ABILITIES,
  EARTH: EARTH_ABILITIES,
  UNIVERSAL: UNIVERSAL_ABILITIES,
}

export default SPELL_ABILITIES
