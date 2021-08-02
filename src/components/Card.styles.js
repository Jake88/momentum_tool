import Styled from 'styled-components'

export const CardBody = Styled.div`
  width: 500px; // Tabletop simulator sizes
  height: 720px;
  border: 1px solid #eee;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({background}) => background || '#eee'};
  overflow: hidden;
  background-color: black;
`

