import React, { useState, useCallback, useEffect } from 'react'

import { calculateCardStats } from '../cards/cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cards/cardUtils/cardConstants'
import { CardConfig } from '../types/card.types'
// CARDS
import {
  ALL_CARDS,
  STARTER_CARDS,
  AUTO_SHOP_CARDS,
  BASIC_CARDS,
  UNIQUE_CARDS,
  ADVANCED_CARDS,
  CHOP_SHOP_CARDS
} from '../cards'

import { Button, Select } from '../CommonComponents'
import { Divider, StyledSidebar } from './Sidebar.styles'
import { CardSaver } from '../cardSaver/CardSaver'

const MOVEMENT_TIER: Record<string, number> = {}
Object.values(MOVEMENT_ICON).forEach((icon, index) => {
  MOVEMENT_TIER[icon.NAME] = index
})

interface SidebarProps {
  setCardList: (cards: CardConfig[]) => void
  cardList: CardConfig[]
}

export const Sidebar: React.FC<SidebarProps> = ({ setCardList, cardList }) => {
  const [orderBy, setOrderBy] = useState<string>('')

  const onClick = (cardList: CardConfig[]) => {
    sortList(cardList)
    console.log(calculateCardStats(cardList))
  }

  const sortList = useCallback(
    (cardList: CardConfig[]) => {
      const sortedArray = [...cardList]

      console.log('asdasd', orderBy)
      switch (orderBy) {
        case 'xpGain':
          sortedArray.sort((current, next) =>
            current.xpGain > next.xpGain ? 1 : -1
          )
          break
        case 'cost':
          sortedArray.sort((current, next) => (current.cost > next.cost ? 1 : -1))
          break
        case 'movement':
          sortedArray.sort((current, next) =>
            MOVEMENT_TIER[current.momentum?.NAME || ''] >
            MOVEMENT_TIER[next.momentum?.NAME || '']
              ? 1
              : -1
          )
      }

      setCardList(sortedArray)
    },
    [orderBy, setCardList]
  )

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
      <Select
        value={orderBy}
        onChange={(e) => {
          setOrderBy(e.target.value)
        }}
      >
        <option value=''>None</option>
        <option value='xpGain'>XP Gain</option>
        <option value='cost'>Cost</option>
        <option value='movement'>Movement Type</option>
      </Select>

      <h1>Filter Cards</h1>
      <Button fullWidth onClick={() => onClick(ALL_CARDS)}>
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
      <Button fullWidth onClick={() => onClick(STARTER_CARDS)}>
        Starter Cards
      </Button>
      <Button fullWidth onClick={() => onClick(BASIC_CARDS)}>
        Basic Cards
      </Button>
      <Button fullWidth onClick={() => onClick(AUTO_SHOP_CARDS)}>
        Auto Shop Cards
      </Button>
      <Button fullWidth onClick={() => onClick(UNIQUE_CARDS)}>
        Unique Cards
      </Button>
      <Button fullWidth onClick={() => onClick(ADVANCED_CARDS)}>
        Advanced Cards
      </Button>
      <Button fullWidth onClick={() => onClick(CHOP_SHOP_CARDS)}>
        Chop shop
      </Button>

      {/* <textarea value={stats} /> */}
    </StyledSidebar>
  )
}
