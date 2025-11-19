import React, { useState } from 'react'
import Styled from 'styled-components'
import { MOVEMENT_ICON, CARD_ABILITY } from '../cards/cardUtils/cardConstants'
import { CardConfig, CardCreationConfig } from '../types/card.types'
import { createCardSet } from '../cards/cardUtils/cardUtils'
import { Card } from '../cards/Card'
import { Button, Input, Select } from '../CommonComponents'
import { GREEN, NAVY } from '../constants/styles'

const EditorContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const EditorPanel = Styled.div`
  background-color: #2a2a2a;
  border: 2px solid ${GREEN};
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

const FormSection = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const PreviewSection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 20px;
`

const Label = Styled.label`
  color: ${GREEN};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`

const CloseButton = Styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #c9302c;
  }
`

interface CardEditorProps {
  isOpen: boolean
  onClose: () => void
  onSave: (card: CardConfig) => void
}

export const CardEditor: React.FC<CardEditorProps> = ({ isOpen, onClose, onSave }) => {
  const [cardName, setCardName] = useState('New Card')
  const [cardSet, setCardSet] = useState('Custom')
  const [momentum, setMomentum] = useState<string>('')
  const [movement, setMovement] = useState<string>('')
  const [ability, setAbility] = useState<string>('')
  const [abilityParam, setAbilityParam] = useState<number>(1)
  const [xpGain, setXpGain] = useState<number>(1)
  const [costOverride, setCostOverride] = useState<string>('')
  const [costModifier, setCostModifier] = useState<number>(0)

  if (!isOpen) return null

  const getAbility = () => {
    if (!ability) return undefined
    const abilityDef = (CARD_ABILITY as any)[ability]
    if (typeof abilityDef === 'function') {
      return abilityDef(abilityParam)
    }
    return abilityDef
  }

  const getMovementIcon = (name: string) => {
    return Object.values(MOVEMENT_ICON).find(icon => icon.NAME === name)
  }

  // Create preview card
  const createCard = createCardSet(cardSet)
  const previewCard = createCard({
    name: cardName,
    momentum: momentum ? getMovementIcon(momentum) : undefined,
    movement: movement ? [getMovementIcon(movement)!] : [],
    xpGain,
    ability: getAbility(),
    overwriteCost: costOverride ? parseInt(costOverride) : undefined,
    costModifier
  })

  const handleSave = () => {
    onSave(previewCard)
    // Reset form
    setCardName('New Card')
    setMomentum('')
    setMovement('')
    setAbility('')
    setXpGain(1)
    setCostOverride('')
    setCostModifier(0)
  }

  const movementOptions = Object.values(MOVEMENT_ICON)
  const abilityOptions = Object.keys(CARD_ABILITY)

  return (
    <EditorContainer onClick={onClose}>
      <EditorPanel onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕ Close</CloseButton>

        <FormSection>
          <h2 style={{ color: GREEN }}>Create New Card</h2>

          <div>
            <Label>Card Name</Label>
            <Input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              style={{ width: '100%', marginRight: 0 }}
            />
          </div>

          <div>
            <Label>Card Set</Label>
            <Input
              type="text"
              value={cardSet}
              onChange={(e) => setCardSet(e.target.value)}
              style={{ width: '100%', marginRight: 0 }}
            />
          </div>

          <div>
            <Label>Momentum Type</Label>
            <Select
              value={momentum}
              onChange={(e) => setMomentum(e.target.value)}
              style={{ width: '100%', marginRight: 0 }}
            >
              <option value="">None</option>
              {movementOptions.map(icon => (
                <option key={icon.NAME} value={icon.NAME}>{icon.NAME}</option>
              ))}
            </Select>
          </div>

          <div>
            <Label>Movement Type</Label>
            <Select
              value={movement}
              onChange={(e) => setMovement(e.target.value)}
              style={{ width: '100%', marginRight: 0 }}
            >
              <option value="">None</option>
              {movementOptions.map(icon => (
                <option key={icon.NAME} value={icon.NAME}>{icon.NAME}</option>
              ))}
            </Select>
          </div>

          <div>
            <Label>Ability</Label>
            <Select
              value={ability}
              onChange={(e) => setAbility(e.target.value)}
              style={{ width: '100%', marginRight: 0 }}
            >
              <option value="">None</option>
              {abilityOptions.map(ab => (
                <option key={ab} value={ab}>{ab}</option>
              ))}
            </Select>
          </div>

          {ability && typeof (CARD_ABILITY as any)[ability] === 'function' && (
            <div>
              <Label>Ability Parameter</Label>
              <Input
                type="number"
                value={abilityParam}
                onChange={(e) => setAbilityParam(parseInt(e.target.value) || 1)}
                min="1"
                max="10"
                style={{ width: '100%', marginRight: 0 }}
              />
            </div>
          )}

          <div>
            <Label>XP Gain</Label>
            <Input
              type="number"
              value={xpGain}
              onChange={(e) => setXpGain(parseInt(e.target.value) || 0)}
              min="0"
              max="10"
              style={{ width: '100%', marginRight: 0 }}
            />
          </div>

          <div>
            <Label>Cost Override (leave empty for auto-calculate)</Label>
            <Input
              type="number"
              value={costOverride}
              onChange={(e) => setCostOverride(e.target.value)}
              placeholder="Auto"
              min="0"
              max="20"
              style={{ width: '100%', marginRight: 0 }}
            />
          </div>

          <div>
            <Label>Cost Modifier</Label>
            <Input
              type="number"
              value={costModifier}
              onChange={(e) => setCostModifier(parseInt(e.target.value) || 0)}
              min="-5"
              max="5"
              style={{ width: '100%', marginRight: 0 }}
            />
          </div>

          <Button fullWidth onClick={handleSave} style={{ marginTop: '20px' }}>
            💾 Save Card
          </Button>
        </FormSection>

        <PreviewSection>
          <h3 style={{ color: GREEN, marginBottom: '20px' }}>Preview</h3>
          <div style={{ transform: 'scale(1.2)' }}>
            <Card cardConfig={previewCard} />
          </div>
          <div style={{ marginTop: '20px', color: '#ccc', fontSize: '12px' }}>
            <p><strong>Estimated Cost:</strong> {previewCard.estimatedCost}</p>
            <p><strong>Final Cost:</strong> {previewCard.cost}</p>
            <p><strong>Card ID:</strong> {previewCard.id}</p>
          </div>
        </PreviewSection>
      </EditorPanel>
    </EditorContainer>
  )
}
