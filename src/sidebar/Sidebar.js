import React from 'react'

// CARDS
import { ALL_CARDS, STARTER_CARDS } from '../cards'

import { Button } from '../CommonComponents'
import { Divider, StyledSidebar } from './Sidebar.styles'

export const Sidebar = ({ setCardList }) => {
  return (
    <StyledSidebar>
      <h1>Momentum Tool</h1>
      <Divider />
      <Button
        fullWidth
        onClick={() => {
          setCardList(ALL_CARDS)
        }}
      >
        All
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
        onClick={() => {
          setCardList(STARTER_CARDS)
        }}
      >
        Starter Cards
      </Button>
    </StyledSidebar>
  )
}
