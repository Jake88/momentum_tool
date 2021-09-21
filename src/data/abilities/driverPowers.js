// Option: These probably are better suited to be "Car upgrades". Maybe I should do away with the driver power aspect and just make these car upgrades. At the start of the game each player draws 4, chose 1 and passes left, and continues until each player has selected 3. The remaining card gets discarded. Players then choose 1 of the 3, places it face up in their upgrade track and place a second and third in their respective upgrade spots. Each lap, one of these is flipped over.
// During the power spike stage, each player may choose to EITHER flip their third car upgrade OR draw 2 and discard 1 unique cards.


// Forgetful: Each time you discard your programming track, shuffle those cards and FORGET one at random. -> only in the longer variant of the game.



 // once per drive you may turn 1 symbol into a wild??? 

const depricated_DRIVERS = [

]
export const DRIVERS = [
  {
    id: 'CU0',
    type: 'DRIVER',
    name: 'Druid',
    estimatePower: '1',
    desc: 'Momentum wilds can be re-decided when resolving the momentum.'
    // Or, if we are trying to make everything feel powerful, boost every wild?
    // Or any "optional" symbol can be re-determined.
  },
  {
    id: 'CU3',
    type: 'DRIVER', //???
    name: 'Transmuter',
    estimatePower: '1',
    desc: 'When resolving a card with 2 of the same symbols, you may choose to treat those as a single wild instead. If momentum symbol is used treat the wild result as momentum.' // What happens to momentum?
  },
  {
    id: 'CU4',
    type: 'DRIVER', // same as CU3 if that changes to upgrade.
    name: 'Hat Rick',
    estimatePower: '2',
    desc: 'When resolving a card with 3 of the same symbol, treat all of those as wild.'
  },
  {
    id: 'CU18',
    type: 'UPGRADE',// decide with CU03
    name: 'Sticky wheel / Boolean steering',
    estimatePower: '1',
    desc: 'Every movement symbol containing a straight, including Wild is instead considered to be a Left or Right',
    Expansion: 'CHAOTIC'
  },
  {
    id: 'CU5',
    type: 'DRIVER',
    name: 'In The Moment',
    estimatePower: '5', // extra 4 movement per round, reduced by crashes and losing momentum
    desc: 'When resolving any momentum, you MUST resolve it twice.'
  },
  {
    id: 'CU6',
    type: 'DRIVER',
    name: 'Hacker',
    estimatePower: '1',
    desc: 'Post planning you may swap the final card of your driveway with the current leaders. Post drive, return those cards to their owners.',
    Expansion: 'CHAOTIC'
  },
  {
    id: 'CU7',
    type: 'DRIVER',
    name: 'Last minute Larry',
    estimatePower: '4', // extra 3 movement per round
    desc: 'When resolving the final card in your journey, resolve its\' momentum up to 3 times.'
  },
  {
    id: 'CU8',
    type: 'DRIVER',
    name: 'Clint',
    estimatePower: '2', // Up to 6 extra movement in the later stages of the game, but lose 4 EVERY round, meaning - in early stages + in later stages.
    desc: 'Draw 7 cards each turn. Never resolve momentum.'
  },
  {
    id: 'CU9',
    type: 'DRIVER',
    name: 'Cyborg',
    estimatePower: '3', // High chance of drawing a 3 movement, but no momentum, so just a 1 movement gain per AI card. Probbaly only good in the first lap.
    desc: 'During your draw phase, draw 2 additional cards from the AI deck. Discard 5 cards. Any AI cards get discarded to the AI deck after use.'
  },
  {
    id: 'CU10',
    type: 'DRIVER',
    name: 'The Twins',
    estimatePower: '1',
    desc: 'During setup place an additional car in the middle lane beside your current car. Your movements and abilities are applied to both cars. Treat crashes, bumps, and other effects individually.',
    Expansion: 'CHAOTIC'
  },
  {
    id: 'CU11',
    type: 'DRIVER',
    name: 'Spawn of Chaos',
    estimatePower: '1',
    desc: ' Drive backwards. Spawn last in the turn order with no catch up tokens.', // potentially gain VP for each car bumped
    Expansion: 'CHAOTIC'
  },
  {
    id: 'CU16',// Driver or car???
    type: 'UPGRADE',
    name: 'Make pain your friend',
    estimatePower: '4', // Each crash you lose at least 1 movement from momentum, unless it's the last move on your turn. Each power card may give you up to 3 powerful movements
    desc: 'During your first crash each round, draw a power card.'
  },
  {
    id: 'CU20',// Driver or car or Car upgrade ???Probably car but I like the name for a driver.
    type: 'UPGRADE',
    name: 'Never wrong',
    estimatePower: '4',
    desc: 'Whenever resolving a movement from the right most lane, BOOST that symbol.'
  },
  {
    id: 'CU21',
    type: 'DRIVER',
    name: 'Insurer',
    estimatePower: '1',
    desc: 'Once per drive after revealing a card, you may move it to the end of your driveway and reveal the next instead.'
  },
  {
    id: 'CU23',
    type: 'DRIVER',
    name: 'Fortune teller',
    estimatePower: '2',
    desc: 'Draw 6 cards, discard 1.'
  },
  {
    id: 'CU23',
    type: 'DRIVER',
    name: 'Copy cat',
    estimatePower: '2', 
    desc: 'Treat the last card in your driveway as any copy of an opponents revealed card.'
  },
  {
    id: 'CU23',
    type: 'DRIVER',
    name: 'Two timer?',
    estimatePower: '2', 
    desc: 'Treat the last card in your driveway as a copy of any of your other revealed cards.'
  },
  {
    id: 'CU23',
    type: 'DRIVER',
    name: 'Collector?',
    estimatePower: '2', 
    desc: 'Treat the last card in your driveway as a card with the movement symbols of all your revealed non-momentum movement symbols, from lef to right.'
  },
  {
    id: 'CU23',
    type: 'DRIVER',
    name: 'Electrician',
    estimatePower: '2', 
    desc: 'During the draw phase, draw 1 less from your deck and 1 from the power deck.'
  },
  {
    id: 'CU23',
    type: 'DRIVER',
    name: 'Telekenisis',
    estimatePower: '2', 
    desc: 'During the end phase you may move any 1 obsticle on the track to an adjacent tile.'
  },
]