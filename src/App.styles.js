import Styled from 'styled-components'
import { PADDING_LG } from './CommonComponents'

export const AppContainer = Styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica Neue';
  margin: 0;
  padding: 0;
  padding-top: ${PADDING_LG};
`
