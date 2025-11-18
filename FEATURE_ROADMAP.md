# Feature Roadmap

This document outlines new features to add and existing features to improve for the Momentum Deck Builder Tool.

## Status Legend
- 📋 **Planned** - Identified and prioritized, not started
- 🚧 **In Progress** - Currently being developed
- ✅ **Completed** - Implemented and tested
- 🎯 **High Impact** - Significant value to users/designers
- 💡 **Nice to Have** - Lower priority enhancements

---

## Game Content Features

### 📋 🎯 Driver Powers System
**Status**: Placeholder file exists (`src/drivers/driverPowers.js`)

**Description**: Implement the driver/character system that provides asymmetric starting powers.

**Requirements**:
- Create driver card designs with unique abilities
- Visual representation in the tool
- Export driver cards along with deck cards
- Balance calculations that account for driver powers
- Statistics showing driver power distribution

**Driver Power Examples** (from game design doc):
- Forgetful: Each discard, shuffle and forget one at random
- Druid: Special wild card interactions
- Ethereal: Immune to effects, can occupy occupied spaces

**Implementation Tasks**:
- [ ] Define driver power schema/structure
- [ ] Create driver card component (similar to Card.js)
- [ ] Add driver selection UI
- [ ] Create driver card sets (starter drivers)
- [ ] Add driver power value calculations
- [ ] Export functionality for driver cards
- [ ] Statistics for driver power balance

**Estimated Effort**: Large (2-3 weeks)

---

### 📋 🎯 Mechanic/Upgrade Cards
**Status**: Concept in game design doc

**Description**: Create permanent vehicle upgrade cards (engine, tires, transmission, etc.) that provide passive bonuses.

**Requirements**:
- Different card visual design (distinguish from movement cards)
- Separate marketplace/filter category
- Balance considerations for passive effects
- Integration with cost calculations

**Upgrade Categories**:
- Engine (speed/movement bonuses)
- Tires (corner handling)
- Transmission (momentum effects)
- Spoiler (stability/defense)
- Bumper bars (offensive capabilities)

**Implementation Tasks**:
- [ ] Define upgrade card schema
- [ ] Create upgrade card component with distinct styling
- [ ] Add UPGRADE_ABILITY constants
- [ ] Create upgrade card sets
- [ ] Add "Mechanic Shop" filter to sidebar
- [ ] Export functionality for upgrade cards
- [ ] Balance upgrade costs and effects

**Estimated Effort**: Large (2-3 weeks)

---

### 📋 Sponsor Cards
**Status**: Mentioned in game design doc

**Description**: Special cards that provide immediate benefits with long-term drawbacks.

**Requirements**:
- Visual design showing both positive and negative effects
- Clear indication of drawback (e.g., "LOAN: Gain 1, pay 2 to forget")
- Separate category in marketplace
- Cost balancing that accounts for drawback value

**Implementation Tasks**:
- [ ] Define sponsor card schema (benefit + drawback)
- [ ] Create sponsor card component with special styling
- [ ] Add SPONSOR_ABILITY constants
- [ ] Create sponsor card set
- [ ] Add "Sponsor" filter to sidebar
- [ ] Calculate negative value in cost formula
- [ ] Export functionality

**Estimated Effort**: Medium (1 week)

---

### 📋 AI Deck Cards
**Status**: Partial implementation in `src/cards/cardSets/MomentumAI/aiDeck.js`

**Description**: Create specialized cards for AI opponents to use during gameplay.

**Requirements**:
- Simplified decision-making cards
- Clear iconography for quick AI resolution
- Different back design to distinguish from player cards
- AI behavior rules integrated with card design

**AI Card Examples**:
- "Move forward 4, towards inside lane"
- "Drop oil slick"
- "Target leading player with hook"

**Implementation Tasks**:
- [ ] Complete AI card set implementation
- [ ] Create AI card component (simplified layout)
- [ ] Add AI targeting behavior annotations
- [ ] Add "AI Deck" filter to sidebar
- [ ] Create AI card back design
- [ ] Export functionality with different back
- [ ] Create multiple AI difficulty decks

**Estimated Effort**: Medium (1-2 weeks)

---

### 📋 Game Variant Cards
**Status**: Mentioned in game design doc

**Description**: Cards designed for longer gameplay variants (3+ laps, extended tracks).

**Requirements**:
- Different starting deck composition
- Modified draw/discard rules
- Balance for extended gameplay
- Clear variant indicators on cards

**Implementation Tasks**:
- [ ] Define variant game rules
- [ ] Create variant-specific card sets
- [ ] Add variant indicators to card design
- [ ] Add "Long Game Variant" filter (already exists: longGameVariationCards.js)
- [ ] Expand existing variant cards
- [ ] Balance for extended play
- [ ] Export with variant labels

**Estimated Effort**: Medium (1-2 weeks)

---

### 📋 💡 Learner Cards
**Status**: Mentioned in playtesting notes, file exists

**Description**: Tutorial/learning cards for new players with simplified mechanics.

**Requirements**:
- Clear, simple abilities
- Teaching annotations on cards
- Balanced for learning without being weak
- Progression path to regular cards

**Implementation Tasks**:
- [ ] Review existing learner cards
- [ ] Add tutorial text/annotations to design
- [ ] Create full learner card set
- [ ] Add "Learner Mode" filter
- [ ] Balance for new player experience
- [ ] Export with tutorial annotations

**Estimated Effort**: Small (3-5 days)

---

## Tool Features - Card Management

### 📋 🎯 Visual Card Editor
**Status**: Currently requires code changes to create cards

**Description**: Build a visual UI for creating and editing cards without coding.

**Requirements**:
- Form-based card creation
- Dropdown for movement types
- Dropdown for abilities
- Real-time cost calculation preview
- Live card preview
- Save custom cards to localStorage or JSON

**Implementation Tasks**:
- [ ] Design card editor UI/UX
- [ ] Create form components for card properties
- [ ] Add real-time validation
- [ ] Implement live preview
- [ ] Add save/load functionality
- [ ] Export custom card sets
- [ ] Import existing card definitions for editing

**Estimated Effort**: Large (3-4 weeks)

---

### 📋 🎯 Deck Builder Mode
**Status**: Currently shows individual cards only

**Description**: Create a mode for building and testing complete decks (combining multiple cards).

**Requirements**:
- Drag-and-drop deck building
- Track deck statistics (total cards, cost, movement distribution)
- Validate deck rules (min/max cards, starting deck composition)
- Save and load decks
- Compare multiple decks
- Export complete deck as image sheet

**Implementation Tasks**:
- [ ] Create deck builder UI
- [ ] Implement drag-and-drop functionality
- [ ] Add deck validation rules
- [ ] Calculate deck-level statistics
- [ ] Add deck save/load functionality
- [ ] Create deck comparison view
- [ ] Export deck sheets (multiple cards per page)
- [ ] Share decks (export to JSON)

**Estimated Effort**: Large (3-4 weeks)

---

### 📋 Card Versioning System
**Status**: No versioning currently

**Description**: Track different versions of cards as they're balanced through playtesting.

**Requirements**:
- Version numbers on cards
- Changelog tracking
- Compare versions side-by-side
- Revert to previous versions
- Export specific versions

**Implementation Tasks**:
- [ ] Add version field to card schema
- [ ] Create version history data structure
- [ ] Build version comparison UI
- [ ] Add changelog annotations
- [ ] Implement version selector
- [ ] Export version history
- [ ] Show version on card (optional toggle)

**Estimated Effort**: Medium (2 weeks)

---

### 📋 Card Templates/Presets
**Status**: Currently starting from scratch each time

**Description**: Pre-built card templates for common card types.

**Requirements**:
- Template library (basic movement, offensive, defensive, utility)
- Quick start from template
- Customizable after creation
- Save custom templates

**Implementation Tasks**:
- [ ] Define common card templates
- [ ] Create template selector UI
- [ ] Implement template application
- [ ] Add custom template saving
- [ ] Template preview
- [ ] Import/export template library

**Estimated Effort**: Small (1 week)

---

### 📋 💡 Duplicate/Clone Card Function
**Status**: Must manually recreate similar cards

**Description**: Quick duplication of existing cards with minor modifications.

**Requirements**:
- One-click duplicate
- Modify duplicated card
- Batch duplicate with variations
- Preserve relationships (e.g., "Advanced" version of "Basic" card)

**Implementation Tasks**:
- [ ] Add duplicate button to card UI
- [ ] Implement card cloning logic
- [ ] Create variation wizard (e.g., +1 cost, +1 XP)
- [ ] Track card relationships
- [ ] Batch operations UI

**Estimated Effort**: Small (3-5 days)

---

## Tool Features - Visualization & Analysis

### 📋 🎯 Enhanced Statistics Dashboard
**Status**: Statistics only in console, limited display

**Description**: Create a comprehensive visual statistics dashboard.

**Requirements**:
- Visual charts (pie charts for distribution, bar charts for costs)
- Movement type distribution visualization
- Ability distribution visualization
- Cost curves and balance graphs
- Comparison between card sets
- Export statistics as reports

**Implementation Tasks**:
- [ ] Choose charting library (Chart.js, Recharts, Victory)
- [ ] Design dashboard layout
- [ ] Implement movement distribution charts
- [ ] Implement ability distribution charts
- [ ] Add cost distribution graphs
- [ ] Create XP economy analysis
- [ ] Add set comparison mode
- [ ] Export statistics as PDF/image

**Estimated Effort**: Medium (2 weeks)

---

### 📋 Card Power Level Analysis
**Status**: Only basic cost calculation exists

**Description**: Deep analysis of card power levels beyond simple cost.

**Requirements**:
- Power score calculation (synergies, combos)
- Identify potentially overpowered cards
- Identify weak/underused cards
- Suggest cost adjustments
- Compare to baseline/reference cards

**Implementation Tasks**:
- [ ] Define power level algorithm
- [ ] Implement combo detection
- [ ] Create power level visualization
- [ ] Add balance recommendations
- [ ] Highlight outliers
- [ ] Comparison with set averages
- [ ] Historical power level tracking

**Estimated Effort**: Large (2-3 weeks)

---

### 📋 Movement Probability Calculator
**Status**: Shows counts but not gameplay probabilities

**Description**: Calculate real-world movement probabilities based on card draws.

**Requirements**:
- Simulate card draws
- Calculate probability of having specific movements
- Account for hand size and deck size
- Visualize probability curves
- "Can I make this corner?" analysis

**Implementation Tasks**:
- [ ] Implement draw simulation
- [ ] Calculate probability distributions
- [ ] Create probability visualizations
- [ ] Add "scenario tester" (given hand, what moves possible?)
- [ ] Monte Carlo simulation for complex scenarios
- [ ] Export probability reports

**Estimated Effort**: Medium (2 weeks)

---

### 📋 💡 Card Gallery View
**Status**: Cards displayed in single row

**Description**: Multiple view modes for browsing cards.

**Requirements**:
- Grid view (current)
- List view (compact)
- Detail view (one card large)
- Comparison view (2-4 cards side-by-side)
- Gallery mode (slideshow)

**Implementation Tasks**:
- [ ] Design different view layouts
- [ ] Implement view switcher
- [ ] Create comparison mode
- [ ] Add keyboard navigation between views
- [ ] Remember user preference

**Estimated Effort**: Small (3-5 days)

---

### 📋 💡 Card Search & Advanced Filtering
**Status**: Basic set filtering only

**Description**: Powerful search and filtering capabilities.

**Requirements**:
- Text search (card names, abilities)
- Filter by multiple criteria simultaneously
- Filter by cost range
- Filter by XP range
- Filter by movement types
- Filter by abilities
- Save filter presets

**Implementation Tasks**:
- [ ] Implement full-text search
- [ ] Create filter UI
- [ ] Add multi-select filters
- [ ] Implement range sliders for cost/XP
- [ ] Add filter presets
- [ ] Show active filters
- [ ] Clear all filters button

**Estimated Effort**: Medium (1-2 weeks)

---

## Tool Features - Export & Production

### 📋 🎯 Print-Ready Export Layouts
**Status**: Exports individual PNGs only

**Description**: Export cards in print-friendly layouts for production.

**Requirements**:
- Multiple cards per page (3x3, 4x4 grids)
- Standard paper sizes (A4, Letter)
- Bleed and crop marks
- Front/back alignment guides
- Professional print settings (300 DPI, CMYK)

**Implementation Tasks**:
- [ ] Design print layout templates
- [ ] Implement multi-card pages
- [ ] Add bleed/crop mark options
- [ ] Generate PDF exports
- [ ] Add resolution settings
- [ ] Create print guide documentation
- [ ] Front/back sheet alignment

**Estimated Effort**: Medium (2 weeks)

---

### 📋 Card Back Designer
**Status**: Single static card back exists

**Description**: Create custom card backs for different card types/sets.

**Requirements**:
- Visual editor for card backs
- Different backs for different card types (movement, upgrade, AI)
- Template library
- Export backs alongside fronts

**Implementation Tasks**:
- [ ] Create card back editor UI
- [ ] Implement customization options
- [ ] Create back template library
- [ ] Associate backs with card types
- [ ] Export paired front/back
- [ ] Print layout with backs

**Estimated Effort**: Medium (1-2 weeks)

---

### 📋 💡 Tabletop Simulator Export
**Status**: None

**Description**: Export cards in formats compatible with Tabletop Simulator for digital playtesting.

**Requirements**:
- Generate card sheets in TTS format (10x7 grid)
- Export deck files (.json)
- Include card backs
- Generate complete workshop package

**Implementation Tasks**:
- [ ] Research TTS card format requirements
- [ ] Implement TTS grid layout (10x7)
- [ ] Generate TTS deck .json files
- [ ] Create TTS card backs
- [ ] Package for workshop upload
- [ ] Add TTS export documentation

**Estimated Effort**: Medium (1-2 weeks)

---

### 📋 💡 Printable Play Sheets
**Status**: None

**Description**: Generate player reference sheets, track layouts, ability glossaries.

**Requirements**:
- Ability reference cards
- Movement guide
- Turn sequence reminder
- Track building guide
- QR codes linking to digital glossary

**Implementation Tasks**:
- [ ] Design reference sheet templates
- [ ] Convert ABILITY_GLOSSARY.md to printable format
- [ ] Create movement guide visual
- [ ] Generate turn tracker
- [ ] Export as PDFs
- [ ] Add to export menu

**Estimated Effort**: Small (1 week)

---

## Tool Features - Collaboration & Sharing

### 📋 Import/Export Card Sets
**Status**: Cards hardcoded in source

**Description**: Import and export card definitions as JSON for sharing.

**Requirements**:
- Export card sets as JSON files
- Import JSON card definitions
- Validation on import
- Version compatibility checking
- Share card sets with other designers

**Implementation Tasks**:
- [ ] Define JSON schema for card sets
- [ ] Implement export functionality
- [ ] Implement import functionality
- [ ] Add JSON validation
- [ ] Handle version compatibility
- [ ] Add import/export UI
- [ ] Create card set library (community cards)

**Estimated Effort**: Medium (1-2 weeks)

---

### 📋 💡 Shareable Card Links
**Status**: None

**Description**: Generate URLs that display specific cards or decks.

**Requirements**:
- URL parameters encode card configuration
- Share single cards or full decks
- Embed cards on websites
- QR codes for physical→digital linking

**Implementation Tasks**:
- [ ] Implement URL parameter encoding
- [ ] Add share button to cards
- [ ] Generate shareable links
- [ ] Create embeddable card widget
- [ ] Generate QR codes
- [ ] Add social media preview images

**Estimated Effort**: Medium (1 week)

---

### 📋 💡 Collaborative Editing Mode
**Status**: Single-user tool

**Description**: Enable multiple designers to work on card sets together.

**Requirements**:
- Real-time collaboration (WebSockets)
- User presence indicators
- Change history and attribution
- Conflict resolution
- Comments and feedback system

**Implementation Tasks**:
- [ ] Set up backend for collaboration (Firebase, Supabase)
- [ ] Implement real-time sync
- [ ] Add user authentication
- [ ] Build presence system
- [ ] Create commenting system
- [ ] Implement change history
- [ ] Handle conflicts

**Estimated Effort**: Very Large (6-8 weeks)

---

## Tool Features - User Experience

### 📋 Dark Mode
**Status**: None

**Description**: Add dark mode for comfortable late-night design sessions.

**Requirements**:
- Toggle between light/dark themes
- Persist user preference
- Ensure card readability in both modes
- Smooth transitions

**Implementation Tasks**:
- [ ] Define dark theme colors
- [ ] Implement theme toggle
- [ ] Update all components with theme support
- [ ] Test card visibility in dark mode
- [ ] Add theme persistence (localStorage)
- [ ] Add theme switcher to UI

**Estimated Effort**: Small (3-5 days)

---

### 📋 💡 Undo/Redo System
**Status**: No history tracking

**Description**: Allow users to undo and redo changes to cards or decks.

**Requirements**:
- Track change history
- Undo/redo buttons
- Keyboard shortcuts (Ctrl+Z, Ctrl+Y)
- Show history timeline

**Implementation Tasks**:
- [ ] Implement command pattern
- [ ] Build history stack
- [ ] Add undo/redo UI
- [ ] Implement keyboard shortcuts
- [ ] Add history visualization
- [ ] Set history limits (prevent memory issues)

**Estimated Effort**: Medium (1 week)

---

### 📋 💡 Keyboard Shortcuts
**Status**: None

**Description**: Add keyboard shortcuts for power users.

**Shortcuts**:
- `Ctrl/Cmd + S`: Export current view
- `Ctrl/Cmd + D`: Duplicate selected card
- `Ctrl/Cmd + F`: Focus search
- `1-9`: Switch card sets
- `Arrow keys`: Navigate cards
- `Space`: Toggle card detail view

**Implementation Tasks**:
- [ ] Implement keyboard event handling
- [ ] Create shortcut mapping system
- [ ] Add shortcuts overlay (press `?` to view)
- [ ] Make shortcuts configurable
- [ ] Test cross-platform compatibility

**Estimated Effort**: Small (3-5 days)

---

### 📋 💡 Tutorial/Onboarding
**Status**: Jump-right-in with no guidance

**Description**: Help new users learn the tool quickly.

**Requirements**:
- Welcome screen for first-time users
- Interactive tutorial
- Tooltips on key features
- Example card set walkthrough
- Link to documentation

**Implementation Tasks**:
- [ ] Design onboarding flow
- [ ] Create tutorial steps
- [ ] Implement tooltip system
- [ ] Add example walkthrough
- [ ] Make tutorial skippable/replayable
- [ ] Track onboarding completion

**Estimated Effort**: Medium (1 week)

---

## Integration Features

### 📋 💡 Playtesting Feedback Integration
**Status**: Game design doc tracked separately

**Description**: Capture playtesting feedback directly in the tool.

**Requirements**:
- Add notes to cards ("Too powerful", "Confusing ability")
- Track playtest results
- Rate cards by fun factor
- Link feedback to specific versions
- Generate playtest reports

**Implementation Tasks**:
- [ ] Add feedback UI to cards
- [ ] Create playtest session tracking
- [ ] Add rating system
- [ ] Link feedback to versions
- [ ] Generate feedback reports
- [ ] Export for analysis

**Estimated Effort**: Medium (2 weeks)

---

### 📋 💡 Track Builder Integration
**Status**: Mentioned in game design but separate

**Description**: Link card design with track design for holistic balance.

**Requirements**:
- Import track layouts
- Analyze movement requirements for track
- Suggest card compositions for track types
- Visualize track + deck compatibility

**Implementation Tasks**:
- [ ] Define track data format
- [ ] Import track layouts
- [ ] Analyze track movement needs
- [ ] Calculate deck suitability scores
- [ ] Visualize compatibility
- [ ] Suggest deck adjustments

**Estimated Effort**: Large (3-4 weeks)

---

## Quality of Life Improvements

### 📋 Batch Operations
**Status**: Individual card operations only

**Description**: Perform operations on multiple cards at once.

**Operations**:
- Bulk cost adjustment (+1 to all selected)
- Bulk XP adjustment
- Bulk export
- Bulk delete
- Apply tag to multiple cards

**Implementation Tasks**:
- [ ] Add multi-select UI
- [ ] Implement batch operations
- [ ] Add confirmation dialogs
- [ ] Undo support for batch ops
- [ ] Progress indicators

**Estimated Effort**: Small (1 week)

---

### 📋 Card Templates from Existing
**Status**: Must manually copy card configs

**Description**: Save any card as a template for quick variations.

**Requirements**:
- "Save as template" button on cards
- Template library
- Apply template to new card
- Customize after applying

**Implementation Tasks**:
- [ ] Implement template saving
- [ ] Create template library UI
- [ ] Apply template functionality
- [ ] Template categories
- [ ] Import/export templates

**Estimated Effort**: Small (3-5 days)

---

### 📋 💡 Cost Calculator Tool
**Status**: Cost calculated automatically but not explained

**Description**: Interactive tool showing how card costs are calculated.

**Requirements**:
- Breakdown of cost components
- Visual representation (pie chart)
- "What if" scenarios
- Cost optimization suggestions
- Compare against target cost

**Implementation Tasks**:
- [ ] Build calculator UI
- [ ] Show cost breakdown
- [ ] Visualize cost components
- [ ] Add scenario testing
- [ ] Suggest optimizations
- [ ] Target cost mode

**Estimated Effort**: Small (1 week)

---

## Mobile & Responsive

### 📋 Responsive Design
**Status**: Desktop-focused layout

**Description**: Make tool usable on tablets and mobile devices.

**Requirements**:
- Responsive card layouts
- Touch-friendly controls
- Mobile-optimized sidebar
- Swipe gestures for card navigation

**Implementation Tasks**:
- [ ] Audit current responsiveness
- [ ] Design mobile layouts
- [ ] Implement responsive components
- [ ] Add touch gestures
- [ ] Test on various devices
- [ ] Optimize performance for mobile

**Estimated Effort**: Medium (2 weeks)

---

### 📋 💡 Mobile App (PWA)
**Status**: Web-only

**Description**: Convert to Progressive Web App for offline use.

**Requirements**:
- Offline functionality
- Install on mobile home screen
- Fast loading with caching
- Background sync

**Implementation Tasks**:
- [ ] Set up service worker
- [ ] Configure manifest.json
- [ ] Implement caching strategy
- [ ] Add offline indicators
- [ ] Test PWA installation
- [ ] Optimize assets for mobile

**Estimated Effort**: Medium (1-2 weeks)

---

## Priority Recommendations

### Phase 1: Core Tool Improvements (Next 3 months)
1. ✅ Enhanced Statistics Dashboard - Make balance data visible
2. ✅ Visual Card Editor - Remove code requirement
3. ✅ Print-Ready Export - Enable physical prototyping
4. ✅ Import/Export JSON - Share card designs
5. ✅ Dark Mode - Quality of life

### Phase 2: Game Content (Months 3-6)
1. ✅ Driver Powers System - Core game feature
2. ✅ Mechanic/Upgrade Cards - Adds strategic depth
3. ✅ AI Deck Cards - Complete single-player experience
4. ✅ Deck Builder Mode - Test complete decks

### Phase 3: Advanced Features (Months 6-12)
1. ✅ Deck Power Level Analysis - Advanced balancing
2. ✅ Tabletop Simulator Export - Digital playtesting
3. ✅ Playtesting Feedback Integration - Close the loop
4. ✅ Track Builder Integration - Holistic design tool
5. ✅ Card Versioning System - Track evolution

### Phase 4: Polish & Scale (Months 12+)
1. ✅ Collaborative Editing - Multiple designers
2. ✅ Mobile App (PWA) - Design anywhere
3. ✅ Tutorial/Onboarding - Lower barrier to entry
4. ✅ Community Features - Share and discover cards

---

## Notes

### Based on Playtesting Feedback
Several features address issues found in playtests:
- Better cost balancing tools (5th playtest: "Too many things cost 7")
- AI card improvements (Multiple tests showed AI confusion)
- Movement probability calculator (Help ensure tracks are solvable)

### Synergies with Game Design
Some features directly support game design exploration:
- Variant cards for longer gameplay experiments
- Driver powers for asymmetric gameplay
- Mechanic cards for passive upgrade systems

### Community Requests
Consider adding:
- Card submission system for community designs
- Voting/rating system for popular cards
- Featured card sets
- Design challenges/competitions
