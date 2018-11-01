//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, number, object, oneOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import { calculator } from '../../../utils/containerCalculator'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TextBox = ({ activeDevice, data }) => (
  <Container
    activeDevice={activeDevice}
    styleData={data}>
    <TextContainer
      activeDevice={activeDevice}
      styleData={data}>
      {data.text}
    </TextContainer>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TextBox.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  data: shape({
    fontFamily: string,
    fontSize: shape({
      MOBILE: number, 
      TABLET: number, 
      DESKTOP: number
    }),
    height: shape({
      MOBILE: shape({
        auto: bool,
        value: number
      }), 
      TABLET: shape({
        auto: bool,
        value: number
      }), 
      DESKTOP: shape({
        auto: bool,
        value: number
      })
    }),
    padding: shape({
      MOBILE: object, 
      TABLET: object, 
      DESKTOP: object
    }),
    text: string,
    width: shape({
      MOBILE: shape({
        auto: bool,
        value: number
      }), 
      TABLET: shape({
        auto: bool,
        value: number
      }), 
      DESKTOP: shape({
        auto: bool,
        value: number
      })
    }),
  })
}

TextBox.defaultProps = {
  activeDevice: "MOBILE",
  data: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: {
      MOBILE: 14,
      TABLET: 14,
      DESKTOP: 14,
    },
    height: {
      MOBILE: {auto: true, value: 50},
      TABLET: {auto: true, value: 75},
      DESKTOP: {auto: true, value: 100},
    },
    padding: {
      MOBILE: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
      TABLET: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
      DESKTOP: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
    },
    text: "Enter Text Here",
    width: {
      MOBILE: {auto: false, value: 100},
      TABLET: {auto: false, value: 100},
      DESKTOP: {auto: false, value: 100},
    },
  }
}


//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: ${props => calculator.width(props.activeDevice, props.styleData.width)};
  height: ${props => calculator.height(props.activeDevice, props.styleData.height)};
  padding: ${props => calculator.padding(props.activeDevice, props.styleData.padding)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-family: ${props => props.styleData.fontFamily};
  font-size: ${props => calculator.fontSize(props.activeDevice, props.styleData.fontSize)};
  transition: padding 0.5s;
`

const TextContainer = styled.div`
  white-space: pre-wrap;
`

export default TextBox