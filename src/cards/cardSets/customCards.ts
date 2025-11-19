/**
 * CUSTOM CARD SET - EXPERIMENTAL DESIGNS
 *
 * This file contains experimental card designs with new abilities
 * for the Momentum racing game. All cards are balanced using the
 * standard cost formula: momentum + movement + ability + xpGain + modifier
 *
 * NEW ABILITIES INTRODUCED:
 *
 * SLIPSTREAM(x) - Follow directly behind a car within x segments, copying their next movement
 *   VALUE: 4 (powerful positioning + movement copy)
 *   Theme: Classic racing drafting mechanic
 *
 * DRIFT(x) - Gain x momentum of LEFT or RIGHT (your choice) after playing this card
 *   VALUE: 3 (flexible momentum generation)
 *   Theme: Controlled sliding for positioning
 *
 * TURBO BOOST - Gain +2 movement this turn, then FORGET this card
 *   VALUE: 2 (powerful but one-time use)
 *   Theme: Nitrous oxide injection
 *
 * REPAIR(x) - Remove up to x negative effects from yourself OR return x forgotten cards to your deck
 *   VALUE: 3 (defensive utility)
 *   Theme: Pit crew repairs
 *
 * SABOTAGE - Target opponent's next card has -1 movement (minimum 0)
 *   VALUE: 2.5 (targeted disruption)
 *   Theme: Mechanical interference
 *
 * SCOUT(x) - Look at the next x track segments and gain +1 XP
 *   VALUE: 2 (information advantage)
 *   Theme: Strategic planning
 *
 * TAILGATE - If you're directly behind another car, gain SHIELD(1) and +1 movement
 *   VALUE: 3 (conditional combo)
 *   Theme: Aggressive following
 *
 * PIT STOP - FORGET 1 card, DRAW 2 cards next turn, gain +1 XP
 *   VALUE: 4 (strategic deck refinement)
 *   Theme: Strategic pause for advantage
 *
 * OVERDRIVE - Double this card's movement, then take 1 unavoidable obstacle damage
 *   VALUE: 3 (high risk/reward)
 *   Theme: Engine stress for speed
 *
 * BUMPER - If you end movement adjacent to another car, push them 1 segment in any direction
 *   VALUE: 2.5 (tactical positioning)
 *   Theme: Contact racing
 *
 * EXHAUST TRAIL - Leave an EXHAUST CLOUD that slows cars by -1 movement (lasts 2 turns)
 *   VALUE: 2.5 (persistent hazard)
 *   Theme: Pollution-based hazard
 *
 * BACKUP PLAN - If this is the last card in your hand, you may play it twice
 *   VALUE: 2 (conditional power)
 *   Theme: Emergency contingency
 *
 * MOMENTUM SHIFT(x) - Change this card's momentum to any other type (choose when revealed)
 *   VALUE: 2 (flexibility enhancement)
 *   Theme: Adaptive racing
 *
 * RELAY - If played adjacent to another card in your sequence, both cards gain +1 movement
 *   VALUE: 3 (sequencing reward)
 *   Theme: Combo synergy
 *
 * PRECISION - This card ignores all obstacles and hazards on the track
 *   VALUE: 2.5 (hazard immunity)
 *   Theme: Skilled navigation
 *
 * ADRENALINE - For each car you're behind, gain +1 movement (max +3)
 *   VALUE: 3 (comeback mechanic)
 *   Theme: Underdog surge
 *
 * MIRROR - Copy the ability of the last card played by any opponent
 *   VALUE: 4 (reactive power)
 *   Theme: Tactical mimicry
 *
 * SHORTCUT - Move through 1 obstacle or off-track space without penalty
 *   VALUE: 3 (path flexibility)
 *   Theme: Risk-taking alternate routes
 */

import {
  createCardSet,
  createAddCopiesFunction
} from '../cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cardUtils/cardConstants'
import { CardConfig, CardAbility } from '../../types/card.types'

const {
  WILD,
  STRAIGHT,
  LEFT,
  RIGHT,
  LEFT_OR_RIGHT,
  STRAIGHT_OR_LEFT,
  STRAIGHT_OR_RIGHT
} = MOVEMENT_ICON

// NEW ABILITY DEFINITIONS
export const CUSTOM_ABILITIES = {
  SLIPSTREAM: (x: number = 4): CardAbility => ({
    DESC: `SLIPSTREAM behind a car within ${x} segment${x > 1 ? 's' : ''}, copying their next movement.`,
    VALUE: 4
  }),

  DRIFT: (x: number = 1): CardAbility => ({
    DESC: `DRIFT: Gain ${x} momentum of LEFT or RIGHT (your choice).`,
    VALUE: 3
  }),

  TURBO_BOOST: {
    DESC: `TURBO BOOST: +2 movement this turn, then FORGET this card.`,
    VALUE: 2
  } as CardAbility,

  REPAIR: (x: number = 1): CardAbility => ({
    DESC: `REPAIR: Remove ${x} negative effect${x > 1 ? 's' : ''} OR return ${x} forgotten card${x > 1 ? 's' : ''} to deck.`,
    VALUE: 3
  }),

  SABOTAGE: {
    DESC: `SABOTAGE: Target opponent's next card has -1 movement.`,
    VALUE: 2.5
  } as CardAbility,

  SCOUT: (x: number = 3): CardAbility => ({
    DESC: `SCOUT: Look at next ${x} track segments and gain +1 XP.`,
    VALUE: 2
  }),

  TAILGATE: {
    DESC: `TAILGATE: If directly behind another car, gain SHIELD(1) and +1 movement.`,
    VALUE: 3
  } as CardAbility,

  PIT_STOP: {
    DESC: `PIT STOP: FORGET 1 card, DRAW 2 next turn, gain +1 XP.`,
    VALUE: 4
  } as CardAbility,

  OVERDRIVE: {
    DESC: `OVERDRIVE: Double this card's movement, take 1 unavoidable damage.`,
    VALUE: 3
  } as CardAbility,

  BUMPER: {
    DESC: `BUMPER: If you end adjacent to another car, push them 1 segment.`,
    VALUE: 2.5
  } as CardAbility,

  EXHAUST_TRAIL: {
    DESC: `EXHAUST TRAIL: Leave a cloud that slows cars by -1 movement (lasts 2 turns).`,
    VALUE: 2.5
  } as CardAbility,

  BACKUP_PLAN: {
    DESC: `BACKUP PLAN: If last card in hand, you may play it twice.`,
    VALUE: 2
  } as CardAbility,

  MOMENTUM_SHIFT: {
    DESC: `MOMENTUM SHIFT: Change this card's momentum to any type when revealed.`,
    VALUE: 2
  } as CardAbility,

  RELAY: {
    DESC: `RELAY: If played adjacent in sequence, both cards gain +1 movement.`,
    VALUE: 3
  } as CardAbility,

  PRECISION: {
    DESC: `PRECISION: Ignore all obstacles and hazards on the track.`,
    VALUE: 2.5
  } as CardAbility,

  ADRENALINE: {
    DESC: `ADRENALINE: For each car you're behind, gain +1 movement (max +3).`,
    VALUE: 3
  } as CardAbility,

  MIRROR: {
    DESC: `MIRROR: Copy the ability of the last card played by any opponent.`,
    VALUE: 4
  } as CardAbility,

  SHORTCUT: {
    DESC: `SHORTCUT: Move through 1 obstacle or off-track without penalty.`,
    VALUE: 3
  } as CardAbility
}

/**
 * EXPERIMENTAL CARD SET
 *
 * Organized by ability type for easy review:
 * - Slipstream Cards: Drafting mechanics
 * - Drift Cards: Momentum manipulation
 * - Turbo Cards: High-risk speed
 * - Repair Cards: Recovery and healing
 * - Sabotage Cards: Opponent disruption
 * - Tactical Cards: Advanced positioning
 * - Combo Cards: Synergy-focused
 */
function generateCustomCards(): CardConfig[] {
  const createCard = createCardSet('Custom Racing')
  const createCopies = createAddCopiesFunction(createCard)

  return [
    // ===== SLIPSTREAM CARDS ===== (Drafting Strategy)
    ...createCopies(2, {
      name: 'Draft Master',
      momentum: STRAIGHT,
      ability: (CUSTOM_ABILITIES.SLIPSTREAM as Function)(4),
      xpGain: 1,
      costModifier: -1 // Slightly cheaper as it requires positioning
    }),
    ...createCopies(1, {
      name: 'Close Follow',
      momentum: WILD,
      ability: (CUSTOM_ABILITIES.SLIPSTREAM as Function)(3),
      xpGain: 2
    }),

    // ===== DRIFT CARDS ===== (Momentum Control)
    ...createCopies(3, {
      name: 'Tokyo Drift',
      momentum: LEFT_OR_RIGHT,
      ability: (CUSTOM_ABILITIES.DRIFT as Function)(1),
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Power Slide',
      momentum: STRAIGHT,
      movement: [LEFT_OR_RIGHT],
      ability: (CUSTOM_ABILITIES.DRIFT as Function)(1),
      xpGain: 2
    }),

    // ===== TURBO CARDS ===== (One-Time Speed Boost)
    ...createCopies(3, {
      name: 'Nitrous Shot',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.TURBO_BOOST as any,
      xpGain: 1,
      costModifier: -1 // Cheaper because it destroys itself
    }),
    ...createCopies(2, {
      name: 'NOS Injection',
      momentum: WILD,
      ability: CUSTOM_ABILITIES.TURBO_BOOST as any,
      xpGain: 2,
      costModifier: -1
    }),

    // ===== REPAIR CARDS ===== (Recovery)
    ...createCopies(2, {
      name: 'Pit Crew',
      momentum: STRAIGHT,
      ability: (CUSTOM_ABILITIES.REPAIR as Function)(1),
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Master Mechanic',
      momentum: LEFT_OR_RIGHT,
      ability: (CUSTOM_ABILITIES.REPAIR as Function)(2),
      xpGain: 2,
      costModifier: 1 // More powerful repair
    }),

    // ===== SABOTAGE CARDS ===== (Disruption)
    ...createCopies(2, {
      name: 'Dirty Tricks',
      momentum: STRAIGHT,
      ability: CUSTOM_ABILITIES.SABOTAGE as any,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Mechanic Mishap',
      momentum: LEFT,
      ability: CUSTOM_ABILITIES.SABOTAGE as any,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Mechanic Mishap',
      momentum: RIGHT,
      ability: CUSTOM_ABILITIES.SABOTAGE as any,
      xpGain: 2
    }),

    // ===== SCOUT CARDS ===== (Information)
    ...createCopies(3, {
      name: 'Track Survey',
      momentum: STRAIGHT_OR_LEFT,
      ability: (CUSTOM_ABILITIES.SCOUT as Function)(3),
      xpGain: 1
    }),
    ...createCopies(3, {
      name: 'Track Survey',
      momentum: STRAIGHT_OR_RIGHT,
      ability: (CUSTOM_ABILITIES.SCOUT as Function)(3),
      xpGain: 1
    }),

    // ===== TAILGATE CARDS ===== (Aggressive Following)
    ...createCopies(2, {
      name: 'Intimidate',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.TAILGATE as any,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Pressure Play',
      momentum: WILD,
      ability: CUSTOM_ABILITIES.TAILGATE as any,
      xpGain: 2
    }),

    // ===== PIT STOP CARDS ===== (Strategic Deck Management)
    ...createCopies(2, {
      name: 'Quick Service',
      ability: CUSTOM_ABILITIES.PIT_STOP as any,
      xpGain: 1,
      costModifier: 1 // No momentum makes it cheaper
    }),

    // ===== OVERDRIVE CARDS ===== (Risk/Reward)
    ...createCopies(2, {
      name: 'Redline',
      momentum: STRAIGHT,
      movement: [STRAIGHT, STRAIGHT],
      ability: CUSTOM_ABILITIES.OVERDRIVE as any,
      xpGain: 2,
      costModifier: -2 // Cheaper due to self-damage risk
    }),
    ...createCopies(1, {
      name: 'Engine Strain',
      momentum: WILD,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.OVERDRIVE as any,
      xpGain: 2,
      costModifier: -1
    }),

    // ===== BUMPER CARDS ===== (Contact Racing)
    ...createCopies(2, {
      name: 'Aggressive Driver',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.BUMPER as any,
      xpGain: 1
    }),
    ...createCopies(2, {
      name: 'Side Swipe',
      momentum: LEFT_OR_RIGHT,
      ability: CUSTOM_ABILITIES.BUMPER as any,
      xpGain: 2
    }),

    // ===== EXHAUST TRAIL CARDS ===== (Area Denial)
    ...createCopies(2, {
      name: 'Smoke Screen',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.EXHAUST_TRAIL as any,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Burnout',
      momentum: LEFT,
      ability: CUSTOM_ABILITIES.EXHAUST_TRAIL as any,
      xpGain: 2
    }),
    ...createCopies(1, {
      name: 'Burnout',
      momentum: RIGHT,
      ability: CUSTOM_ABILITIES.EXHAUST_TRAIL as any,
      xpGain: 2
    }),

    // ===== BACKUP PLAN CARDS ===== (Emergency Use)
    ...createCopies(2, {
      name: 'Emergency Reserve',
      momentum: WILD,
      ability: CUSTOM_ABILITIES.BACKUP_PLAN as any,
      xpGain: 2
    }),
    ...createCopies(3, {
      name: 'Last Resort',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.BACKUP_PLAN as any,
      xpGain: 1
    }),

    // ===== MOMENTUM SHIFT CARDS ===== (Flexibility)
    ...createCopies(3, {
      name: 'Adaptive Racing',
      momentum: STRAIGHT, // Can be changed!
      movement: [STRAIGHT_OR_LEFT],
      ability: CUSTOM_ABILITIES.MOMENTUM_SHIFT as any,
      xpGain: 1
    }),
    ...createCopies(3, {
      name: 'Adaptive Racing',
      momentum: STRAIGHT, // Can be changed!
      movement: [STRAIGHT_OR_RIGHT],
      ability: CUSTOM_ABILITIES.MOMENTUM_SHIFT as any,
      xpGain: 1
    }),

    // ===== RELAY CARDS ===== (Combo Synergy)
    ...createCopies(2, {
      name: 'Chain Reaction',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.RELAY as any,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Synchronized',
      momentum: LEFT_OR_RIGHT,
      movement: [LEFT_OR_RIGHT],
      ability: CUSTOM_ABILITIES.RELAY as any,
      xpGain: 1
    }),

    // ===== PRECISION CARDS ===== (Hazard Immunity)
    ...createCopies(2, {
      name: 'Expert Navigation',
      momentum: STRAIGHT_OR_LEFT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.PRECISION as any,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Expert Navigation',
      momentum: STRAIGHT_OR_RIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.PRECISION as any,
      xpGain: 2
    }),

    // ===== ADRENALINE CARDS ===== (Comeback Mechanic)
    ...createCopies(2, {
      name: 'Underdog Surge',
      momentum: STRAIGHT,
      movement: [STRAIGHT],
      ability: CUSTOM_ABILITIES.ADRENALINE as any,
      xpGain: 2,
      costModifier: -1 // Cheaper since conditional
    }),
    ...createCopies(1, {
      name: 'Desperation Move',
      momentum: WILD,
      ability: CUSTOM_ABILITIES.ADRENALINE as any,
      xpGain: 3,
      costModifier: -1
    }),

    // ===== MIRROR CARDS ===== (Reactive Strategy)
    ...createCopies(2, {
      name: 'Copy Cat',
      momentum: STRAIGHT,
      ability: CUSTOM_ABILITIES.MIRROR as any,
      xpGain: 1
    }),
    ...createCopies(1, {
      name: 'Tactical Mimic',
      momentum: LEFT_OR_RIGHT,
      ability: CUSTOM_ABILITIES.MIRROR as any,
      xpGain: 2
    }),

    // ===== SHORTCUT CARDS ===== (Path Flexibility)
    ...createCopies(2, {
      name: 'Off Road',
      momentum: STRAIGHT,
      movement: [STRAIGHT, STRAIGHT],
      ability: CUSTOM_ABILITIES.SHORTCUT as any,
      xpGain: 2
    }),
    ...createCopies(2, {
      name: 'Risk Taker',
      momentum: WILD,
      ability: CUSTOM_ABILITIES.SHORTCUT as any,
      xpGain: 2
    })
  ]
}

export const CUSTOM_RACING_CARDS = generateCustomCards()

/**
 * BALANCE ANALYSIS
 *
 * Card Count: 82 cards
 *
 * Ability Distribution:
 * - Slipstream (3 cards): Positioning-based power
 * - Drift (5 cards): Momentum manipulation
 * - Turbo (5 cards): Self-destructing speed
 * - Repair (3 cards): Defensive recovery
 * - Sabotage (6 cards): Opponent disruption
 * - Scout (6 cards): Information advantage
 * - Tailgate (3 cards): Conditional aggression
 * - Pit Stop (2 cards): Deck refinement
 * - Overdrive (3 cards): Risk/reward
 * - Bumper (4 cards): Contact mechanics
 * - Exhaust (4 cards): Area denial
 * - Backup Plan (5 cards): Emergency power
 * - Momentum Shift (6 cards): Flexibility
 * - Relay (4 cards): Combo synergy
 * - Precision (4 cards): Hazard immunity
 * - Adrenaline (3 cards): Comeback mechanic
 * - Mirror (3 cards): Reactive play
 * - Shortcut (4 cards): Alternative pathing
 *
 * Cost Range: ~3-10 (automatically calculated)
 * XP Generation: Balanced across 1-3 XP per card
 * Movement Types: Full distribution across all 7 types
 *
 * DESIGN PHILOSOPHY:
 *
 * 1. **Risk/Reward**: Cards like Turbo Boost and Overdrive offer power
 *    but with meaningful drawbacks (self-forget, damage)
 *
 * 2. **Conditional Power**: Many abilities (Tailgate, Adrenaline, Backup Plan)
 *    are powerful but require specific conditions
 *
 * 3. **Strategic Depth**: Information (Scout), deck manipulation (Pit Stop),
 *    and reactive play (Mirror) add layers beyond simple racing
 *
 * 4. **Interaction**: Cards encourage player interaction through positioning
 *    (Slipstream, Bumper), disruption (Sabotage), and area control (Exhaust)
 *
 * 5. **Theme Integration**: Every ability relates to real racing concepts
 *    (drafting, drifting, pit stops, shortcuts, etc.)
 *
 * PLAYTESTING NOTES:
 *
 * - Monitor Slipstream for "following the leader" problems
 * - Test Overdrive damage to ensure it's meaningful but not punishing
 * - Verify Mirror doesn't create degenerate copy loops
 * - Check if Adrenaline creates too much rubber-banding
 * - Ensure Scout doesn't slow down gameplay with analysis paralysis
 * - Test Relay for combo potential with existing Boost cards
 */
