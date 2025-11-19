# Magical Momentum - Game Design Document

## 🧙‍♂️ Core Concept

**Magical Momentum** is a spell-based racing game where wizards mount magical creatures and race across enchanted courses using spell cards. Players draft spells from color-coded magic schools, each wizard bringing their unique flavor of magic to the race.

---

## 🎮 Game Overview

### **The Premise**
Wizards from different magical schools gather to compete in the legendary **Skyrace Championships**, mounted on powerful magical creatures. Players program their mount's movement using spell cards, navigating through multi-dimensional tracks that span ground, sky, and mystical realms.

### **Core Differences from Drivers Momentum**
- **Vehicles → Mounts**: Magical creatures with unique passive abilities
- **Drivers → Wizards**: Color-coded magic users with active abilities
- **Movement → Locomotion**: Ground, Flying, Teleporting, Phasing
- **Track → Mystic Course**: Multi-altitude racing with magical hazards
- **Cards → Spells**: Color-coded magic schools with thematic abilities
- **Programming → Spellcasting**: Sequence spells to create powerful combos

---

## 🐉 Mount Types (18 Creature Classes)

### **DRAGONS** (Fire/Chaos Aligned)

#### Ember Dragon ⚡️
- **Type**: Flying (Ground capable)
- **Passive**: *Fiery Wake* - Leave burning trail that damages followers
- **Movement Bonus**: +1 to STRAIGHT flying movement
- **Affinity**: Red magic spells cost -1

#### Frost Wyrm ❄️
- **Type**: Flying
- **Passive**: *Icy Breath* - Freeze obstacles in path (ignore 1 per turn)
- **Movement Bonus**: Immune to cold-based hazards
- **Affinity**: Blue magic spells cost -1

#### Storm Dragon ⚡
- **Type**: Flying
- **Passive**: *Lightning Rider* - Double movement on storm segments
- **Movement Bonus**: +1 altitude change per turn
- **Affinity**: Yellow magic spells cost -1

#### Shadow Dragon 🌑
- **Type**: Flying/Phasing
- **Passive**: *Shadowmeld* - Once per lap, phase through any obstacle
- **Movement Bonus**: Can move through other mounts
- **Affinity**: Black magic spells cost -1

---

### **HIPPOGRIFFS** (Balanced Hybrid)

#### Silverwind Hippogriff 💨
- **Type**: Flying (Ground capable)
- **Passive**: *Noble Bearing* - Immune to fear/curse effects
- **Movement Bonus**: +1 to diagonal movement
- **Affinity**: White magic spells cost -1

#### Earthbound Hippogriff 🌿
- **Type**: Ground/Flying
- **Passive**: *Terrain Master* - Ignore ground terrain penalties
- **Movement Bonus**: Can switch ground/flying each turn for free
- **Affinity**: Green magic spells cost -1

---

### **PEGASUS** (Speed/Light Aligned)

#### Sunburst Pegasus ☀️
- **Type**: Flying
- **Passive**: *Dawn's Grace* - Heal 1 damage at start of each lap
- **Movement Bonus**: +1 speed when in first place
- **Affinity**: White magic, gains +1 XP from light spells

#### Moonlight Pegasus 🌙
- **Type**: Flying
- **Passive**: *Lunar Surge* - Double movement bonus from momentum at night
- **Movement Bonus**: +1 to all turns
- **Affinity**: Purple magic spells cost -1

---

### **GRIFFINS** (Tactical/Aggressive)

#### Royal Griffin 👑
- **Type**: Flying (Ground capable)
- **Passive**: *Predator's Focus* - +2 movement when targeting opponent
- **Movement Bonus**: Grapple/Hook range +2 segments
- **Affinity**: Red/White magic

#### Stormclaw Griffin ⚡
- **Type**: Flying
- **Passive**: *Dive Attack* - Descending grants +1 movement
- **Movement Bonus**: Free altitude change when using aggressive spells
- **Affinity**: Yellow/Red magic

---

### **PHOENIX** (Resurrection/Fire)

#### Eternal Phoenix 🔥
- **Type**: Flying
- **Passive**: *Rebirth* - First time eliminated each race, resurrect at last checkpoint
- **Movement Bonus**: Immune to fire damage
- **Affinity**: Red magic spells +1 power

#### Frost Phoenix ❄️
- **Type**: Flying
- **Passive**: *Frozen Rebirth* - Can sacrifice movement to heal 2 damage
- **Movement Bonus**: Immune to ice damage
- **Affinity**: Blue magic spells +1 power

---

### **WYVERNS** (Aggressive Ground-Flying)

#### Poison Wyvern ☠️
- **Type**: Flying (Low altitude)
- **Passive**: *Venom Spit* - Opponents behind you take 1 damage per turn
- **Movement Bonus**: +1 ground movement
- **Affinity**: Black/Green magic

#### Thunder Wyvern ⚡
- **Type**: Flying
- **Passive**: *Storm Caller* - Create lightning hazards behind you
- **Movement Bonus**: +1 speed in storms
- **Affinity**: Yellow magic spells cost -1

---

### **UNICORNS** (Healing/Support)

#### Crystal Unicorn 💎
- **Type**: Ground
- **Passive**: *Purifying Aura* - Remove 1 curse/debuff each turn
- **Movement Bonus**: +2 to STRAIGHT ground movement
- **Affinity**: White magic, healing spells +2 power

#### Nightmare Unicorn 🌑
- **Type**: Ground (Phasing)
- **Passive**: *Fear Aura* - Adjacent opponents -1 movement
- **Movement Bonus**: Can phase through 1 obstacle per turn
- **Affinity**: Black magic spells cost -1

---

### **MANTICORES** (Hybrid Aggressive)

#### Scorpion Manticore 🦂
- **Type**: Ground/Flying
- **Passive**: *Tail Spike* - Can attack opponents up to 3 segments away
- **Movement Bonus**: +1 to aggressive spell range
- **Affinity**: Red/Black magic

---

### **THUNDERBIRDS** (Storm/Speed)

#### Azure Thunderbird ⚡
- **Type**: Flying
- **Passive**: *Call Lightning* - Generate storm clouds that boost your speed
- **Movement Bonus**: +2 movement during storms
- **Affinity**: Yellow magic spells +2 power

---

### **CHIMERA** (Multi-Element Chaos)

#### Tri-Element Chimera 🔥❄️⚡
- **Type**: Ground/Flying
- **Passive**: *Elemental Shift* - Choose fire/ice/lightning element each turn
- **Movement Bonus**: Adapt to any element hazard
- **Affinity**: Can use any 2 magic colors at -1 cost

---

### **ROCS** (Massive Fliers)

#### Giant Roc 🦅
- **Type**: Flying
- **Passive**: *Massive Wings* - Ascending grants +2 movement
- **Movement Bonus**: Can carry/push other mounts
- **Affinity**: Neutral to all magic

---

### **SKY SERPENTS** (Agile Fliers)

#### Jade Sky Serpent 🐍
- **Type**: Flying (Ultra-agile)
- **Passive**: *Serpentine Dodge* - Ignore first hazard each turn
- **Movement Bonus**: +1 to all turning movement
- **Affinity**: Green/Blue magic

---

### **NIGHTMARE STEEDS** (Shadow/Speed)

#### Abyssal Nightmare 🌑
- **Type**: Ground (Shadow)
- **Passive**: *Shadow Step* - Teleport 2 segments once per lap
- **Movement Bonus**: +3 ground speed in darkness
- **Affinity**: Black magic spells +2 power

---

---

## 🧙‍♀️ Wizard Types (8 Magic Schools)

### **GREEN WIZARD** - Nature Magic 🌿

**Name**: Verdant Sage
**Specialization**: Growth, Beasts, Vines, Terrain

**Rider Ability**: *Living Terrain*
- Once per lap, create a vine bridge over hazard or gap
- Green spells gain +1 XP generation

**Deck Contents** (Nature School):
- Beast summoning spells
- Vine grapple/entangle abilities
- Growth acceleration (momentum boost)
- Terrain transformation
- Healing through nature
- Animal companion cards

**Thematic Strengths**:
- Strong terrain control
- Healing and recovery
- Summoning support creatures
- Momentum manipulation

---

### **RED WIZARD** - Fire & Chaos Magic 🔥

**Name**: Pyromancer
**Specialization**: Destruction, Speed, Randomness, Aggression

**Rider Ability**: *Wildfire Rush*
- Once per lap, gain +3 movement but leave burning trail behind
- Red spells gain +1 power

**Deck Contents** (Fire/Chaos School):
- Direct damage spells
- Speed burst abilities
- Chaotic teleportation
- Burning hazards
- Rage/berserk effects
- Explosive movement

**Thematic Strengths**:
- High-risk, high-reward plays
- Aggressive disruption
- Speed spikes
- Area denial through fire

---

### **BLUE WIZARD** - Water & Ice Magic ❄️

**Name**: Frost Mage
**Specialization**: Control, Freezing, Slowing, Precision

**Rider Ability**: *Frozen Time*
- Once per lap, freeze an opponent in place for 1 turn
- Blue spells can slow multiple targets

**Deck Contents** (Water/Ice School):
- Freezing effects (slow opponents)
- Ice barriers (create obstacles)
- Flow manipulation (change momentum)
- Tidal surge (push/pull)
- Crystallize (freeze hazards)
- Precision movement

**Thematic Strengths**:
- Opponent control
- Defensive play
- Hazard mitigation
- Tactical positioning

---

### **WHITE WIZARD** - Light & Holy Magic ✨

**Name**: Radiant Cleric
**Specialization**: Protection, Healing, Purification, Shields

**Rider Ability**: *Divine Protection*
- Immune to first negative effect each lap
- White spells grant temporary shields

**Deck Contents** (Light/Holy School):
- Shield spells
- Healing abilities
- Curse removal
- Blessing buffs
- Smite (damage to dark creatures)
- Radiant barriers

**Thematic Strengths**:
- Defensive mastery
- Sustain and recovery
- Anti-curse/debuff
- Consistent protection

---

### **BLACK WIZARD** - Shadow & Necromancy 🌑

**Name**: Shadowmancer
**Specialization**: Curses, Fear, Draining, Death

**Rider Ability**: *Life Drain*
- Damaging opponents heals you
- Black spells gain +1 range

**Deck Contents** (Shadow/Death School):
- Curse effects
- Fear (opponents discard cards)
- Life drain
- Shadow step (teleport)
- Undead summons
- Decay (damage over time)

**Thematic Strengths**:
- Opponent debuffs
- Resource denial
- Attrition strategies
- Tactical teleportation

---

### **PURPLE WIZARD** - Arcane & Illusion Magic 🔮

**Name**: Illusionist
**Specialization**: Teleportation, Misdirection, Copying, Reality Bending

**Rider Ability**: *Mirror Image*
- Create illusory copy that can take 1 hit
- Purple spells can target any opponent

**Deck Contents** (Arcane/Illusion School):
- Teleportation
- Spell copying
- Swap positions
- Invisibility (phase through)
- Clone effects
- Portal creation

**Thematic Strengths**:
- Unpredictability
- Reactive plays
- Teleportation tactics
- Mind games

---

### **YELLOW WIZARD** - Lightning & Storm Magic ⚡

**Name**: Stormcaller
**Specialization**: Speed, Shocking, Weather Control, Energy

**Rider Ability**: *Thunderbolt*
- Strike target with lightning for damage and stun
- Yellow spells gain +1 movement

**Deck Contents** (Storm/Lightning School):
- Lightning strikes
- Speed bursts
- Chain lightning (multi-target)
- Storm creation
- Static shock (area damage)
- Energize (boost adjacent cards)

**Thematic Strengths**:
- Speed focus
- Multi-target damage
- Weather manipulation
- Energy acceleration

---

### **BROWN WIZARD** - Earth & Crystal Magic 🪨

**Name**: Geomancer
**Specialization**: Defense, Obstacles, Terrain, Durability

**Rider Ability**: *Stone Skin*
- Take 50% less damage from all sources
- Brown spells create persistent obstacles

**Deck Contents** (Earth/Crystal School):
- Rock barriers
- Crystal shields
- Earthquake (disrupt everyone)
- Petrify (stun opponents)
- Mountain path (ignore terrain)
- Stone form (immune to damage 1 turn)

**Thematic Strengths**:
- Extreme durability
- Obstacle creation
- Terrain control
- Defensive positioning

---

---

## 🎴 Deck Construction System

### **Pre-Race Setup**

1. **Select Wizards for Race** (2-4 wizards recommended)
   - Example: Green Wizard + Red Wizard race

2. **Construct Shared Deck Pool**
   - Add Green Wizard deck (30 cards)
   - Add Red Wizard deck (30 cards)
   - Add 1 Random/Neutral deck OR players vote on 3rd school
   - Shuffle all together → **Combined Pool** (60-90 cards)

3. **Draft Phase** (Optional variant)
   - **Variant A**: Each player draws 10 cards, drafts deck building-style
   - **Variant B**: Shared marketplace like original game
   - **Variant C**: Each player gets 5 Green + 5 Red + 5 Random starter

4. **Starter Spells**
   - All players start with 10 neutral movement spells (like original starter deck)
   - Basic STRAIGHT, LEFT, RIGHT movements with minimal effects

---

### **Deck Building During Race**

**Spell Shops** (replace AutoShop/ChopShop):
- **Apprentice Sanctum** (Early game) - Simple spells from chosen schools
- **Master's Tower** (After lap 1) - Advanced spells, school-specific powers
- **Forbidden Library** (After lap 2) - Legendary spells, chaotic effects

**XP System**: Same as original
- Gain XP from spell cards
- Spend XP to purchase new spells from shops
- More powerful spells cost more XP

---

## 🌈 Movement System

### **Classic Movement** (Ground)
- STRAIGHT
- LEFT
- RIGHT
- STRAIGHT_OR_LEFT
- STRAIGHT_OR_RIGHT
- LEFT_OR_RIGHT
- WILD

### **NEW: Flying Movement** (Altitude)
- ASCEND (gain altitude)
- DESCEND (lose altitude)
- LEVEL_FLIGHT (maintain altitude)
- DIVE (descend + bonus movement)
- SOAR (ascend + bonus movement)

### **NEW: Teleportation Movement**
- BLINK (teleport 2-4 segments, chosen direction)
- PORTAL (create entry/exit portals)
- SWAP (trade positions with another racer)

### **NEW: Phasing Movement**
- PHASE_THROUGH (ignore 1 obstacle)
- ETHEREAL (move through other racers this turn)
- SHADOW_STEP (teleport to shadows only)

---

## ✨ New Magical Abilities (40+ Spell Types)

### **🌿 Nature Magic Abilities** (Green)

**ENTANGLE** (x segments)
- Target opponent within x segments is rooted (skip next turn)
- VALUE: 4

**BEAST_COMPANION** (x turns)
- Summon animal that copies your movement for x turns
- VALUE: 3

**VERDANT_GROWTH**
- Heal 2 damage and gain +1 movement this turn
- VALUE: 3

**VINE_GRAPPLE** (x segments)
- Pull yourself to any point within x segments (terrain/mount)
- VALUE: 4

**WILD_SHAPE**
- Transform mount into different creature type for 1 turn
- VALUE: 3.5

---

### **🔥 Fire/Chaos Magic Abilities** (Red)

**FIREBALL** (x segments)
- Deal 2 damage to target within x segments
- VALUE: 3

**CHAOS_BOLT**
- Teleport 1d6 segments in random direction (risk/reward)
- VALUE: 2.5

**INFERNO_TRAIL**
- Leave burning path that deals 1 damage to followers (3 turns)
- VALUE: 3

**BLAZING_SPEED**
- +3 movement this turn, take 1 damage
- VALUE: 3

**METEOR_STRIKE**
- Deal 1 damage to ALL opponents, including self
- VALUE: 4

---

### **❄️ Water/Ice Magic Abilities** (Blue)

**FREEZE** (x segments)
- Target within x segments has -2 movement next turn
- VALUE: 3

**ICE_WALL**
- Create barrier that blocks 1 lane for 2 turns
- VALUE: 3

**TIDAL_PUSH** (x segments)
- Push or pull target x segments in any direction
- VALUE: 4

**CRYSTALLIZE**
- Turn next hazard into bonus movement (+2)
- VALUE: 2.5

**FROST_ARMOR**
- Gain SHIELD(2), but -1 movement
- VALUE: 3

---

### **✨ Light/Holy Magic Abilities** (White)

**DIVINE_SHIELD** (x)
- Gain x SHIELD tokens
- VALUE: 2 per shield

**PURIFY**
- Remove all curses/debuffs from self
- VALUE: 3

**BLESSING**
- Next card you play gains +2 movement
- VALUE: 3

**SMITE** (x segments)
- Deal 3 damage to shadow/undead mount within x segments
- VALUE: 2.5 (conditional)

**RADIANT_BARRIER**
- Create light wall, damages dark creatures passing through
- VALUE: 3

---

### **🌑 Shadow/Necromancy Abilities** (Black)

**CURSE_OF_WEAKNESS** (x segments)
- Target has -1 movement for 3 turns
- VALUE: 3.5

**FEAR**
- Target must discard 1 card from hand
- VALUE: 3

**LIFE_DRAIN** (x segments)
- Deal 1 damage, heal 1 damage
- VALUE: 3

**SHADOW_STEP** (x segments)
- Teleport to any shadow space within x segments
- VALUE: 4

**RAISE_DEAD**
- Return 1 forgotten spell to your hand
- VALUE: 3

---

### **🔮 Arcane/Illusion Abilities** (Purple)

**TELEPORT** (x segments)
- Move to any space within x segments (ignores obstacles)
- VALUE: 5

**MIRROR_SPELL**
- Copy last spell played by any opponent
- VALUE: 4

**INVISIBILITY**
- Phase through obstacles and mounts this turn
- VALUE: 3

**SWAP_POSITIONS** (x segments)
- Trade places with target within x segments
- VALUE: 4

**ILLUSION_COPY**
- Create fake version that takes 1 hit for you
- VALUE: 2.5

---

### **⚡ Lightning/Storm Abilities** (Yellow)

**LIGHTNING_BOLT** (x segments)
- Deal 2 damage to target, stun for 1 turn
- VALUE: 4

**CHAIN_LIGHTNING** (x segments)
- Deal 1 damage to target and 2 adjacent mounts
- VALUE: 4.5

**SPEED_OF_LIGHT**
- Gain +4 movement this turn
- VALUE: 4

**STORM_CALL**
- Create storm that boosts your movement +1 for 3 turns
- VALUE: 3

**ENERGIZE**
- Adjacent spells in sequence gain +1 movement
- VALUE: 3

---

### **🪨 Earth/Crystal Abilities** (Brown)

**STONE_WALL**
- Create obstacle that blocks path (permanent until destroyed)
- VALUE: 3.5

**EARTHQUAKE**
- All mounts (including you) take 1 damage, lose 1 movement
- VALUE: 3

**PETRIFY** (x segments)
- Stun target for 1 turn (skip their turn)
- VALUE: 4.5

**CRYSTAL_SHIELD**
- Gain SHIELD(3), cannot move this turn
- VALUE: 3

**MOUNTAIN_PATH**
- Ignore all terrain penalties this turn
- VALUE: 2.5

---

### **🌟 Neutral/Universal Abilities**

**TIME_WARP**
- Take an extra turn, then skip next turn
- VALUE: 5

**DISPEL_MAGIC**
- Remove all magical effects from target area
- VALUE: 3

**POLYMORPH** (x segments)
- Transform target mount into frog (skip turn, -3 movement next turn)
- VALUE: 5

**COUNTERSPELL**
- Negate target opponent's spell (reactive)
- VALUE: 4

**HASTE**
- Double your momentum this turn
- VALUE: 3.5

---

## 🏁 Track Types & Hazards

### **Multi-Dimensional Tracks**

**Ground Level** (0 altitude)
- Classic racing, all mounts can access
- Most obstacles here

**Sky Level** (1-3 altitude)
- Only flying mounts can access
- Fewer obstacles, but falling damage
- Wind currents (push/pull effects)

**Shadow Realm** (-1 altitude)
- Accessible via shadow magic
- Dangerous but shortcuts available
- Drain 1 HP per turn inside

**Elemental Planes** (Special zones)
- Fire Plane: +1 movement, 1 damage per turn
- Ice Plane: -1 movement, slippery (momentum +1)
- Storm Plane: Random lightning strikes
- Nature Plane: Healing, entangling vines

---

### **Magical Hazards**

**Arcane Barriers** - Block path, require magic to pass
**Mana Drains** - Reduce XP by 1
**Cursed Zones** - Apply random debuff
**Portal Rings** - Teleport to another portal
**Time Rifts** - Reverse movement direction
**Elemental Storms** - School-specific effects

---

## 🎯 Win Conditions

Same as original Momentum:
- First to complete X laps
- OR highest position after time limit
- OR most XP after set turns (variant)

---

## 📊 Balancing Philosophy

1. **Mount Passives** = Equivalent to ~2-3 cost in value
2. **Wizard Abilities** = Once per lap, ~4-5 cost effect
3. **Spell Costs** = Same formula as original (momentum + movement + ability + XP)
4. **School Affinity** = -1 cost for matching school spells
5. **Flying Movement** = Slightly higher cost but altitude advantage
6. **Teleportation** = Highest cost (VALUE 4-5) due to ignoring obstacles

---

## 🎨 Thematic Card Examples

### Green Nature Spell
**"Thornwhip"**
- Cost: 5
- Momentum: WILD (nature)
- Movement: STRAIGHT
- Ability: ENTANGLE(3)
- XP: 1
- *"Vines spring from the earth to snare your foes."*

### Red Chaos Spell
**"Chaos Blink"**
- Cost: 4
- Momentum: RANDOM (d6 roll)
- Movement: CHAOS_BOLT
- Ability: +2 movement OR take 1 damage (50/50)
- XP: 2
- *"Reality bends... but in which direction?"*

### Blue Control Spell
**"Frozen Moment"**
- Cost: 7
- Momentum: STRAIGHT
- Movement: None
- Ability: FREEZE(5) - Target -3 movement
- XP: 2
- *"Time itself crystallizes at your command."*

---

## 🔮 Expansion Ideas

**Team Racing** - 2v2 wizard partnerships
**Familiar System** - Pets that grant ongoing bonuses
**Enchanted Items** - Permanent upgrades for mount/wizard
**Campaign Mode** - Story-driven spell unlocks
**Seasonal Magic** - Different effects in spring/summer/fall/winter tracks

---

**Status**: Concept Complete - Ready for Implementation
**Next Steps**: Create card implementations, mount definitions, wizard abilities
