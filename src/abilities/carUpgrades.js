// If driver abilities are things that strictly deal with cards and "playing" cards.

// Cars and car upgrades can be abilities that deal with the track, resolving symbols/movement, and inter-car effects.
// Cars themselves should be powerful abilities such as "every X symbol does Y". This should result in 2-4 potential movement boosts
// or something along those lines per turn.
// Car upgrades should be smaller, such as little boosters that give you 1 of a particular symbol you can use during your track (gain that token at round start)
// and things like that.

export const CAR_UPGRADES = [
  {
    id: 'CU1',
    type: 'UPGRADE',
    name: 'Ghost',
    estimatePower: '2',
    desc: 'Immune to positive effects, negative effects, and bumps. Can occupy occupied spaces.'
  },
  
  {
    id: 'CU17',
    type: 'UPGRADE',// CAR
    name: 'Bumper car',
    estimatePower: '3',
    desc: 'Each time you cause a bump, apply the BUMP affect to that car twice. You are immune to bump effects. Any car hitting you "Loses momentum".',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU19',
    type: 'UPGRADE',
    name: 'Teleporter',// CAR
    estimatePower: '',
    desc: 'Resolve your card movement by moving your car from it\'s starting position and placing it where it would end. Ignore any interactions between.'
  },
  {

    id: 'CU12',
    type: 'UPGRADE', // CAR
    name: 'V8',
    estimatePower: '3?',
    desc: 'When hitting an oil slick, ignore its usual effects and BOOST the all remaining movement in your journey.'
  },
  {
    id: 'CU13',
    type: 'UPGRADE', // CAR
    name: 'Garbage truck',
    estimatePower: '2',
    desc: 'Ignore the effects of OBSTICLES. Leave an OBSTICLE after your first movement in the drive phase.',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU14',
    type: 'UPGRADE', // CAR
    name: 'Petrol tanker',
    estimatePower: '2',
    desc: 'Ignore the effects of OIL SLICKS. Leave an OIL SLICK after your first movement in the drive phase.',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU15',
    type: 'UPGRADE',
    name: 'Tow truck',// CAR
    estimatePower: '3',
    desc: 'You MAY choose to HOOK the first car infront OR behind you post planning.',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU22',
    type: 'UPGRADE', // CAR
    name: 'Monster truck',
    estimatePower: '?',
    desc: 'Ability to drive over obsticles and other cars????'
  },
  {
    id: 'CU22',
    type: 'UPGRADE', // CAR
    name: '',
    estimatePower: '5', 
    desc: 'All your explicit STRAIGHT symbols have BOOST'// too strong?
  },
  {
    id: 'CU22',
    type: 'UPGRADE', // CAR
    name: '',
    estimatePower: '4',
    desc: 'All your explicit LEFT symbols have BOOST'
  },
  {
    id: 'CU22',
    type: 'UPGRADE', // CAR
    name: '',
    estimatePower: '4',
    desc: 'All your explicit RIGHT symbols have BOOST'
  },
  {
    id: 'CU22',
    type: 'UPGRADE', // CAR
    name: '',
    estimatePower: '5',
    desc: 'All your WILD symbols have BOOST'
  },
  {
    id: 'CU22',
    type: 'UPGRADE', // CAR
    name: '',
    estimatePower: '5',
    desc: 'Any HOOK you do is doubled.',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: 'Extra oily',
    estimatePower: '5',
    desc: 'Any OIL SLICK you lay spreads to 1 inner tile (based on the current or next corner).',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: 'Blink',
    estimatePower: '2',
    desc: 'Post planning you may shift your car to 1 of the 8 adjacent tiles.',
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: 'Hopper',
    estimatePower: '2',
    desc: 'When bumping a car, instead bounce over it, ending your movement where it would have been bumped.',
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: '',
    estimatePower: '2',
    desc: 'At round start, gain 1 LEFT token.',
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: '',
    estimatePower: '2',
    desc: 'At round start, gain 1 STRAIGHT token.',
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: '',
    estimatePower: '2',
    desc: 'At round start, gain 1 RIGHT token.',
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: '',
    estimatePower: '2',
    desc: 'At round start, gain 1 OIL SLICK token.',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: '',
    estimatePower: '2',
    desc: 'At round start, gain 1 HOOK token.',
    expansion: 'CHAOTIC'
  },
  {
    id: 'CU22',
    type: 'UPGRADE',
    name: '',
    estimatePower: '2',
    desc: 'At round start, gain 1 obsticle token.', // Too annoying???
    expansion: 'CHAOTIC'
  },
]
