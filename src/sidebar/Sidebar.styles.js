import Styled from 'styled-components'

import { PADDING_LG, PADDING_SM } from '../CommonComponents'

export const StyledSidebar = Styled.aside`
position: absolute;
display: flex;
flex-direction: column;

align-items: center;
justify-content: top;
top: 0;
left: 0;
height: 100%;
width: 250px;
background-color: #444;
box-shadow: 4px 0 4px #222;
padding: ${PADDING_LG};
box-sizing: border-box;

h1 {
  color: yellowgreen;
  text-shadow: 0px 1px 2px navy;
}

button + button {
  margin-top: ${PADDING_SM}
}
`

export const Divider = Styled.hr`
width: 100%;
border-color: #333;
`
