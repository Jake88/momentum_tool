# Drivers Momentum

# Blurb (WIP)
Take the wheel with this fast paced racing game with deck building, track building and programming mechanics. You and up to 7? friends race around a custom built track, gaining momentum, learning, bumping, crashing and likely causing chaos as you go.

Due to the modular nature of the track and deck building elements, each race will play out differently.

### Key Features:
- High replayability due to modular tracks and deck building elements.
- Asymetric powers based on the Driver you choose. <B>TBC</B>
- Engine building (literally) in the form of permanent upgrades to your vehicle. <B>TBC</B>
- Power spike in the form of unique upgrades after the first lap. <B>TBC</B>
- Game variants to support longer tracks and play sessions. <B>TBC</B>
- Optional AI to help any player count, including solo, to feel chaotic. <B>TBC</B>
- Optional track power ups that can offers temporary bonuses or negative effects.<B>TBC</TBC>

# Setup

## The Track
Build a track using the track pieces provided in the game. Within the track booklet there are pre-defined layouts to use, or you can create a bespoke one!
Notes for building tracks: It's recommended that every track has an odd number of cross over sections. This ensures both left and right corners are evenly required, making use of the full card pool. However this is only a recommendation, and playing with one type of corner more required than another still leaves everyone on an equal playing field!

## The Market
The market consists of 3 rows:
The Driving School, where you learn new techniques. The Mechanics where permanent upgrades are built for your car, and the Sponsorship row where you can get short term gains for long term negatives
To setup the market follow these steps:
- Shuffle all cards labeled "Basic", place the deck face down and flip over a row of 5 face up cards. This is the market to begin the game with.
- Shuffle all cards labeled "Advanced" and place the deck face down near the market. It will be used at the mid way point of the game.
<!-- TBC Shuffle all cards labeled "Mechanic" and place it face down below the basic market. Flip over the top 5 cards. This forms the Mechanic options. -->
- Take all the "Sponsor" cards and place them above the market. These are optional purchases during the market time but come with their own down sides.


## Players


## Ideas to implement / test:
<i>Note: This is a list of ideas to play test and trial. Once tested, strike these through to keep a record of things tested and either move the feature into the main document or get rid of it.</i>

1. Game arc / Power spike: Switch from "basic" to "advanced". The game arc steps up a notch at the end of the round when the first player passes the finish line. This causes:
  - Each player, starting with the person who crossed the finish line first, draws 2 UNIQUE CARDS, choose one and adds it to their deck.
  - The "Auto Shop" switches for the "Chop shop" (names tbc?) market
2. Driver powers: Create some asymetric powers attached to driver cards that players can start off with. <i>Do the AI players get dealt one these randomly? I don't think so - I think this makes the AI too complicated.</i>
9. Track power ups and ailments
3. Engine building: Add a "Mechanic" market that allows the purchase of passive car upgrades that change how your car works. IE new tyres, transmission, clutch, engine, spoiler, bumper bars, etc.
  - Caution here because the game arc is already tight by "deck building". Adding passive upgrades, similar to <b>Distilled</b> is going to cause you to focus on passive upgrades at the start of the game to get the most dividends on the upgrade. Perhaps they can be obtained at other points in the game? Maybe you draft 2 from a draft pile each time you cross the finish line? This feels like it might be taking away from the asymetic power of the driver, because you're basically drafting car powers at the start in the form of car upgrades... And I believe the game really wants to be build around a "2 lap" mechanic. Maybe 3 might be better, but it obviously scales up game time significantly to add a 3rd lap in. Although you assume you have better cards so you can move through the track faster.....
  -  So options for this:
  - Draft 2 upgrades at the start, along with a driver power. Then at the power spike you draft another 2 upgrades along with 1 unique card. <b>TRY SECOND</b>
  - Just have a market that you buy from as usual <b>TRY FIRST (is this the same as the bottom one??)</b>
  - Create some sort of "goal" related mechanism here, where you pick the card, but have to achieve something in the game to unlock it, or get negative points until then, or somethin?
  - <i>COULD</i> build the upgrades at the start of the game from a set of upgrade cards, up to a max cost of 10 (Think Orion style, or my GGD game race traits...)
  - Could just add these cards to the regular "Basic" market, and it's first in best dressed whether to buy it or another card which will also pay dividends the more your draw it? <b>TRY FIRST</b>
4. Create some unique cards to be aquired after going through the first lap.
5. Create a "bridge" cross over track piece (will require ramps attached to it).
6. Flesh out AI more.
  - 6.1 Try creating a small deck of AI cards that can be used. IE (Move forward 4, towards the inside lane, drop OIL etc)
7. Refine core gameplay (That is 2 lap, roughly X? segments, roughly 1 - 1.5 hours of gameplay) but then determine how you might play a game of 3 laps or more track pieces. Potentially the game reverts to a more traditional deck builder. IE don't trash a card each time your round ends, and add an additional 2 starting cards?
8. Instead of a "Sponsor" card, we could just have a loan card that reads: Gain 1, when played do nothing, but pay 2 this round to FORGET this card.
9. Trial a CO-OP mode where all players control a single car and try to race it against AI.


## Design Notes:
1. 

# Player test feedback and notes

## Second playthough
Things trialed:
Track: 21 pieces [8 straight, 6 left, 6 right, 1 crossover].
- Time about 2 hours
- Traditional deck building (10 card starting deck, draw 5, discard all, shuffle when your deck runs out)
- Played with 2 AI
  1. It had the same starting deck, and played 5 random cards each round (always revealing last). At the start of each market phase the last card on the track was added to it's discard pile.
  2. One AI had 2d6, rolled at the start of the market phase and moved that many forward in the lane it was in. It then played 2 cards (the momentum of it's previous gained card) and the last card of the market track. This market card replaces the previously owned card which returns to the market discard.

The AI both lost here. AI 1 was closer to Miss. The game took too long, with 1 lap taking about 2 hours. Miss really struggled with how the corner system and directional cards work. Didn't get to see many of the market cards because the game only lasted 6 rounds! It just took that long to get around the track. Foresight and Hindsight cards need rejigging, as well as the "Learner" cards

## Third play test
Things trialed:
Track: 21 pieces [8 straight, 6 left, 6 right, 1 crossover].
- Time about 1 hour, for 1 lap.
- Played with trashing a card each time you purchase a new card.
- Played with 1 AI, it had the same starting deck, and played 6 cards each round (always activating last), with the 6th being the last card from the market. This card was then added to this AIs deck and it's first revealed card was trashed.

This went much better. The AI ended up winning by almost a full "round" worth, but for most of the game it was neck and neck. A lot of car bumping, a few crashes but not a huge amount. Hooks worked well, oil is cool, obsticles are cool.
We both had a lot of fun actually, which is super promising!

### Actions
- Try Reducing track size by 4 pieces to allow for 2 laps.
- No change to AI just yet
- Add some unique cards
- Add Some driver cards
- Add an advanced market?
- Add some player dash boards and a round tracker, with instructions for collecting stats during the game.
- Add a glossary dashboard for all the card terminology