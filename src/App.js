import React, { useEffect, useState } from 'react'

import { Card } from './cards/Card'
import { CardBack } from './cards/CardBack'
import { CardSaver } from './cardSaver/CardSaver'
import { Sidebar } from './sidebar/Sidebar'

import { AppContainer } from './App.styles'

function App () {
  const [selectedCardList, setCardList] = useState([])
  return (
    <div>
      <Sidebar setCardList={setCardList} cardList={selectedCardList} />
      <AppContainer>
        {selectedCardList.map(cardConfig => (
          <Card key={cardConfig.id} cardConfig={cardConfig} />
        ))}
        <CardBack />
      </AppContainer>
    </div>
  )
}

export default App
