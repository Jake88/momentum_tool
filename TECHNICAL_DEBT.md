# Technical Debt

This document tracks technical improvements, refactoring opportunities, and code quality enhancements for the Momentum Deck Builder Tool.

## Priority Legend
- 🔴 **High Priority** - Affects core functionality or causes bugs
- 🟡 **Medium Priority** - Improves code quality and maintainability
- 🟢 **Low Priority** - Nice-to-have improvements

---

## Code Quality & Architecture

### 🟡 Remove Unused/Deprecated Code
**File**: `src/cards/cardUtils/cardConstants.js:24`
**Issue**: TODO comment mentions removing `abilityMultiplier` as it's unnecessary
```javascript
// TODO Remove this I think. If an ability is going to do two things...
```
**Action**:
- Remove `abilityMultiplier` from card configuration interface
- Update documentation to reflect this change
- Verify no card sets are using this property

### 🟡 Complete getAbilityStats Implementation
**File**: `src/cards/cardUtils/cardUtils.js:126`
**Issue**: Function `getAbilityStats()` is defined but empty
```javascript
export function getAbilityStats (cardList) {}
```
**Action**:
- Implement ability distribution statistics similar to `getIconStats()`
- Track: count per ability type, percentage distribution, value totals
- Add to `calculateCardStats()` output (currently commented out)
- Useful for balancing offensive vs defensive vs utility abilities

### 🟡 Remove Console Logs from Production Code
**Files**:
- `src/sidebar/Sidebar.js:22` - `console.log(calculateCardStats(cardList))`
- `src/sidebar/Sidebar.js:28` - `console.log('asdasd', orderBy)`
- Multiple debug functions in card set files

**Action**:
- Replace with proper debugging solution (Redux DevTools, React DevTools)
- Or wrap in environment check: `if (process.env.NODE_ENV === 'development')`
- Consider adding a "Debug Mode" toggle in UI to show/hide stats panel

### 🟡 Improve Error Handling in Card Export
**File**: `src/cardSaver/CardSaver.js:9-28`
**Issue**: No error handling for failed exports or missing elements
**Action**:
- Add try-catch around `DTI.toBlob()` calls
- Show user feedback (success/error messages)
- Validate input before attempting export
- Handle edge cases (no cards displayed, invalid IDs)

### 🟡 Extract Magic Numbers to Constants
**File**: Multiple files
**Examples**:
- XP gain values scattered throughout card definitions
- Movement tier values hardcoded in Sidebar.js
**Action**:
- Create `src/constants/cardBalance.js` with:
  - Default XP values per card tier
  - Cost calculation multipliers
  - Ability value constants
- Reference these constants in card creation

### 🟢 Commented Code Cleanup
**File**: `src/sidebar/Sidebar.js:129`
**Issue**: Commented textarea for stats display
```javascript
{/* <textarea value={stats} /> */}
```
**Action**: Either implement as proper stats panel or remove entirely

---

## Component Architecture

### 🟡 Sidebar State Management
**File**: `src/sidebar/Sidebar.js`
**Issue**:
- `sortList` function has `orderBy` in dependency array causing re-renders
- Sort is called in both onClick and useEffect
- Console log shows "asdasd" debug string

**Action**:
- Refactor to reduce unnecessary re-renders
- Move sort logic outside component or use useMemo
- Remove debug console.log

### 🟡 Card Component Props Validation
**File**: `src/cards/Card.js`
**Issue**: No PropTypes or TypeScript for type safety
**Action**:
- Add PropTypes to all components
- Or migrate to TypeScript for full type safety
- Validate card configuration structure

### 🟢 Extract Card Styles to Theme
**Files**: `src/cards/Card.styles.js`, `src/App.styles.js`, etc.
**Action**:
- Create centralized theme configuration
- Extract colors, fonts, spacing to theme object
- Use ThemeProvider from styled-components
- Ensures consistency and easier theming

---

## Build & Tooling

### 🟡 Update Dependencies
**File**: `package.json`
**Issue**: Using React 17 and potentially outdated dependencies
**Action**:
- Audit dependencies for security vulnerabilities: `npm audit`
- Update to React 18 (test for breaking changes)
- Update react-scripts and other dependencies
- Update testing-library packages

### 🟡 Add Linting Configuration
**Issue**: No ESLint configuration visible beyond CRA defaults
**Action**:
- Add `.eslintrc.js` with project-specific rules
- Configure Prettier for consistent formatting (prettier-standard is installed but not configured)
- Add pre-commit hooks with Husky
- Add lint script to package.json

### 🟢 Add Testing Infrastructure
**Files**: `src/App.test.js`, `src/setupTests.js` exist but likely minimal
**Action**:
- Write unit tests for card utility functions
- Add integration tests for card creation workflows
- Test card statistics calculations
- Add test coverage reporting

### 🟢 Optimize Build Output
**Action**:
- Analyze bundle size: `npm run build` + analyze
- Code split large card sets
- Lazy load card images
- Consider reducing styled-components bundle size

---

## Documentation

### 🟡 API Documentation
**Issue**: Card creation API is explained in README but not comprehensive
**Action**:
- Create `CARD_CREATION_API.md` with:
  - Complete function signatures
  - All available MOVEMENT_ICON options
  - All available CARD_ABILITY options with examples
  - Cost calculation formula explained
  - Common patterns and recipes

### 🟡 Code Comments
**Issue**: Minimal inline documentation
**Action**:
- Add JSDoc comments to exported functions
- Document complex cost calculation logic
- Explain card statistics calculations
- Add comments to movement value calculations

### 🟢 Architecture Decision Records (ADRs)
**Action**:
- Document why styled-components was chosen
- Document card ID generation strategy
- Document cost calculation formula rationale
- Keep history of major design decisions

---

## Data Management

### 🟡 Card Data Validation
**Issue**: No runtime validation of card configurations
**Action**:
- Add schema validation (Joi, Yup, or Zod)
- Validate card configs on creation:
  - Required fields present
  - Cost is positive number
  - Valid movement/ability references
- Show helpful error messages for invalid cards

### 🟡 Centralize Card Data
**Issue**: Card sets scattered across multiple files
**Action**:
- Consider JSON-based card definitions
- Single source of truth for all cards
- Easier to version control game balance changes
- Potential for external card editor tool
- Could enable hot-reloading during development

### 🟢 Card Version Tracking
**Action**:
- Add version numbers to card sets
- Track when card costs or abilities change
- Helpful for playtesting to know which version was tested
- Could show changelog between versions

---

## Performance

### 🟡 Optimize Card Rendering
**File**: `src/App.js:16-18`
**Issue**: Renders all cards at once, could be slow with many cards
**Action**:
- Implement virtualization for large card lists (react-window)
- Or add pagination/infinite scroll
- Lazy load card images
- Memoize Card component

### 🟢 Memoize Statistics Calculations
**File**: `src/cards/cardUtils/cardUtils.js`
**Action**:
- Cache statistics calculations (same card list = same stats)
- Use React.useMemo in Sidebar component
- Especially important as card sets grow

---

## User Experience

### 🟡 Add Loading States
**Issue**: No feedback during card export or statistics calculation
**Action**:
- Show spinner during card image export
- Disable button during processing
- Show progress for batch exports
- Toast notifications for success/errors

### 🟡 Improve Card Saver UX
**File**: `src/cardSaver/CardSaver.js`
**Issue**:
- Input field purpose unclear without context
- No validation feedback
- No preview of what will be exported

**Action**:
- Add label: "Card ID Prefix"
- Show preview of matching cards before export
- Add "Export All Visible" button
- Show count: "Will export X cards"

### 🟢 Keyboard Shortcuts
**Action**:
- Add hotkeys for common actions
- Ctrl/Cmd + S to export current view
- Number keys to switch card sets
- Improves designer workflow speed

---

## Accessibility

### 🟡 Semantic HTML
**Issue**: Minimal semantic HTML elements
**Action**:
- Use proper heading hierarchy (h1, h2, h3)
- Add ARIA labels where needed
- Ensure form inputs have associated labels
- Use semantic elements (nav, main, aside)

### 🟡 Keyboard Navigation
**Action**:
- Ensure all interactive elements are keyboard accessible
- Add focus styles for keyboard navigation
- Tab order should be logical
- Test with screen reader

### 🟢 Color Contrast
**Action**:
- Audit color contrast ratios
- Ensure text meets WCAG AA standards
- Consider color-blind friendly palette
- Test card readability with various vision impairments

---

## Git & Version Control

### 🟡 Add .env.example
**Action**:
- Document any environment variables needed
- Add example configuration
- Update README with setup instructions

### 🟢 Improve .gitignore
**Action**:
- Add common IDE folders (.vscode, .idea)
- Add OS files (.DS_Store, Thumbs.db)
- Add build artifacts
- Add test coverage reports

### 🟢 Add Git Hooks
**Action**:
- Pre-commit: Run linting and formatting
- Pre-commit: Run tests
- Pre-push: Ensure build succeeds
- Use Husky + lint-staged

---

## Future Refactoring

### 🟡 Consider State Management Library
**Current**: Props drilling from App → Sidebar
**Issue**: Will become problematic as app grows
**Action**:
- Consider React Context for simple state
- Or Redux/Zustand for complex state
- Useful when adding features like:
  - Custom card editor UI
  - Deck builder (combining cards into decks)
  - Save/load projects

### 🟢 Migrate to TypeScript
**Benefits**:
- Type safety for card configurations
- Better IDE autocomplete
- Catch errors at compile time
- Self-documenting code through types

**Approach**:
- Start with utility functions (cardUtils.ts)
- Define Card, Movement, Ability interfaces
- Gradually migrate components
- Keep `.js` extension working during migration

---

## Testing Gaps

### 🟡 Unit Tests Needed
**Files to test**:
- `cardUtils.js` - All utility functions
- `calculateCardStats()` - Verify calculations
- `createCardSet()` - ID generation logic
- `getIconStats()` - Movement distribution

### 🟡 Integration Tests Needed
- Full card creation workflow
- Card export functionality
- Filtering and sorting behavior
- Statistics display

### 🟢 Visual Regression Tests
- Card component rendering
- Ensure visual consistency across changes
- Use tools like Chromatic or Percy

---

## Notes

### Recently Added (from Git History)
- ChopShop cards and abilities recently added
- Unique cards first pass completed
- Multiple rounds of balancing based on playtesting

### Known Issues from Game Design Doc
- Movement system still being refined based on playtests
- AI interaction rules need clarification
- Some card costs still being adjusted based on gameplay

### Recommendations
**High-priority items to tackle first:**
1. Remove console.logs and debug code
2. Implement getAbilityStats()
3. Add error handling to card export
4. Update dependencies and run security audit
5. Add PropTypes or migrate to TypeScript

**Long-term improvements:**
1. Consider TypeScript migration
2. Add comprehensive testing
3. Implement proper state management
4. Create card data format/schema
