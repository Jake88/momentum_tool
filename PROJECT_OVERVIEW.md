# Project Overview: Momentum Deck Builder Tool

## What is this?

The **Momentum Deck Builder Tool** is a React-based web application designed to create, visualize, balance, and export game cards for **Drivers Momentum**, a racing board game that combines deck-building mechanics with track racing and programming elements.

## Purpose

This tool serves as a **game design development environment** that allows designers to:
- Design and visualize game cards with consistent formatting
- Balance card mechanics through automated cost calculations
- Analyze card distributions and statistics across different card sets
- Export production-ready card images for printing or digital use

## The Game: Drivers Momentum

**Drivers Momentum** is a fast-paced racing board game featuring:
- **Deck building**: Players acquire and refine their deck of movement/ability cards
- **Track building**: Modular track pieces create unique racing experiences
- **Programming mechanics**: Players program their moves face-down before revealing
- **Tactical gameplay**: Offensive (hooks, oil), defensive (shields), and utility abilities
- **Player progression**: Two-phase gameplay with basic cards transitioning to advanced cards mid-race

## Technology Stack

- **React 17** - UI framework
- **Styled Components** - CSS-in-JS styling solution
- **dom-to-image** - Card image export functionality
- **FileSaver.js** - File download handling
- **Create React App** - Build tooling and development environment

## Project Structure

```
momentum_tool/
├── documentation/           # Game design documents
│   ├── ABILITY_GLOSSARY.md # Complete ability reference
│   └── GAME_DESIGN.md      # Game rules and design notes
├── public/                  # Static assets
├── src/
│   ├── cards/
│   │   ├── cardSets/       # Card definitions (Starter, Basic, Advanced, etc.)
│   │   ├── cardUtils/      # Card creation and statistics utilities
│   │   ├── Card.js         # Card visualization component
│   │   └── CardBack.js     # Card back design
│   ├── cardSaver/          # Card export functionality
│   ├── sidebar/            # UI controls and filtering
│   ├── drivers/            # Driver power definitions (WIP)
│   ├── constants/          # Game variables and styling
│   └── App.js              # Main application
└── README.md               # Quick start guide
```

## Core Features

### 1. Card Creation System
- **Programmatic card generation**: Use helper functions to create cards with consistent IDs
- **Automated cost calculation**: Card costs are calculated based on movement value, abilities, and XP gain
- **Manual cost override**: Designers can override automated costs for fine-tuning
- **Card copying**: Easily create multiple copies of the same card design

### 2. Card Types and Sets

**Starter Cards** (10 cards)
- Basic movement cards every player begins with
- Zero cost, foundational movements

**Basic Cards / AutoShop**
- First marketplace available to players
- Core gameplay cards focusing on movement improvements

**Advanced Cards / ChopShop**
- Unlocked mid-game after first lap
- More powerful cards with complex abilities

**Unique Cards**
- Special one-of-a-kind cards
- Power spike opportunities after completing laps

### 3. Movement System

Seven movement types with varying tactical value:
- `STRAIGHT` - Move forward (Value: 1)
- `LEFT` - Turn left (Value: 1)
- `RIGHT` - Turn right (Value: 1)
- `STRAIGHT_OR_LEFT` - Choice of two movements (Value: 2)
- `STRAIGHT_OR_RIGHT` - Choice of two movements (Value: 2)
- `LEFT_OR_RIGHT` - Choice of two movements (Value: 2)
- `WILD` - Choice of any movement (Value: 3)

**Momentum**: Most cards include a momentum symbol that provides additional movement before the next card is revealed.

### 4. Ability System

**Offensive Abilities**
- `HOOK`: Pull opponents backward
- `OIL SLICK`: Leave hazards on the track
- `OBSTACLE`: Block track sections

**Defensive Abilities**
- `SHIELD`: Protect against negative effects
- `STEADFAST`: Resist bumping

**Utility Abilities**
- `BOOST`: Enhance adjacent cards
- `GRAPPLE`: Attach to and follow opponents
- `DRAW`: Draw additional cards next turn
- `FORGET`: Remove cards from your deck
- `LAST_STRETCH`: Bonus when played as final card

**Combo Abilities**
- `CHAINLINK`: Hook + Grapple combination
- `OFFLOAD`: Forget + Obstacle combination

### 5. Statistics & Balancing

The tool calculates comprehensive statistics for any card set:
- **Card count**: Total cards in the set
- **Movement distribution**: Percentage of each movement type
- **Cost analysis**: Min, max, average, and per-hand cost
- **XP generation**: Total and average XP gain
- **Movement possibilities**: How many cards can perform each movement type

### 6. Card Visualization & Export

- **Live preview**: See cards rendered as they'll appear in game
- **Consistent formatting**: Automated layout ensures professional appearance
- **Batch export**: Export entire card sets as PNG images
- **Card back template**: Standard back design included

### 7. Filtering & Sorting

Sort cards by:
- XP Gain
- Cost
- Movement Type

Filter by card set:
- All cards
- Starter cards
- Basic/AutoShop cards
- Advanced/ChopShop cards
- Unique cards

## How to Use

### Development Mode
```bash
npm install
npm start
```
Open http://localhost:3000

### Creating New Cards

1. Navigate to `/src/cards/cardSets/`
2. Create or open a card set file
3. Use the helper functions:

```javascript
import { createCardSet, createAddCopiesFunction } from '../cardUtils/cardUtils'
import { MOVEMENT_ICON, CARD_ABILITY } from '../cardUtils/cardConstants'

// Initialize card set
const createCard = createCardSet('My New Set')
const createCopies = createAddCopiesFunction(createCard)

// Create a single card
const myCard = createCard({
  name: 'Speed Demon',
  momentum: MOVEMENT_ICON.STRAIGHT,
  movement: [MOVEMENT_ICON.STRAIGHT],
  xpGain: 2,
  ability: CARD_ABILITY.BOOST(1),
  costModifier: 1 // Optional: adjust calculated cost
})

// Create multiple copies
const multipleCards = createCopies(3, {
  name: 'Basic Turn',
  momentum: MOVEMENT_ICON.LEFT,
  xpGain: 1
})
```

4. Export your card array
5. Import in `/src/cards/index.js`
6. Add to sidebar filters

### Exporting Cards

1. Select a card set from the sidebar
2. Note the card ID prefix (shown in console)
3. Enter the prefix in the "Card Saver" input
4. Click "Save cards"
5. Cards download as individual PNG files

### Analyzing Balance

Open browser console when viewing a card set to see detailed statistics:
```javascript
{
  cardCount: 15,
  movementStats: { /* distribution data */ },
  cost: { sum, min, max, avg, avgPerHand },
  xpGain: { sum, min, max, avg, avgPerHand }
}
```

## Design Philosophy

### Automated Cost Calculation
Cards are priced based on:
- Base movement value (1-3)
- Additional movement symbols
- Ability value (2-5 depending on ability)
- XP gain (direct addition)
- Manual cost modifier for fine-tuning

This ensures consistent pricing while allowing designer override when combos create unexpected power levels.

### Playtesting Integration
The tool is actively used alongside physical playtesting (see `GAME_DESIGN.md`). Statistics help designers:
- Ensure movement type distribution matches track design
- Balance XP economy with card costs
- Verify players can afford cards within expected gameplay

### Modular Card Sets
The two-phase approach (Basic → Advanced) creates:
- Natural game progression
- Power spike moments
- Deck refinement opportunities
- Replayability through different card combinations

## Future Considerations

While this tool is functional, several planned game features are not yet implemented:
- Driver powers system (placeholder exists in `/src/drivers/`)
- Mechanic/permanent upgrade cards
- Sponsor cards with drawbacks
- Game variant cards for longer play sessions
- AI deck management tools
- Track power-up tokens

See `TECHNICAL_DEBT.md` and `FEATURE_ROADMAP.md` for detailed improvement plans.

## Contributing

When adding new card sets or abilities:
1. Follow existing patterns in `/src/cards/cardSets/`
2. Use the helper functions for consistency
3. Add ability definitions to `cardConstants.js`
4. Test statistics output for balance
5. Update documentation as needed

## Links

- [Game Design Document](documentation/GAME_DESIGN.md) - Rules, playtesting notes, design ideas
- [Ability Glossary](documentation/ABILITY_GLOSSARY.md) - Complete ability reference
- [README](README.md) - Quick start guide
