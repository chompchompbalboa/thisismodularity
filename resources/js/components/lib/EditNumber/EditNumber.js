//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, func, number } from 'prop-types'
import styled from 'styled-components'

import colors from '../../../config/colors'

import Icon from '../../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const EditNumber = ({ isDisabled, onChange, value }) => {
  return (
    <Container
      isDisabled={isDisabled}>
      <SubtractButton
        isDisabled={isDisabled}
        onClick={!isDisabled ? () => onChange(value - 1) : null}>
        <Icon 
          icon="SIGN_MINUS"
          size="1.5em"/>
      </SubtractButton>
      <NumberInput 
        disabled={isDisabled}
        onChange={(e) => onChange(Number(e.target.value))}
        value={isDisabled ? "" : value}/>
      <AddButton
        isDisabled={isDisabled}
        onClick={!isDisabled ? () => onChange(value + 1) : null}>
        <Icon 
          icon="SIGN_PLUS"
          size="1.5em"/>
      </AddButton>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditNumber.propTypes = {
  isDisabled: bool,
  value: number,
  onChange: func
}

EditNumber.defaultProps = {
  isDisabled: false
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  opacity: ${props => props.isDisabled ? "0.5" : "1"};
  min-width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 300;
  color: white;
`

const Button = styled.div`
  padding: 0.25em;
  cursor: ${props => props.isDisabled ? "auto" : "pointer"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  background-color: rgb(100,100,100);
  color: rgb(255, 255, 255);
  transition: all 0.25s;
  &:hover {
    background-color: ${props => props.isDisabled ? "rgb(100, 100, 100)" : "rgba(100,100,100,0.85)"};
    color: ${props => props.isDisabled ? "rgb(255, 255, 255)" : "rgb(59,203,247)"};
  }
`

const SubtractButton = styled(Button)``
const AddButton = styled(Button)``

const NumberInput = styled.input`
  margin: 0vh 2vw;
  border-width: 0px;
  border-radius: 10px;
  background-color: ${colors.editor.backgroundColor};
  text-align: center;
  font-size: 1em;
  color: white;
  @media (min-width: 64em) {
      margin: 0vh 0.5vw;
      width: 3.5vw;
      height: 2vw;
  }
`

export default EditNumber