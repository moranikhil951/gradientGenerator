// Write your code here

import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, onChangeMethodDirectioItem, isActiveButton} = props
  const {displayText, value} = eachDirection

  const displayClick = () => {
    onChangeMethodDirectioItem(value)
  }

  return (
    <li>
      <DirectionButton
        type="button"
        isActiveButton={isActiveButton}
        onClick={displayClick}
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
