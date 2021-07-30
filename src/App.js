import React, { useEffect, useState } from 'react'

import { Card } from './cards/Card'
import { CardAbility } from './cards/CardAbility'
import { CardUpgrade } from './cards/CardUpgrade'
import { CardBack } from './cards/CardBack'
import { CardSaver } from './cardSaver/CardSaver'
import { Sidebar } from './sidebar/Sidebar'

import { AppContainer } from './App.styles'
import { FeedbackForm } from './FeedbackForm/FeedbackForm'

function App () {
  const [selectedCardList, setCardList] = useState([])
  return (
    <div>
      <Sidebar setCardList={setCardList} cardList={selectedCardList} />
      <AppContainer>
        {selectedCardList.map((cardConfig, index) => { 
          if (cardConfig && cardConfig.type === 'ABILITY') return <CardAbility key={cardConfig.id + index} cardConfig={cardConfig} />
          if (cardConfig && cardConfig.type === 'UPGRADE') return <CardUpgrade key={cardConfig.id + index} cardConfig={cardConfig} />
          return <Card key={cardConfig.id + index} cardConfig={cardConfig} />
        })}
        <CardBack />
      </AppContainer>
      <FeedbackForm />
    </div>
  )
}

export default App
