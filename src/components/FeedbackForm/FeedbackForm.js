import React, {useState, useCallback, useMemo} from 'react'
import Styled from 'styled-components'
// create a react component with form fields that allow easy entry of game feedback.
/* 
iunclude:
- Number of track pieces and types of track pieces
- Duration (timer?)
- Fun score (1-5 radio buttons)
- Repeatable round tracker that can identify at what round we started lap 2 etc

- # of AI
- Repeatable textarea for AI types

- Repeatable areas for new features
- Repeatable area for removed features

- Repeatable area for general comments

- Repeatable area for action items


Save this all to a new JSON file. Previous JSON files should be viewable in either this or another read only form
*/

const Flex = Styled.section`
  display: flex;
  flex-direction: row;

  & > section {
    width: 50%
    display: flex;
    flex-direction: column;
  }
`

const Left = Styled.section`
`

const Right = Styled.section` 
  color: #eee;
`

const TRACK_TYPE = [
  'STRAIGHT', 'L_CORNER', 'R_CORNER', '3_LANE_CROSS'
]


export const FeedbackForm = (props) => {
  const [newTrackType, setNewTrackType] = useState('')
  const [pieceAmount, setNewPieceAmount] = useState('')
  const [trackPieces, setTrackPieces] = useState([]) // {type: STRAIGHT, amt: 0}

  // const [trackPieces, setTrackPieces] = useState('') 
  // const [trackPieces, setTrackPieces] = useState('') 
  // const [trackPieces, setTrackPieces] = useState('') 
  // const [trackPieces, setTrackPieces] = useState('') 
  // const [trackPieces, setTrackPieces] = useState('') 
  // const [trackPieces, setTrackPieces] = useState('')

  const addTrackPiece = useCallback((e) => {
    setTrackPieces([...trackPieces, {type: newTrackType, amt: pieceAmount}])
    setNewTrackType('')
    setNewPieceAmount('')
  }, [trackPieces, newTrackType, pieceAmount ])

  const removeOnePiece = useCallback(type => (e) => {
    for(let i = 0;i<trackPieces.length;i++) {
      if(trackPieces[i].type === type) {
        if (trackPieces[i].amt > 1) trackPieces[i].amt--
        else {
          trackPieces.splice(i)
          i = 1000
        }        
      }
    }
    setTrackPieces([...trackPieces])
  }, [trackPieces, newTrackType, pieceAmount ])

  const addOnePiece = useCallback(type => (e) => {
    for(let i = 0;i<trackPieces.length;i++) {
      if(trackPieces[i].type === type) {
        trackPieces[i].amt++
      }
    }
    setTrackPieces([...trackPieces])  
  }, [trackPieces, newTrackType, pieceAmount ])

  const onChange = setter => e => setter(e.target.value)

  return (
    <Flex>
      <Left>
      <form id='fedbackForm'>
        <fieldset>
          <select id='newTrackType' placeholder='Track type' onChange={onChange(setNewTrackType)}>
            <option value=''>Track type</option>
            {TRACK_TYPE
              .filter(type => {
                let flag = true
                trackPieces.forEach(piece => {
                  if (piece.type === type) flag = false
                })
                return flag
              })
              .map(type => <option key={type} value={type}>{type}</option>)
            }
          </select>
          <input id='newPieceAmount' type='number' onChange={onChange(setNewPieceAmount)}/>
          
          <button type='button' id='addTrackPiece' onClick={addTrackPiece}>Add track piece</button>
          <button type='button' id='saveTrack' onClick={()=>{console.log('TODO')}}>Save track config</button>
        </fieldset>
      </form>
      </Left>
      <Right>
        <div>
          <h1>Track Pieces</h1>
          <ul>
            {trackPieces.map(({type, amt}) => (
              <li key={type + amt}>
                TYPE: {type}, AMOUNT: {amt}
                <button type='button' id={'removeTrackPiece' + type} onClick={removeOnePiece(type)}>-</button>
                <button type='button' id={'increaseTrackPiece' + type} onClick={addOnePiece(type)}>+</button>
              </li>
            ))}
          </ul>
        </div>
      </Right>
    </Flex>

  )
} 