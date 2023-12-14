import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container,
  Heading,
  DirectionPara,
  UnorderedList,
  FlexContainer,
  ColorPick,
  Color,
  GenerateButton,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    colorToFormate: '#8ae323',
    colorFromFormate: '#014f7b',
    directionValue: '',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  onFromChangeColor = event => {
    this.setState({colorFromFormate: event.target.value})
  }

  onToChangeColor = event => {
    this.setState({colorToFormate: event.target.value})
  }

  generateButton = () => {
    const {directionValue, colorFromFormate, colorToFormate} = this.state
    this.setState({
      gradientValue: `to ${directionValue},${colorFromFormate}, ${colorToFormate}`,
    })
  }

  onChangeMethodDirectioItem = direction => {
    this.setState({directionValue: direction})
  }

  render() {
    const {
      colorToFormate,
      colorFromFormate,
      gradientValue,
      directionValue,
    } = this.state
    console.log(colorToFormate, colorFromFormate)
    return (
      <Container bgColor={gradientValue} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionPara>Choose Direction</DirectionPara>
        <UnorderedList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              eachDirection={eachDirection}
              key={eachDirection.directionId}
              onChangeMethodDirectioItem={this.onChangeMethodDirectioItem}
              isActiveButton={eachDirection.value === directionValue}
            />
          ))}
        </UnorderedList>
        <ColorPick>Pick the Colors</ColorPick>
        <FlexContainer>
          <div>
            <Color>{colorToFormate}</Color>
            <Input
              type="color"
              value={colorToFormate}
              onChange={this.onToChangeColor}
            />
          </div>
          <div>
            <Color>{colorFromFormate}</Color>
            <Input
              type="color"
              value={colorFromFormate}
              onChange={this.onFromChangeColor}
            />
          </div>
        </FlexContainer>
        <GenerateButton type="button" onClick={this.generateButton}>
          Generate
        </GenerateButton>
      </Container>
    )
  }
}

export default GradientGenerator
