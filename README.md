# Momentum deck builder tool

## Card creation guide

There are helper functions to create cards. See `cards/cardSets/starterCards.js` for an examples.
All you need to do is create a card set using

```js
const createCard = createCardSet('name of your set')
const createCopies = createAddCopiesFunction(createCard)
```

The above creates a set of cards, and applies an id on them based on the initals of the set name. For example the ID of the first card in the set above would be `noys1`

Once you have your `createCard` and `createCopies` function, you can simply create cards by providing a card config. Below is an example of a config. Create copies works the same way, only you supply an amount of copies to be added into the set.

```js
cardConfig = {
  name = 'Title of your card',
  movement = MOVEMENT_ICON.STRAIGHT, // A MOVEMENT_ICON constant, which is all the available moves a card can do
  movementMultiplier = 1, // Some cards do multiple movements. This depicts it. (TODO: This will likely change, as I am going to set up an array of movements that a card can do. Every card will have a "momentum" movement, but some will have additional other movements too.
  xpGain = 0, // The XP Gain is the amount of XP awarded for playing this card (used for purchsing new cards)
  ability = undefined, // Some cards have abilities, this is chosen from the ABILITY constant in /cardUtils/cardConstants.js
  abilityMultiplier = 1, // TODO Remove this I think. If an ability is going to do two things (IE hook twice) it can just be created as a new ability. I think this will be a rare scenario.
  // Under the hood the card creator uses the movement, xpGain, and ability applied to this card to determine an estimatedCost value.
  overwriteCost = undefined, // overwrite the estimated cost with a numeric value here. This sets the cost of the card to be this number.
  costModifer = 0 // This allows a reduction or addition to the estimated cost. If for example a card becomes powerful due to a combination of movement type + abilty type, we can tweak it's card cost value by 1 or 2.
}
```

## Card set stats

After creating a set of cards, we can get some stats for those cards using the debug tools found in cardUtils. Specifically calling `calculateCardStats(cardList)` and providing the set card list (or any list of cards) will return us some stats:

```js
{
  movementStats, // an object that contains the number of each type of movement in this card set, and what percentage those types make up.
    cost, // an object that provides the sum of all card costs, the average cost of each card, and the average cost based on player hand size.
    estimatedCost, // an object that provides the sum of all card ESTIMATED COSTS, ...
    xpGain // an object that provides the sum of all card XP GAINS, ... (particularly useful for figuring out what things should cost)
}
```

## Displaying cards

This is still a work in progress, but currently we can map through a set of cards and create a `<Card cardConfig={cardConfig}>` element, which will slap it on the page easy enough.
This will only get tricky as different cards are introduced.

# Create React App stuff..

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
