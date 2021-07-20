import { Card } from './cards/Card'
import { STARTER_CARDS } from './cards/cardSets/starterCards'
import './App.css'

function App () {
  return (
    <div className='App'>
      {STARTER_CARDS.map(cardConfig => (
        <Card key={cardConfig.id} cardConfig={cardConfig} />
      ))}
    </div>
  )
}

export default App
