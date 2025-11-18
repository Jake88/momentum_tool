import React, { useState } from 'react'

import { Card } from './cards/Card'
import { CardBack } from './cards/CardBack'
import { CardSaver } from './cardSaver/CardSaver'
import { Sidebar } from './sidebar/Sidebar'
import { CardConfig } from './types/card.types'
import { ThemeProvider, useTheme } from './context/ThemeContext'

import { AppContainer } from './App.styles'

function AppContent() {
  const [selectedCardList, setCardList] = useState<CardConfig[]>([])
  const { theme } = useTheme()

  return (
    <div style={{ backgroundColor: theme.colors.background, minHeight: '100vh' }}>
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
