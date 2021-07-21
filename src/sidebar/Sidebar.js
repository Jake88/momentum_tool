import React, { useState, useCallback } from 'react'

import { calculateCardStats } from '../cards/cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cards/cardUtils/cardConstants'
// CARDS
import { ALL_CARDS, STARTER_CARDS, AUTO_SHOP_CARDS, BASIC_CARDS } from '../cards'

import { Button, Select } from '../CommonComponents'
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
    console.log(calculateCardStats(cardList))
  }

  const sortList = useCallback(cardList => {
    const sortedArray = [...cardList]

    switch(orderBy) {
      case 'xpGain':
        sortedArray.sort((current, next) => current.xpGain - next.xpGain)
        break
      case 'cost':
        sortedArray.sort((current, next) => current.cost - next.cost)
        break
      case 'movement':
        sortedArray.sort((current, next) => MOVEMENT_TIER[current.momentum?.NAME] - MOVEMENT_TIER[next.momentum?.NAME])
    }

    setCardList(sortedArray)
  }, [orderBy])
  
  return (
    <StyledSidebar>
      <h1>Momentum Tool</h1>
      <Divider />
      <CardSaver />
      <Divider />

      <h1>Order by</h1>
      <Select value={orderBy} onChange={e => {
        setOrderBy(e.target.value)
        sortList(cardList)
      }}>
        <option value=''>None</option>
        <option value='xpGain'>XP Gain</option>
        <option value='cost'>Cost</option>
        <option value='movement'>Movement Type</option>
      </Select>

      <h1>Filter Cards</h1>
      <Button
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
      </Button>
      <Button
        fullWidth
        onClick={() => onClick(AUTO_SHOP_CARDS)}
      >
        Auto Shop Cards
      </Button>

      {/* <textarea value={stats} /> */}
    </StyledSidebar>
  )
}
