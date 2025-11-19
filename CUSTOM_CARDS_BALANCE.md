# Custom Racing Cards - Balance Analysis

## Cost Calculation Formula

All cards use the standard Momentum cost formula:

```
COST = momentum.VALUE + movement.VALUE + ability.VALUE + xpGain + costModifier
```

This document provides detailed cost breakdowns for representative custom cards to demonstrate balance considerations.

---

## Example Card Breakdowns

### Example 1: Draft Master (SLIPSTREAM)

**Card Properties:**
- Name: Draft Master
- Momentum: STRAIGHT (VALUE: 1)
- Movement: None
- Ability: SLIPSTREAM(4) (VALUE: 4)
- XP Gain: 1
- Cost Modifier: -1

**Cost Calculation:**
```
COST = 1 (momentum) + 0 (movement) + 4 (ability) + 1 (xpGain) + (-1) (modifier)
COST = 5
```

**Balance Reasoning:**
- Slipstream is powerful (copies opponent movement), justifying VALUE 4
- Cost modifier -1 because ability requires specific positioning (must be behind opponent)
- Final cost of 5 is competitive with similar utility cards
- Compare to GRAPPLE cards (cost ~6) which have similar positioning requirements

---

### Example 2: Tokyo Drift (DRIFT)

**Card Properties:**
- Name: Tokyo Drift
- Momentum: LEFT_OR_RIGHT (VALUE: 2)
- Movement: None
- Ability: DRIFT(1) (VALUE: 3)
- XP Gain: 1
- Cost Modifier: 0

**Cost Calculation:**
```
COST = 2 (momentum) + 0 (movement) + 3 (ability) + 1 (xpGain) + 0 (modifier)
COST = 6
```

**Balance Reasoning:**
- Drift generates additional momentum, providing flexibility (VALUE 3)
- LEFT_OR_RIGHT momentum already provides choice
- Combined flexibility makes this a strong tactical card
- Cost 6 positions it in mid-tier purchase range
- Compare to BOOST cards with similar VALUE 4 abilities

---

### Example 3: Nitrous Shot (TURBO BOOST)

**Card Properties:**
- Name: Nitrous Shot
- Momentum: STRAIGHT (VALUE: 1)
- Movement: STRAIGHT (VALUE: 1)
- Ability: TURBO BOOST (VALUE: 2)
- XP Gain: 1
- Cost Modifier: -1

**Cost Calculation:**
```
COST = 1 (momentum) + 1 (movement) + 2 (ability) + 1 (xpGain) + (-1) (modifier)
COST = 4
```

**Balance Reasoning:**
- Turbo Boost gives +2 movement but destroys the card (VALUE 2)
- Self-destruction is significant downside, reducing value
- Cost modifier -1 compensates for one-time use
- Final cost 4 makes it affordable as disposable power spike
- Compare to cards with FORGET_SELF ability (VALUE 0) - Turbo is stronger but priced accordingly

**Power Analysis:**
- First play: 1 momentum + 1 movement + 2 turbo = 4 total movement
- Subsequent plays: 0 (card is forgotten)
- Total lifetime value: 4 movement, 1 XP for cost 4
- Fair trade for one-time power spike

---

### Example 4: Redline (OVERDRIVE)

**Card Properties:**
- Name: Redline
- Momentum: STRAIGHT (VALUE: 1)
- Movement: STRAIGHT + STRAIGHT (VALUE: 2)
- Ability: OVERDRIVE (VALUE: 3)
- XP Gain: 2
- Cost Modifier: -2

**Cost Calculation:**
```
COST = 1 (momentum) + 2 (movement) + 3 (ability) + 2 (xpGain) + (-2) (modifier)
COST = 6
```

**Balance Reasoning:**
- Overdrive doubles movement but deals 1 damage
- Base card has 3 movement (1 momentum + 2 movement icons)
- With Overdrive: 6 movement total, but take 1 damage
- Cost modifier -2 compensates for self-damage risk
- Final cost 6 for 6 movement + 2 XP + 1 damage = high risk/reward

**Power Analysis:**
- Normal use: 1 momentum + 2 movement + 2 XP = 5 value
- With Overdrive: 1 momentum + 4 movement + 2 XP - 1 damage = 8 value (net +3)
- Cost 6 for situational +3 movement is balanced
- Multiple uses cause damage accumulation (strategic risk)

---

### Example 5: Master Mechanic (REPAIR)

**Card Properties:**
- Name: Master Mechanic
- Momentum: LEFT_OR_RIGHT (VALUE: 2)
- Movement: None
- Ability: REPAIR(2) (VALUE: 3)
- XP Gain: 2
- Cost Modifier: +1

**Cost Calculation:**
```
COST = 2 (momentum) + 0 (movement) + 3 (ability) + 2 (xpGain) + 1 (modifier)
COST = 8
```

**Balance Reasoning:**
- REPAIR(2) removes 2 effects OR returns 2 forgotten cards
- Dual-mode flexibility is powerful
- Cost modifier +1 reflects enhanced version of REPAIR(1)
- Final cost 8 positions as premium defensive card
- Compare to SHIELD cards (cost ~5-6) with simpler effect

**Situational Value:**
- Early game: Moderate (fewer hazards/forgotten cards)
- Mid game: High (can recover from setbacks)
- Late game: Very High (deck recovery becomes critical)
- Scaling value justifies higher cost

---

### Example 6: Underdog Surge (ADRENALINE)

**Card Properties:**
- Name: Underdog Surge
- Momentum: STRAIGHT (VALUE: 1)
- Movement: STRAIGHT (VALUE: 1)
- Ability: ADRENALINE (VALUE: 3)
- XP Gain: 2
- Cost Modifier: -1

**Cost Calculation:**
```
COST = 1 (momentum) + 1 (movement) + 3 (ability) + 2 (xpGain) + (-1) (modifier)
COST = 6
```

**Balance Reasoning:**
- Adrenaline gives +1 movement per car behind (max +3)
- Highly conditional: only good when losing
- Cost modifier -1 due to conditional nature
- Final cost 6 is fair for potential +3 movement swing

**Power Analysis:**
- Leading (0 cars behind): 1 momentum + 1 movement + 2 XP = 4 value (bad for cost 6)
- Middle (1-2 cars behind): +1-2 movement = 5-6 value (fair)
- Last place (3+ cars behind): +3 movement = 7 value (good for cost 6)
- Risk: Card is weak when winning, strong when losing (anti-snowball design)

---

### Example 7: Copy Cat (MIRROR)

**Card Properties:**
- Name: Copy Cat
- Momentum: STRAIGHT (VALUE: 1)
- Movement: None
- Ability: MIRROR (VALUE: 4)
- XP Gain: 1
- Cost Modifier: 0

**Cost Calculation:**
```
COST = 1 (momentum) + 0 (movement) + 4 (ability) + 1 (xpGain) + 0 (modifier)
COST = 6
```

**Balance Reasoning:**
- Mirror copies last opponent ability (VALUE 4 for flexibility)
- Power scales with opponent choices
- No inherent movement beyond momentum
- Final cost 6 for reactive utility

**Power Analysis:**
- Opponent plays HOOK: You get HOOK (VALUE 3)
- Opponent plays GRAPPLE: You get GRAPPLE (VALUE 5)
- Opponent plays basic card: You get nothing (VALUE 0)
- Average value depends on metagame (skill-testing card)
- Requires tracking opponent plays (complexity cost)

---

### Example 8: Quick Service (PIT STOP)

**Card Properties:**
- Name: Quick Service
- Momentum: None
- Movement: None
- Ability: PIT STOP (VALUE: 4)
- XP Gain: 1
- Cost Modifier: +1

**Cost Calculation:**
```
COST = 0 (momentum) + 0 (movement) + 4 (ability) + 1 (xpGain) + 1 (modifier)
COST = 6
```

**Balance Reasoning:**
- Pit Stop: FORGET 1, DRAW 2 next turn, +1 XP (VALUE 4)
- No momentum/movement makes it pure utility
- Cost modifier +1 balances lack of momentum tax
- Final cost 6 for deck manipulation + card advantage

**Value Analysis:**
- Immediate: FORGET 1 weak card (removes ~2-4 cost card from deck)
- Next Turn: DRAW 2 instead of normal hand (net +1 card)
- Long-term: Deck thinning improves average hand quality
- +1 XP bonus adds economic value
- Total value 6-8 depending on deck state (fair for cost 6)

---

## Comparative Analysis

### Cost Tiers

**Tier 1: Budget Cards (Cost 4-5)**
- Nitrous Shot (4) - One-time power spike
- Draft Master (5) - Conditional positioning

**Tier 2: Standard Cards (Cost 6-7)**
- Tokyo Drift (6) - Momentum manipulation
- Redline (6) - High-risk movement
- Underdog Surge (6) - Comeback mechanic
- Copy Cat (6) - Reactive utility
- Quick Service (6) - Deck manipulation

**Tier 3: Premium Cards (Cost 8+)**
- Master Mechanic (8) - Enhanced recovery

### Ability Value Reference

For comparison, here are existing ability values:

| Ability | Value | Reasoning |
|---------|-------|-----------|
| OIL | 2.0 | Simple hazard placement |
| OBSTACLE | 2.5 | Stronger than oil |
| SHIELD(1) | 2.0 | Single-use protection |
| STEADFAST(1) | 2.0 | Positioning protection |
| HOOK(4) | 3.0 | Pulls opponent back |
| FORGET(1) | 3.0 | Deck manipulation |
| DRAW(1) | 3.0 | Card advantage |
| BOOST(1) | 4.0 | Adjacent card enhancement |
| GRAPPLE(4) | 5.0 | Long-range movement copy |
| CHAINLINK | 5.0 | Combo of Hook + Grapple |
| OFFLOAD | 5.0 | Combo of Forget + Obstacle |

### New Custom Ability Values

| Ability | Value | Reasoning |
|---------|-------|-----------|
| TURBO BOOST | 2.0 | +2 movement but self-destruct |
| SABOTAGE | 2.5 | Targeted opponent debuff |
| BUMPER | 2.5 | Conditional pushing |
| EXHAUST TRAIL | 2.5 | Persistent area hazard |
| SCOUT(3) | 2.0 | Information advantage |
| BACKUP PLAN | 2.0 | Conditional double-use |
| MOMENTUM SHIFT | 2.0 | Flexibility enhancement |
| PRECISION | 2.5 | Hazard immunity |
| DRIFT(1) | 3.0 | Momentum generation |
| TAILGATE | 3.0 | Conditional dual bonus |
| REPAIR(1) | 3.0 | Flexible recovery |
| RELAY | 3.0 | Sequencing bonus |
| ADRENALINE | 3.0 | Scaling comeback |
| SHORTCUT | 3.0 | Path flexibility |
| OVERDRIVE | 3.0 | Double movement with cost |
| SLIPSTREAM(4) | 4.0 | Movement copying |
| PIT STOP | 4.0 | Multi-benefit combo |
| MIRROR | 4.0 | Ability copying |

---

## Balance Testing Results

### Cost Distribution Analysis

**Expected Cost Range:** 4-10
**Expected Average Cost:** ~6-7

Breaking down the 82 custom cards:

**Budget (0-4 cost):** ~8 cards (10%)
- Mostly Turbo Boost variants (self-destructing)
- Entry-level purchases

**Standard (5-7 cost):** ~55 cards (67%)
- Majority of card pool
- Balanced power level
- Core gameplay cards

**Premium (8+ cost):** ~19 cards (23%)
- High-impact abilities
- Late-game purchases
- Strategic investments

**Comparison to Existing Sets:**

| Set | Avg Cost | Range | Notes |
|-----|----------|-------|-------|
| Starter Cards | 0 | 0 | Free starting deck |
| Basic Cards | 3-4 | 3-5 | Early purchases |
| Auto Shop | 5-6 | 4-8 | Mid-game power |
| Advanced Cards | 6-7 | 5-9 | Late-game cards |
| Custom Racing | 6-7 | 4-10 | Full range distribution |

**Conclusion:** Custom cards fit well within existing economy. Slightly higher average reflects experimental/powerful abilities.

---

## Power Curve Analysis

### Movement Efficiency (Movement per Cost)

**High Efficiency (>0.8 movement/cost):**
- Nitrous Shot: 4 movement / 4 cost = 1.0 (but one-time)
- Redline (w/ Overdrive): 6 movement / 6 cost = 1.0 (but damage)

**Standard Efficiency (0.4-0.6 movement/cost):**
- Most Custom Racing cards fall here
- Matches existing card power curve

**Low Efficiency (<0.4 movement/cost):**
- Utility-focused cards (Pit Stop, Mirror, Scout)
- Value in effects, not movement

**Comparison to Basic Cards:**
- Basic "Wilder": 1 momentum / 5 cost = 0.2 movement/cost + 2 XP
- Custom "Tokyo Drift": 2 momentum / 6 cost = 0.33 movement/cost + 1 XP + Drift ability
- Custom cards competitive with existing cards

### XP Generation

**Total XP Available:** ~120 XP (82 cards averaging 1.5 XP each)

**XP Efficiency (XP per Cost):**
- Average: ~0.25 XP/cost (matches existing sets)
- Range: 0.15-0.35 XP/cost

**Conclusion:** XP generation aligns with existing economy

---

## Playtesting Guidelines

When testing these cards, track the following metrics:

### Purchase Metrics
- **Pick Rate**: Which cards are purchased most?
- **First Purchase**: Which cards are bought first?
- **Never Purchased**: Which cards are ignored?

### Performance Metrics
- **Win Rate**: Do decks with certain abilities win more?
- **Game Length**: Do abilities speed up or slow down games?
- **Player Engagement**: Are abilities fun to use?

### Balance Concerns
- **Too Strong**: Cards purchased every game
- **Too Weak**: Cards never purchased despite availability
- **Too Swingy**: Cards that create unfun "I win" moments
- **Too Complex**: Cards that slow down gameplay with rules questions

### Suggested Adjustments

If playtesting reveals issues, consider these adjustments:

**Card Too Strong:**
1. Increase cost by 1-2
2. Add cost modifier +1
3. Reduce ability value (nerf effect)
4. Add more restrictive conditions

**Card Too Weak:**
1. Decrease cost by 1-2
2. Add cost modifier -1
3. Increase XP gain
4. Reduce conditional requirements

**Card Too Swingy:**
1. Cap maximum benefit
2. Add counterplay options
3. Make effect gradual instead of immediate
4. Increase cost to limit early acquisition

**Card Too Complex:**
1. Simplify ability text
2. Remove conditional requirements
3. Make effect more intuitive
4. Add reminder text

---

## Conclusion

The Custom Racing Cards set is designed to integrate seamlessly with existing Momentum mechanics while expanding strategic options. The cost calculations follow established formulas, ability values align with existing precedents, and the overall power curve matches the current card pool.

**Key Takeaways:**
- Average cost (~6-7) fits mid-tier purchase range
- Ability values (2-4) match existing power levels
- Conditional abilities priced with appropriate modifiers
- Risk/reward cards balanced through self-imposed costs
- XP generation aligns with existing economy

**Next Steps:**
1. Integrate cards into codebase (see CUSTOM_CARDS_GUIDE.md)
2. Playtest with representative sample (15-20 cards)
3. Gather feedback on fun factor and balance
4. Iterate on ability values and costs
5. Expand successful designs, remove problematic ones

**File Location:** `/src/cards/cardSets/customCards.ts`
**Last Updated:** 2025-11-19
**Status:** Experimental - Balance subject to playtesting feedback
