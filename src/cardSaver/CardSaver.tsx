import React, { useCallback, useState } from 'react'
import DTI from 'dom-to-image'
import FileSaver from 'file-saver'

import { Button, Input, Row } from '../CommonComponents'
import Styled from 'styled-components'
import { GREEN } from '../constants/styles'

const ExportSection = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StatusMessage = Styled.div<{ type: 'success' | 'error' | 'info' }>`
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${props =>
    props.type === 'success' ? '#5cb85c' :
    props.type === 'error' ? '#d9534f' :
    '#5bc0de'
  };
  color: white;
  text-align: center;
`

export const CardSaver: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null)
  const [exportCount, setExportCount] = useState(0)

  const saveFiles = useCallback(async () => {
    if (!inputValue.trim()) {
      setStatus({ type: 'error', message: 'Please enter a card ID prefix' })
      return
    }

    setIsExporting(true)
    setStatus({ type: 'info', message: 'Exporting cards...' })
    let count = 0

    try {
      let i = 1
      while (i > 0) {
        const el = document.getElementById(inputValue + i)
        if (el) {
          const tempIndex = i
          await DTI.toBlob(el).then(blob => {
            FileSaver.saveAs(blob, inputValue + tempIndex + '.png')
            count++
          })
          i++
        } else {
          i = 0
          const el = document.getElementById(inputValue)
          if (el) {
            await DTI.toBlob(el).then(blob => {
              FileSaver.saveAs(blob, inputValue + '.png')
              count++
            })
          }
        }
      }

      setExportCount(count)
      if (count > 0) {
        setStatus({ type: 'success', message: `✓ Exported ${count} card${count > 1 ? 's' : ''} successfully!` })
      } else {
        setStatus({ type: 'error', message: 'No cards found with that ID prefix' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Export failed. Please try again.' })
      console.error('Export error:', error)
    } finally {
      setIsExporting(false)
    }
  }, [inputValue])

  const exportAllVisible = useCallback(async () => {
    setIsExporting(true)
    setStatus({ type: 'info', message: 'Exporting all visible cards...' })
    let count = 0

    try {
      // Find all card elements
      const cardElements = document.querySelectorAll('[id^="C"], [id^="S"], [id^="A"], [id^="B"], [id^="U"]')

      for (const el of Array.from(cardElements)) {
        if (el.id) {
          await DTI.toBlob(el as HTMLElement).then(blob => {
            FileSaver.saveAs(blob, `${el.id}.png`)
            count++
          })
        }
      }

      setExportCount(count)
      if (count > 0) {
        setStatus({ type: 'success', message: `✓ Exported ${count} card${count > 1 ? 's' : ''} successfully!` })
      } else {
        setStatus({ type: 'error', message: 'No visible cards to export' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Export failed. Please try again.' })
      console.error('Export error:', error)
    } finally {
      setIsExporting(false)
    }
  }, [])

  return (
    <ExportSection>
      <h3 style={{ color: GREEN, margin: '0 0 8px 0', fontSize: '14px' }}>Export Cards</h3>

      <Input
        id='cardSaverIdPrefix'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          setStatus(null)
        }}
        placeholder="Enter card ID prefix..."
        style={{ width: '100%', marginRight: 0 }}
        disabled={isExporting}
      />

      <Button
        id='cardSaver'
        onClick={saveFiles}
        fullWidth
        disabled={isExporting}
        style={{ opacity: isExporting ? 0.6 : 1 }}
      >
        {isExporting ? '⏳ Exporting...' : '💾 Export by ID'}
      </Button>

      <Button
        onClick={exportAllVisible}
        fullWidth
        disabled={isExporting}
        style={{
          backgroundColor: '#5bc0de',
          opacity: isExporting ? 0.6 : 1
        }}
      >
        {isExporting ? '⏳ Exporting...' : '📦 Export All Visible'}
      </Button>

      {status && (
        <StatusMessage type={status.type}>
          {status.message}
        </StatusMessage>
      )}

      {exportCount > 0 && !isExporting && (
        <div style={{ fontSize: '11px', color: '#90EE90', textAlign: 'center', marginTop: '4px' }}>
          Total exported this session: {exportCount}
        </div>
      )}
    </ExportSection>
  )
}
