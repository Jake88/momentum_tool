import Styled from 'styled-components'

export const CardBody = Styled.div`
  width: 25%;
  height: 300px;
  padding: 5px;
  border: 1px solid grey;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`

export const CardCost = Styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 10px;
  left: 10px;
  border: 1px solid grey;
  border-radius: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardSet = Styled.h2`
  position: absolute;
  height: 30px;
  font-size: 20px;
  margin: 0;
  flex-grow: 1;
  top: 10px;
  right: 10px;
  display: flex;
  font-weight: normal;
  text-align: right;
`

export const CardName = Styled.h3`
  position: absolute;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
  top: 30px;
  right: 10px;
  text-align: right;
`

export const CardAbilitySection = Styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const CardXpGain = Styled.div`
  height: 50px;
  width: 50px;
  bottom: 60px;
  right: 10px;
  border: 1px solid grey;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    position: absolute;
    top: -50px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CardAbility = Styled.div`
  height: auto;
  min-height: 60px;
  font-size: 12px;
  flex-grow: 1;
  width: 100%;
  border-top: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`

export const CardMovementSection = Styled.div`
  height: 60px;
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(178,178,178,1) 100%);

  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    width: 33.3%;
    background-size: 80px;
    background-position: center;
  }

  img {
    height: 130px;
  }
`

export const MomentumSection = Styled.div`
  border-left: 1px solid #999;
  background-image: url(${({src})=> src});
`

export const MomentumLabel = Styled.label`
  font-size: 10px;
  text-transform: uppercase;
  font-style: italic;
`

export const MovementIcon = Styled.div`
    background-image: url(${({src})=> src});
    width: 25%;
`