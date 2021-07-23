# Glossary

# Terminology

## Track terms:
### Track
Refers to the entire track, made up of track pieces.

### Track piece
An individual tile that represents part of the track. This could be a corner, straight or other variation. Each track piece will have 1 to many lanes, and 1 to many segments.

### Track lanes
There are typically 5 lanes on each track piece. Lanes are separated by the thick black lines running lengthways along the track. Cars move within lanes, and when playing directional cards they may switch lanes.

### Track segments
Each lane is split into segments. These are separated by thin black lines running perpendicular to the lanes.
Straight track pieces are spint into 3 segments, and corner pieces vary segments based on inner / outter lanes.

<i>Note: Some special track pieces (eg cross overs) have lanes running perpendicular from all sides. Treat these lane divisions as segments.</i>

### Track tiles
Each time a lane and segment cross, a tile is created. Tiles represent the spaces a car can occupy. Only 1 car may occupy a tile at any one time. Some tiles may have soft arrows on them. If your movement would leave you in this tile, move to the adjacent tile the arrow is pointing at instead.
#### Tile type
Each type has a tile type, which can be either a straight, left corner, or right corner tile.

### Within X segments
When referring to something <i>within X segments</i>, start from the tile in the same lane as your car. Count segment separator lines on the track up to X. Anything on the track between your car and that segment line (across all lanes) is treated as within X segments. Being in the outter lane of a corner may mean you have less reach than being on the inside of a corner.

## Movement
Movement refers an icon/symbol found on most cards.

When resolving your movement, base it from the tile type of the <b>currently occupied</b> tile.

There are three possible movement types:
### STRAIGHT
  If your tile type is straight, your car remains in it's current lane and moves forward 1 segment.
  If your tile type is a left corner, your car moves 1 lane to the right and forward one segment. (over the <b>front-right corner point</b> of your current tile)
  If your tile type is a right corner, your car moves 1 lane to the left and forward one segment. (over the <b>front-left corner point</b> of your current tile)
### LEFT
  If your tile type is straight, your car moves 1 lane to the left and forward one segment. (over the <b>front-left corner point</b> of your current tile)
  If your tile type is a left corner, your car remains in it's current lane and moves forward 1 segment.
  If your tile type is a right corner, follow the rules for a "straight" movement on a right corner (resolve bumps), THEN move your car an additional lane left. This will move you left 2 lanes. If there are multiple tiles to choose from after moving "straight", always choose the back most.
### RIGHT
  If your tile type is straight, your car moves 1 lane to the right and forward one segment. (over the <b>front-right corner point</b> of your current tile)
  If your tile type is a left corner, follow the rules for a "straight" movement on a left corner (resolve bumps), THEN move your car an additional lane right. This will move you right 2 lanes. If there are multiple tiles to choose from after moving "straight", always choose the back most.
  If your tile type is a right corner, your car remains in it's current lane and moves forward 1 segment.

Additionally some movement symbols provide options:
### STRAIGHT_OR_LEFT
  Perform either a STRAIGHT or LEFT movement
### STRAIGHT_OR_RIGHT
  Perform either a STRAIGHT or RIGHT movement
### LEFT_OR_RIGHT
  Perform either a LEFT or RIGHT movement
### WILD
  Perform either a STRAIGHT, LEFT, or RIGHT movement

## Momentum
Most cards have a momentum box in their movement section. When revealing and activating this card, treat this movement as a normal. However before activating your <i>next</i> card you will apply the momentum movement of your previous card.
- If your momentum movement provided a choice of movement, you must repeat your chosen movement. Afterall, that is the momentum you gained.
- The first card you reveal each movement phase will have no momentum.

### Lose momentum
Momentum can be lost by crashes and some negative effects. When momentum is lost rotate your <i>current card</i> upside down.

## Bumping
Often resolving a movement will put your car in the tile of another car. If this happens, a bump occurs. Simply apply same movement type you are resolving to the car being bumped. If this results in that car colliding with a wall, that car resolves a crash. If this results in either car ending on a track symbol, resolve that symbols effect to that car / player.

## Crashing
Crashing occures when a car collides with an obsticle, wall, or if they end in a tile that does not follow the direction they were going (IE turning or being bumped down the wrong side of a cross-over piece.)
If momentum from your previous card causes a crash, your "current card" is considered the card you just revealed.

To crash:
1. first <b>lose momentum</b> of your current card.
2. Reset your car in the middle lane of the same segment where the crash occured. If this tile is occupied, choose any unoccupied tile in the segment. 


## Current card
When referring to your current card this is your right most card revealed card in your programming track. This might be an already resolved card, or a card you are currently resolving, or about to resolve.


## Occupied / Unoccupied tiles
A tile is considered occupied if it has any symbol, token or car in it. If ever you need to choose an unoccupied tile and the location directed is occupied:
1. First try to select any other tile in the same segment.
2. If all tiles in that segment are occupied, go back one segment. Repeat steps 1 and 2 until a tile is unoccupied.



# Tokens
All tokens players have in their pool are discarded during clean up, <b>except for catch up tokens</b>.

## Applying tokens to cards
Some tokens allow you to enhance a card. For example the boost token or catch up token. To do this, place the token ontop of an unrevealed card before entering the reveal phase. // How does this work if all tokens are discarded at the end of a round???? 

# Regular abilities

## Leave
Many abilities and powers refer to "Leave". This usually means when resolving the first movement symbol of this particular card, leave a token of the mentioned type in the tile you just left.

## Gain
Many abilities and powers refer to "Gain". This usually means gain a token of the mentioned type to your token pool. 

## Offensive
### Hook
<b>Negative effect</b><br/>

When using a hook follow the card rule to choose a valid target.

When a car is hooked it loses momentum and is pulled back 1 segment in it's current lane.

### Oil Slick
<b>Negative effect</b><br/>

When using the Oil Slick ability, leave an oil slick token in the space you are moving from.
When entering a tile with an oil slick token (or gaining by another means) gain that oil token.
The next time you would resolve a momvement type that is NOT straight, treat it as a straight and discard this oil token.


## Defensive
### Shield
<b>Positive effect</b><br/>

When gaining x shield, take x number of shield tokens from the pool.

If a <b>Negative effect</b> would affect you, you must instead discard a shield token if available and ignore that effect. 

### Steadfast
<b>Positive effect</b><br/>
When gaining x steadfast, take x number of steadfast tokens from the pool.

If a car would bump you and you have a steadfast token, instead discard the steadfast token and ignore the effects of that bump.
That car remains in the tile it was, and loses momentum.


## Utility

### Boost
<b>Positive effect</b><br/>
When a card is boosted, each of it's movements are triggered X additional times, where X is the boost value. Boost value is always 1 unless otherwise stated.
 <i>Note: A boosted card remains boosted for the remainer of the round, meaning it's momentum movement may be triggered multiple times.</i>

### FORGET
During the clean up phase trash a card from your hand, discard or play area. The target of this card may sometimes be defined, such as "this" card referring to the cards self. Unless the keyword "may" is used, this is a requirement.

### DRAW
Whenever a card says to draw, it means to draw in the following round. To help keep track you can pull x number of cards off the top and place them infront of you to help remember to draw those.

### Grapple
<b>Positive effect</b><br/>
When grappling, choose a car within X segments and place one of the grapple token above it. Place the corrosponding grapple token atop your car.

When the grappled car resolves a movement, the grappling car resolve the same movement. This includes the effects of bumps.

This effect lasts until:
 1. Either car crashes,
 2. The grappling car is affected by any negative effect,
 3. The grappling car bumps the grappled car,
 4. Or the grappling car reaches the same segment as the grappled car