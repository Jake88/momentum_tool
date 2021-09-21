import React, { useCallback, useState } from 'react'
import DTI from 'dom-to-image'
import FileSaver from 'file-saver'

import { Button, Input, Row } from '../../CommonComponents'

export const CardSaver = () => {
  const [inputValue, setInputValue] = useState('')
  const saveFiles = useCallback(async() => {
    let i = 1
    while (i > 0) {
      const el = document.getElementById(inputValue + i)
      if (el) {
        const tempIndex = i
        await DTI.toBlob(el).then(blob =>
          FileSaver.saveAs(blob, inputValue + tempIndex + '.png')
        )
        i++
      } else {
        i = 0
        const el = document.getElementById(inputValue)
        if (el)
          DTI.toBlob(el).then(blob =>
            FileSaver.saveAs(blob, inputValue + '.png')
          )
      }
    }
  }, [inputValue])

  return (
    <Row center>
      <Input
        id='cardSaverIdPrefix'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button id='cardSaver' onClick={saveFiles}>
        Save cards
      </Button>
    </Row>
  )
}
