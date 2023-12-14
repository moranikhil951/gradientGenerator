// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  background-color: ${props =>
    props.isActiveButton ? '#ededed' : ' #ffffff79'};
  border: none;
  margin-right: 10px;
  opacity: ${props => (props.isActiveButton ? 1 : 0.5)};

  width: 100px;
  height: 30px;
`
