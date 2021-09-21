import React, { useState, useCallback, useEffect } from 'react'

import { calculateCardStats } from '../cards/cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cards/cardUtils/cardConstants'
// CARDS
// import { ALL_CARDS, STARTER_CARDS, BASIC_CARDS, UNIQUE_CARDS, ADVANCED_CARDS, AI_DECK } from '../cards'
import { STARTER_CARDS, AI_DECK, AUTO_GENERATED_CARDS, POWER_CARDS, BASIC_CARDS, ADVANCED_CARDS, ABILITY_CARDS } from '../cards'
import { CAR_UPGRADES } from '../abilities/carUpgrades'
import { DRIVERS } from '../abilities/driverPowers'


import { Button, Select } from '../../CommonComponents'
import { Divider, StyledSidebar } from './Sidebar.styles'
import { CardSaver } from '../cardSaver/CardSaver'

const MOVEMENT_TIER = {}
Object.values(MOVEMENT_ICON).forEach((icon, index) => {
  MOVEMENT_TIER[icon.NAME] = index
})

export const Sidebar = ({ setCardList, cardList }) => {
  const [orderBy, setOrderBy] = useState('')
  
  const onClick = cardList => {
    sortList(cardList)
    console.log('calculateCardStats', cardList, calculateCardStats(cardList))
  }

  const sortList = useCallback(cardList => {
    const sortedArray = [...cardList]

    switch(orderBy) {
      case 'xpGain':
        sortedArray.sort((current, next) => current.xpGain > next.xpGain ? 1 : -1)
        break
      case 'cost':
        sortedArray.sort((current, next) => current.cost > next.cost ? 1 : -1)
        break
      case 'movement':
        sortedArray.sort((current, next) => MOVEMENT_TIER[current.momentum?.NAME] > MOVEMENT_TIER[next.momentum?.NAME] ? 1 : -1)
    }

    setCardList(sortedArray)
  }, [orderBy])

  useEffect(() => {
    sortList(cardList)
  }, [sortList])
  
  return (
    <StyledSidebar>
      <h1>Momentum Tool</h1>
      <Divider />
      <CardSaver />
      <Divider />

      <h1>Order by</h1>
      <Select value={orderBy} onChange={e => {
        setOrderBy(e.target.value)
      }}>
        <option value=''>None</option>
        <option value='xpGain'>XP Gain</option>
        <option value='cost'>Cost</option>
        <option value='movement'>Movement Type</option>
      </Select>

      <h1>Filter Cards</h1>
       <Button
        fullWidth
        onClick={() => onClick(STARTER_CARDS)}
      >
        Starter cards
      </Button>
       <Button
        fullWidth
        onClick={() => onClick(AUTO_GENERATED_CARDS)}
      >
        Auto generated
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(BASIC_CARDS)}
      >
        Basic
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(ADVANCED_CARDS)}
      >
        Advanced
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(POWER_CARDS)}
      >
        Power
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(ABILITY_CARDS)}
      >
        Ability
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(CAR_UPGRADES)}
      >
        Card upgrades
      </Button>
      {/* <Button
        fullWidth
        onClick={() => onClick(ALL_CARDS)}
      >
        All
      </Button>
      <Button
        fullWidth
        onClick={() => onClick([...AUTO_SHOP_CARDS, ...BASIC_CARDS])}
      >
        All AutoShop cards
      </Button>
      <Button
        fullWidth
        onClick={() => onClick([...ADVANCED_CARDS, ...CHOP_SHOP_CARDS])}
      >
        All ChopShop cards
      </Button> */}
      {/* <Button
        fullWidth
        onClick={() => {
          setCardList([])
        }}
      >
        None
      </Button>
      <Divider />
      <Button
        fullWidth
        onClick={() => onClick(STARTER_CARDS)}
      >
        Starter Cards
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(BASIC_CARDS)}
      >
        Basic Cards
      </Button> */}
      {/* <Button
        fullWidth
        onClick={() => onClick(AUTO_SHOP_CARDS)}
      >
        Auto Shop Cards
      </Button> */}
      {/* <Button
        fullWidth
        onClick={() => onClick(UNIQUE_CARDS)}
      >
        Unique Cards
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(ADVANCED_CARDS)}
      >
        Advanced Cards
      </Button>
      <Button
        fullWidth
        onClick={() => setCardList(AI_DECK)}
      >
        Momentum AI
      </Button> */}
      {/* <Button
        fullWidth
        onClick={() => onClick(CHOP_SHOP_CARDS)}
      >
        Chop shop
      </Button> */}

      {/* <textarea value={stats} /> */}
      <h1>TODO list</h1>
      <ol>
        <li>Add driver cards</li>
        <li>Add unique cards</li>
        <li>Add car upgrade / mechanic market</li>
        <li>Create new track pieces</li>
        <li></li>
        <li></li>
      </ol>
    </StyledSidebar>
  )
}
