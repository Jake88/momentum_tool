# 🧙‍♂️ Magical Momentum

**A spell-based racing game where wizards mount magical creatures and compete in the legendary Skyrace Championships.**

---

## 🎮 What is Magical Momentum?

Magical Momentum is a complete game spin-off of the Drivers Momentum racing game, transformed into a magical fantasy setting where:

- **Vehicles** → **Magical Creatures** (Dragons, Hippogriffs, Pegasus, etc.)
- **Drivers** → **Wizards** (Color-coded magic schools)
- **Movement Cards** → **Spell Cards** (School-specific magic)
- **Programming** → **Spellcasting** (Sequence spells for combos)
- **Track** → **Mystic Courses** (Multi-altitude with magical hazards)

---

## 📁 Project Structure

```
magical_momentum/
├── README.md                          # This file
├── docs/
│   └── GAME_DESIGN.md                # Complete game design document
├── src/
│   ├── mounts/
│   │   └── mountDefinitions.ts       # 22 magical creatures with abilities
│   ├── wizards/
│   │   └── wizardDefinitions.ts      # 8 wizard types & magic schools
│   ├── spells/
│   │   └── spellAbilities.ts         # 60+ spell abilities across all schools
│   └── cards/
│       ├── natureSpells.ts           # Nature (Green) spell deck (30 cards)
│       ├── fireSpells.ts             # Fire (Red) spell deck (32 cards)
│       └── iceSpells.ts              # Ice (Blue) spell deck (31 cards)
```

---

## 🐉 Magical Creatures (22 Mounts)

### Dragons (4 types)
- **Ember Dragon** - Leaves burning trails
- **Frost Wyrm** - Freezes obstacles
- **Storm Dragon** - Thrives in storms
- **Shadow Dragon** - Phases through reality

### Hippogriffs (2 types)
- **Silverwind Hippogriff** - Immune to fear/curses
- **Earthbound Hippogriff** - Master of all terrains

### Pegasus (2 types)
- **Sunburst Pegasus** - Heals each lap
- **Moonlight Pegasus** - Enhanced night movement

### Griffins (2 types)
- **Royal Griffin** - Predatory focus
- **Stormclaw Griffin** - Dive attack specialist

### Phoenix (2 types)
- **Eternal Phoenix** - Resurrects from death
- **Frost Phoenix** - Sacrifice movement to heal

### Wyverns (2 types)
- **Poison Wyvern** - Damages followers
- **Thunder Wyvern** - Creates lightning hazards

### Unicorns (2 types)
- **Crystal Unicorn** - Purifies debuffs
- **Nightmare Unicorn** - Slows adjacent opponents

### Others (6 types)
- **Scorpion Manticore** - Long-range attacks
- **Azure Thunderbird** - Generates storm clouds
- **Tri-Element Chimera** - Shifts between fire/ice/lightning
- **Giant Roc** - Massive carrier
- **Jade Sky Serpent** - Agile dodger
- **Abyssal Nightmare** - Shadow teleportation

**Each mount has**:
- Unique passive ability
- Movement bonus
- Magic school affinity (spell cost reduction)
- HP and special mechanics

---

## 🧙 Wizards & Magic Schools (8 Types)

### 🌿 Green Wizard - Nature Magic
- **Name**: Verdant Sage
- **Ability**: Living Terrain (create vine bridges)
- **Deck Theme**: Growth, beasts, vines, healing, terrain control

### 🔥 Red Wizard - Fire & Chaos Magic
- **Name**: Pyromancer
- **Ability**: Wildfire Rush (+3 speed, burning trail)
- **Deck Theme**: Destruction, speed, randomness, aggression

### ❄️ Blue Wizard - Ice & Water Magic
- **Name**: Frost Mage
- **Ability**: Frozen Time (freeze opponent)
- **Deck Theme**: Control, slowing, precision, defense

### ✨ White Wizard - Light & Holy Magic
- **Name**: Radiant Cleric
- **Ability**: Divine Protection (immunity to first debuff)
- **Deck Theme**: Protection, healing, shields, purification

### 🌑 Black Wizard - Shadow & Necromancy
- **Name**: Shadowmancer
- **Ability**: Life Drain (heal from damage dealt)
- **Deck Theme**: Curses, life drain, fear, teleportation

### 🔮 Purple Wizard - Arcane & Illusion
- **Name**: Illusionist
- **Ability**: Mirror Image (create decoy)
- **Deck Theme**: Teleportation, spell copying, reality bending

### ⚡ Yellow Wizard - Lightning & Storm
- **Name**: Stormcaller
- **Ability**: Thunderbolt (lightning strike)
- **Deck Theme**: Speed, multi-target damage, weather control

### 🪨 Brown Wizard - Earth & Crystal
- **Name**: Geomancer
- **Ability**: Stone Skin (50% damage reduction)
- **Deck Theme**: Durability, obstacles, terrain, defense

---

## 🎴 Deck Construction System

### Pre-Race Setup

1. **Select Wizards** (2-4 recommended)
   - Example: Green Wizard + Red Wizard

2. **Build Shared Pool**
   - Green deck (30 spells)
   - Red deck (30 spells)
   - Optional: 1 Neutral or Random school (20-30 spells)
   - **Total: 60-90 spells**

3. **Draft/Marketplace**
   - **Variant A**: Shared marketplace (like original game)
   - **Variant B**: Draft-style deck building
   - **Variant C**: Split starters (5 green + 5 red + 5 neutral per player)

### Spell Shops (During Race)

- **Apprentice Sanctum** (Early game) - Simple spells
- **Master's Tower** (After lap 1) - Advanced spells
- **Forbidden Library** (After lap 2) - Legendary spells

---

## ✨ Spell Abilities (60+ Total)

### 🌿 Nature Abilities (7)
- **ENTANGLE** - Root opponents (skip turn)
- **BEAST_COMPANION** - Summon ally that copies movement
- **VERDANT_GROWTH** - Heal + movement bonus
- **VINE_GRAPPLE** - Pull yourself across terrain
- **WILD_SHAPE** - Transform mount type
- **THORNWHIP** - Pull opponents backward
- **REGROWTH** - Recover forgotten spells + heal

### 🔥 Fire Abilities (7)
- **FIREBALL** - Direct damage
- **CHAOS_BOLT** - Random teleportation
- **INFERNO_TRAIL** - Leave burning path
- **BLAZING_SPEED** - +3 movement, 1 self-damage
- **METEOR_STRIKE** - AOE damage (hits all)
- **WILDFIRE** - Power spike, then forget spell
- **EXPLOSIVE_RUNE** - Place fire trap

### ❄️ Ice Abilities (7)
- **FREEZE** - Reduce opponent movement
- **ICE_WALL** - Block lane
- **TIDAL_PUSH** - Push/pull opponents
- **CRYSTALLIZE** - Turn hazards into bonuses
- **FROST_ARMOR** - Shield at cost of movement
- **GLACIAL_PATH** - Create safe passage
- **ABSOLUTE_ZERO** - Complete freeze (stun)

### ✨ Light Abilities (7)
- **DIVINE_SHIELD** - Gain shield tokens
- **PURIFY** - Remove debuffs
- **BLESSING** - Boost next spell
- **SMITE** - Damage shadow/undead mounts
- **RADIANT_BARRIER** - Light wall damages dark mounts
- **SACRED_FLAME** - AOE vs dark mounts
- **RESURRECTION** - Recover from elimination

### 🌑 Shadow Abilities (7)
- **CURSE_OF_WEAKNESS** - Reduce movement (3 turns)
- **FEAR** - Force discard
- **LIFE_DRAIN** - Damage + heal
- **SHADOW_STEP** - Teleport to shadows
- **RAISE_DEAD** - Return forgotten spell
- **DARKNESS** - Create shadow zone
- **SOUL_SHACKLE** - Link damage to opponent

### 🔮 Arcane Abilities (8)
- **TELEPORT** - Move anywhere (ignores obstacles)
- **MIRROR_SPELL** - Copy opponent spell
- **INVISIBILITY** - Phase through obstacles
- **SWAP_POSITIONS** - Trade places
- **ILLUSION_COPY** - Create decoy
- **PORTAL** - Create linked portals
- **BLINK** - Short-range teleport
- **COUNTERSPELL** - Negate opponent spell

### ⚡ Storm Abilities (7)
- **LIGHTNING_BOLT** - Damage + stun
- **CHAIN_LIGHTNING** - Multi-target damage
- **SPEED_OF_LIGHT** - +4 movement
- **STORM_CALL** - Create storm (+1 movement, 3 turns)
- **ENERGIZE** - Boost adjacent spells
- **THUNDERCLAP** - AOE to adjacent
- **STATIC_CHARGE** - Next spell +1 damage

### 🪨 Earth Abilities (7)
- **STONE_WALL** - Permanent obstacle
- **EARTHQUAKE** - AOE damage + slow
- **PETRIFY** - Stun opponent
- **CRYSTAL_SHIELD** - Shield(3), can't move
- **MOUNTAIN_PATH** - Ignore terrain
- **QUICKSAND** - Create trap
- **STONE_FORM** - Immune to damage, -2 movement

### 🌟 Universal Abilities (7)
- **TIME_WARP** - Extra turn, skip next
- **DISPEL_MAGIC** - Remove all effects in area
- **POLYMORPH** - Transform into frog
- **HASTE** - Double momentum
- **SLOW** - Half opponent movement
- **MANA_SURGE** - Gain +2 XP
- **ETHEREAL_FORM** - Phase through obstacles

---

## 🃏 Spell Cards (93 Cards Implemented)

### Nature Deck (30 cards)
- **Rarity**: 14 Common, 11 Uncommon, 4 Rare, 1 Legendary
- **Average Cost**: ~6 XP
- **Focus**: Healing, terrain control, summoning, grappling

**Sample Cards**:
- **Thornwhip** (Cost 5) - WILD momentum, ENTANGLE(3), 1 XP
- **Nature's Blessing** (Cost 7) - STRAIGHT + STRAIGHT, VERDANT_GROWTH, 2 XP
- **Vine Swing** (Cost 9) - STRAIGHT + WILD, VINE_GRAPPLE(4), 1 XP

### Fire Deck (32 cards)
- **Rarity**: 13 Common, 12 Uncommon, 6 Rare, 1 Legendary
- **Average Cost**: ~6 XP
- **Focus**: Damage, speed, chaos, area denial

**Sample Cards**:
- **Fireball** (Cost 6) - STRAIGHT + STRAIGHT, FIREBALL(4), 1 XP
- **Chaos Blink** (Cost 5) - WILD, CHAOS_BOLT, 2 XP, -1 modifier
- **Meteor Swarm** (Cost 10) - STRAIGHT + WILD, METEOR_STRIKE, 3 XP [LEGENDARY]

### Ice Deck (31 cards)
- **Rarity**: 13 Common, 10 Uncommon, 6 Rare, 2 Legendary
- **Average Cost**: ~6 XP
- **Focus**: Control, slowing, precision, defense

**Sample Cards**:
- **Frost Bolt** (Cost 6) - STRAIGHT + STRAIGHT, FREEZE(4), 1 XP
- **Tidal Wave** (Cost 9) - STRAIGHT + WILD, TIDAL_PUSH(3), 2 XP
- **Absolute Zero** (Cost 11) - WILD + STRAIGHT, ABSOLUTE_ZERO(3), 3 XP [LEGENDARY]

---

## 🏁 Movement System

### Classic Movement (Ground)
- STRAIGHT, LEFT, RIGHT
- STRAIGHT_OR_LEFT, STRAIGHT_OR_RIGHT
- LEFT_OR_RIGHT
- WILD (any direction)

### Flying Movement (Altitude)
- ASCEND (gain altitude)
- DESCEND (lose altitude)
- DIVE (descend + bonus movement)
- SOAR (ascend + bonus movement)

### Magical Movement
- TELEPORT (instant repositioning)
- BLINK (short-range teleport)
- PORTAL (create linked entry/exit)
- PHASE (move through obstacles)
- SWAP (trade positions with opponent)

---

## 🎯 Example Race Setup

### **2-Player Race: Nature vs Fire**

**Wizards**: Green Wizard + Red Wizard
**Deck Pool**:
- 30 Nature spells
- 32 Fire spells
- 20 Neutral spells
- **Total**: 82 spells

**Mounts**:
- Player 1: Earthbound Hippogriff (Nature affinity)
- Player 2: Ember Dragon (Fire affinity)

**Starter Spells**: Each player gets 10 neutral movement spells

**Gameplay**:
- Player 1 buys Nature spells at -1 cost (mount affinity)
- Player 2 buys Fire spells at -1 cost (mount affinity)
- Both can purchase from neutral pool at full cost
- Deck builds create unique playstyles each race

---

## 🌟 Key Features

### Mount Passives
Each creature has a unique passive ability worth 2-5 cost value:
- Resurrection (Phoenix)
- Phase through obstacles (Shadow Dragon)
- Auto-cleanse debuffs (Crystal Unicorn)
- Leave hazards (Poison Wyvern, Ember Dragon)

### Wizard Abilities
Once-per-lap or always-active rider abilities:
- Create terrain (Green Wizard)
- Speed burst (Red Wizard)
- Freeze opponents (Blue Wizard)
- Life drain (Black Wizard)

### School Synergies
Some wizard pairs have special synergy bonuses:
- **Fire + Storm**: "Elemental Fury" - Damage spells +1 damage
- **Nature + Earth**: "Forces of Nature" - Obstacle spells permanent
- **Light + Shadow**: "Eternal Conflict" - All spells +1 XP but +1 cost

### Rivalries
Opposing schools counter each other:
- **Fire vs Ice**: Fire melts ice obstacles, Ice extinguishes fire
- **Light vs Shadow**: Light deals double to shadow, Shadow ignores light shields
- **Nature vs Fire**: Fire burns nature, Nature smothers fire

---

## 📊 Balance Overview

### Mount Balance
- **HP Range**: 5-10 (average 7)
- **Passive Value**: 2-5 cost equivalent
- **Affinity Discount**: -1 cost for school spells

### Spell Balance
- **Cost Formula**: `momentum + movement + ability + XP + modifier`
- **Average Cost**: ~6 XP per spell
- **Rarity Distribution**:
  - Common: ~40-45% (low cost, simple)
  - Uncommon: ~35-40% (mid cost, tactical)
  - Rare: ~15-20% (high cost, powerful)
  - Legendary: ~1-5% (very high cost, game-changing)

### Ability Values
- **Simple**: 2-2.5 (Oil, Sabotage, Shields)
- **Tactical**: 3-4 (Entangle, Freeze, Grapple)
- **Powerful**: 4-5 (Teleport, Mirror, Absolute Zero, Petrify)

---

## 🎨 Thematic Design

### Nature School (Green)
**Keyword**: Growth
**Strategy**: Heal, terrain control, outlast opponents
**Weakness**: Less direct damage

### Fire School (Red)
**Keyword**: Destruction
**Strategy**: Aggression, speed spikes, chaos
**Weakness**: Self-damage, risky plays

### Ice School (Blue)
**Keyword**: Control
**Strategy**: Slow opponents, block lanes, precision
**Weakness**: Limited offensive power

### Light School (White)
**Keyword**: Protection
**Strategy**: Shields, healing, sustain
**Weakness**: Reactive, less proactive

### Shadow School (Black)
**Keyword**: Attrition
**Strategy**: Curses, life drain, fear
**Weakness**: Vulnerable to burst damage

### Arcane School (Purple)
**Keyword**: Chaos
**Strategy**: Teleportation, unpredictability, copying
**Weakness**: High variance, skill-dependent

### Storm School (Yellow)
**Keyword**: Speed
**Strategy**: Fast movement, multi-target damage
**Weakness**: Glass cannon (low HP mounts)

### Earth School (Brown)
**Keyword**: Endurance
**Strategy**: Extreme durability, obstacles
**Weakness**: Slow, low mobility

---

## 🚀 Future Expansion Ideas

### Additional Mount Types
- **Sea Serpents** (underwater racing)
- **Faerie Dragons** (tiny, ultra-agile)
- **Bone Dragons** (necromancy specialists)
- **Celestial Tigers** (divine ground mounts)

### New Magic Schools
- **Pink/Love Magic** - Charm, alliance, support
- **Orange/Chaos Magic** - Pure randomness
- **Void/Cosmic Magic** - Reality manipulation
- **Time Magic** - Turn manipulation

### Game Modes
- **Team Racing** - 2v2 wizard partnerships
- **Grand Prix** - Multi-race tournament
- **Boss Battles** - Race against AI-controlled mythical beasts
- **Draft Tournament** - Competitive deck building

### Track Environments
- **Elemental Planes** - Plane of Fire, Water, Air, Earth
- **Feywild Circuits** - Chaotic reality-bending tracks
- **Shadow Realm** - High-risk shortcut dimension
- **Celestial Pathways** - Divine sky tracks
- **Underdark Tunnels** - Subterranean racing

---

## 📖 How to Use This Project

### For Game Design
1. Review `docs/GAME_DESIGN.md` for complete rules
2. Check mount definitions in `src/mounts/`
3. Explore wizard abilities in `src/wizards/`
4. Study spell cards in `src/cards/`

### For Implementation
1. Import spell abilities from `src/spells/spellAbilities.ts`
2. Use mount definitions for creature selection
3. Reference wizard definitions for deck construction
4. Implement card drawing from school-specific decks

### For Playtesting
1. Select 2-3 wizards for the race
2. Combine their spell decks
3. Each player chooses a mount
4. Draft or build starting decks
5. Race and purchase spells during gameplay

---

## 📈 Statistics

### Total Content
- **Mounts**: 22 unique creatures
- **Wizards**: 8 magic schools
- **Spell Abilities**: 60+ unique abilities
- **Spell Cards**: 93 implemented cards (30 Nature, 32 Fire, 31 Ice)
- **Remaining Schools**: 5 (Light, Shadow, Arcane, Storm, Earth) - To be implemented

### Complexity
- **Movement Types**: 7 classic + 5 magical = 12 total
- **Altitude Levels**: Ground (0), Sky (1-3), Shadow (-1), Elemental planes
- **Deck Construction**: Modular (2-4 schools combined)

---

## 🎯 Design Philosophy

1. **School Identity**: Each magic school has distinct playstyle
2. **Mount Diversity**: 22 creatures cover all playstyles and affinities
3. **Tactical Depth**: Spells interact with terrain, altitude, and opponents
4. **Balance**: Costs calculated using same formula as original game
5. **Thematic Resonance**: Every spell feels magical and appropriate to its school
6. **Player Expression**: Deck building creates unique strategies each game

---

## 🛠️ Development Status

### ✅ Complete
- Game design document
- Mount definitions (22 creatures)
- Wizard definitions (8 schools)
- Spell abilities (60+ abilities)
- Nature spell deck (30 cards)
- Fire spell deck (32 cards)
- Ice spell deck (31 cards)

### 🚧 In Progress
- Light spell deck
- Shadow spell deck
- Arcane spell deck
- Storm spell deck
- Earth spell deck

### 📋 Planned
- Neutral/universal spell deck
- Track/course definitions
- Altitude mechanics
- Flying combat rules
- Visual card designs
- Playtest balancing

---

## 💡 Credits

**Original Game**: Drivers Momentum (racing car deck-builder)
**Magical Momentum**: Fantasy spin-off transformation

**Design**: Based on user request for magical creature racing with wizard spell decks

---

## 📜 License

This is a fan-created spin-off game concept. All mechanics and implementations are provided for personal use and playtesting.

---

**Ready to Race the Skies?** 🐉⚡🌿

Choose your wizard, mount your creature, and master the art of spellcasting to claim victory in the Skyrace Championships!
