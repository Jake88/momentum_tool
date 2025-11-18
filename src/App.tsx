import React, { useState } from 'react'

import { Card } from './cards/Card'
import { CardBack } from './cards/CardBack'
import { CardSaver } from './cardSaver/CardSaver'
import { Sidebar } from './sidebar/Sidebar'
import { CardConfig } from './types/card.types'

import { AppContainer } from './App.styles'

function App() {
  const [selectedCardList, setCardList] = useState<CardConfig[]>([])

  return (
    <div>
      <Sidebar setCardList={setCardList} cardList={selectedCardList} />
      <AppContainer>
        {selectedCardList.map((cardConfig) => (
          <Card key={cardConfig.id} cardConfig={cardConfig} />
        ))}
        <CardBack />
      </AppContainer>
    </div>
  )
}

export default App
