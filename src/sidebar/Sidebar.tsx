import React, { useState, useCallback, useEffect } from 'react'

import { calculateCardStats } from '../cards/cardUtils/cardUtils'
import { MOVEMENT_ICON } from '../cards/cardUtils/cardConstants'
import { CardConfig, CardStats } from '../types/card.types'
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

import { Button, Select, Input } from '../CommonComponents'
import { Divider, StyledSidebar } from './Sidebar.styles'
import { CardSaver } from '../cardSaver/CardSaver'
import { StatsPanel } from './StatsPanel'
import { useTheme } from '../context/ThemeContext'

const MOVEMENT_TIER: Record<string, number> = {}
Object.values(MOVEMENT_ICON).forEach((icon, index) => {
  MOVEMENT_TIER[icon.NAME] = index
})

interface SidebarProps {
  setCardList: (cards: CardConfig[]) => void
  cardList: CardConfig[]
}

export const Sidebar: React.FC<SidebarProps> = ({ setCardList, cardList }) => {
  const { toggleTheme, isDark } = useTheme()
  const [orderBy, setOrderBy] = useState<string>('')
  const [showStats, setShowStats] = useState<boolean>(false)
  const [currentStats, setCurrentStats] = useState<CardStats | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [costFilter, setCostFilter] = useState<{ min: number; max: number }>({ min: 0, max: 20 })
  const [xpFilter, setXpFilter] = useState<{ min: number; max: number }>({ min: 0, max: 10 })

  const applyFilters = useCallback((cards: CardConfig[]): CardConfig[] => {
    let filtered = cards

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(card =>
        card.name.toLowerCase().includes(term) ||
        card.ability?.DESC.toLowerCase().includes(term) ||
        card.set.toLowerCase().includes(term)
      )
    }

    // Cost filter
    filtered = filtered.filter(card =>
      card.cost >= costFilter.min && card.cost <= costFilter.max
    )

    // XP filter
    filtered = filtered.filter(card =>
      card.xpGain >= xpFilter.min && card.xpGain <= xpFilter.max
    )

    return filtered
  }, [searchTerm, costFilter, xpFilter])

  const onClick = (cardList: CardConfig[]) => {
    const filtered = applyFilters(cardList)
    sortList(filtered)
    // Calculate and store stats
    if (filtered.length > 0) {
      const stats = calculateCardStats(filtered)
      setCurrentStats(stats)
      if (process.env.NODE_ENV === 'development') {
        console.log('[Dev] Card Stats:', stats)
      }
    } else {
      setCurrentStats(null)
    }
  }

  const clearFilters = () => {
    setSearchTerm('')
    setCostFilter({ min: 0, max: 20 })
    setXpFilter({ min: 0, max: 10 })
  }

  const sortList = useCallback(
    (cardList: CardConfig[]) => {
      const sortedArray = [...cardList]

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
      <Button fullWidth onClick={toggleTheme} style={{ marginBottom: '10px' }}>
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </Button>
      <Divider />
      <CardSaver />
      <Divider />

      <h1>Search & Filter</h1>
      <Input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', marginBottom: '8px', marginRight: 0 }}
      />

      <label style={{ color: '#90EE90', fontSize: '12px', marginTop: '8px', display: 'block' }}>
        Cost: {costFilter.min} - {costFilter.max}
      </label>
      <Input
        type="range"
        min="0"
        max="20"
        value={costFilter.max}
        onChange={(e) => setCostFilter({ ...costFilter, max: parseInt(e.target.value) })}
        style={{ width: '100%', marginBottom: '8px', marginRight: 0 }}
      />

      <label style={{ color: '#90EE90', fontSize: '12px', marginTop: '8px', display: 'block' }}>
        XP: {xpFilter.min} - {xpFilter.max}
      </label>
      <Input
        type="range"
        min="0"
        max="10"
        value={xpFilter.max}
        onChange={(e) => setXpFilter({ ...xpFilter, max: parseInt(e.target.value) })}
        style={{ width: '100%', marginBottom: '8px', marginRight: 0 }}
      />

      <Button fullWidth onClick={clearFilters} style={{ marginTop: '8px' }}>
        Clear Filters
      </Button>
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

      <Divider />
      <StatsPanel
        stats={currentStats}
        isOpen={showStats}
        onToggle={() => setShowStats(!showStats)}
      />
    </StyledSidebar>
  )
}
