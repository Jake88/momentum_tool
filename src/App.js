import React, { useEffect, useState } from 'react'

import { Card } from './cards/Card'
import { CardAbility } from './cards/CardAbility'
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
        {selectedCardList.map((cardConfig, index) => { 

          return cardConfig && cardConfig.type === 'ABILITY'
            ? <CardAbility key={cardConfig.id + index} cardConfig={cardConfig} />
            : <Card key={cardConfig.id + index} cardConfig={cardConfig} />
        })}
        <CardBack />
      </AppContainer>
    </div>
  )
}

export default App
