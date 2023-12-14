// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(${props => props.bgColor});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 25px;
`

export const DirectionPara = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 23px;
`

export const UnorderedList = styled.ul`
  display: flex;
  padding-left: 0px;
  list-style-type: none;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const ColorPick = styled.p`
  color: white;
  font-size: 16px;
`

export const Color = styled.p`
  color: white;
  font-size: 13px;
  margin-right: 10px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px;
  margin-top: 10px;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
`
