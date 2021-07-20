import styled from 'styled-components'

export const CardBody = styled.div`
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
`

export const CardCost = styled.div`
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

export const CardSet = styled.h2`
  position: absolute;
  height: 30px;
  font-size: 30px;
  flex-grow: 1;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
  font-weight: normal;
`

export const CardName = styled.h3`
  position: absolute;
  height: 30px;
  font-size: 30px;
  font-weight: bold;
  flex-grow: 1;
  top: 50px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
`

export const CardXpGain = styled.div`
  position: absolute;
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

export const CardAbility = styled.div`
  position: absolute;
  height: 60px;
  font-size: 50px;
  font-weight: bold;
  flex-grow: 1;
  bottom: 60px;
  border-top: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardMovement = styled.div`
  position: absolute;
  height: 60px;
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  flex-grow: 1;
  bottom: 0;
  border-top: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 130px
  }
`
