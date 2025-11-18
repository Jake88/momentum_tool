import React from 'react'
import Styled from 'styled-components'
import { CardStats } from '../types/card.types'
import { GREEN, NAVY } from '../constants/styles'

interface StatsPanelProps {
  stats: CardStats | null
  isOpen: boolean
  onToggle: () => void
}

const StatsContainer = Styled.div`
  margin-top: 10px;
  padding: 12px;
  background-color: #333;
  border-radius: 4px;
  border: 1px solid #555;
`

const StatRow = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
  color: #ccc;

  strong {
    color: ${GREEN};
  }
`

const StatSection = Styled.div`
  margin-top: 12px;
  padding-top: 8px;
  border-top: 1px solid #555;

  h4 {
    color: ${GREEN};
    font-size: 13px;
    margin: 0 0 8px 0;
  }
`

const ToggleButton = Styled.button`
  width: 100%;
  padding: 8px;
  background-color: ${NAVY};
  color: ${GREEN};
  border: 1px solid ${GREEN};
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;

  &:hover {
    background-color: #1a3a5a;
  }
`

export const StatsPanel: React.FC<StatsPanelProps> = ({ stats, isOpen, onToggle }) => {
  if (!stats) return null

  return (
    <>
      <ToggleButton onClick={onToggle}>
        {isOpen ? '▼ Hide Statistics' : '▶ Show Statistics'}
      </ToggleButton>

      {isOpen && (
        <StatsContainer>
          <StatRow>
            <span>Total Cards:</span>
            <strong>{stats.cardCount}</strong>
          </StatRow>

          <StatSection>
            <h4>Cost Analysis</h4>
            <StatRow>
              <span>Average:</span>
              <strong>{stats.cost.avg.toFixed(2)}</strong>
            </StatRow>
            <StatRow>
              <span>Range:</span>
              <strong>{stats.cost.min} - {stats.cost.max}</strong>
            </StatRow>
            <StatRow>
              <span>Per Hand:</span>
              <strong>{stats.cost.avgPerHand.toFixed(2)}</strong>
            </StatRow>
            <StatRow>
              <span>Total:</span>
              <strong>{stats.cost.sum}</strong>
            </StatRow>
          </StatSection>

          <StatSection>
            <h4>XP Generation</h4>
            <StatRow>
              <span>Average:</span>
              <strong>{stats.xpGain.avg.toFixed(2)}</strong>
            </StatRow>
            <StatRow>
              <span>Range:</span>
              <strong>{stats.xpGain.min} - {stats.xpGain.max}</strong>
            </StatRow>
            <StatRow>
              <span>Per Hand:</span>
              <strong>{stats.xpGain.avgPerHand.toFixed(2)}</strong>
            </StatRow>
            <StatRow>
              <span>Total:</span>
              <strong>{stats.xpGain.sum}</strong>
            </StatRow>
          </StatSection>

          <StatSection>
            <h4>Movement Distribution</h4>
            <StatRow>
              <span>Straights:</span>
              <strong>{stats.movementStats.possibleStraights} ({((stats.movementStats.STRAIGHT.percentage || 0) + (stats.movementStats.STRAIGHT_OR_LEFT.percentage || 0) + (stats.movementStats.STRAIGHT_OR_RIGHT.percentage || 0) + (stats.movementStats.WILD.percentage || 0)).toFixed(1)}%)</strong>
            </StatRow>
            <StatRow>
              <span>Lefts:</span>
              <strong>{stats.movementStats.possibleLefts}</strong>
            </StatRow>
            <StatRow>
              <span>Rights:</span>
              <strong>{stats.movementStats.possibleRights}</strong>
            </StatRow>
          </StatSection>

          <StatSection>
            <h4>Movement Types</h4>
            {Object.entries(stats.movementStats).map(([key, value]) => {
              if (typeof value === 'object' && 'totalSymbols' in value && value.totalSymbols > 0) {
                return (
                  <StatRow key={key}>
                    <span>{key}:</span>
                    <strong>{value.totalSymbols} ({value.percentage.toFixed(1)}%)</strong>
                  </StatRow>
                )
              }
              return null
            })}
          </StatSection>
        </StatsContainer>
      )}
    </>
  )
}
