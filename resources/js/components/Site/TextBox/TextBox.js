//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, number, object, oneOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import { calculator } from '../../../utils/containerCalculator'

import module from '../module/module'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class TextBox extends Component {
  render() {
    const {
      activeDevice,
      data,
      moduleRef
    } = this.props

    return (
      <Container
        innerRef={moduleRef}
        activeDevice={activeDevice}
        styleData={data}>
        <TextContainer
          activeDevice={activeDevice}
          styleData={data}>
          {data.text}
        </TextContainer>
      </Container>
    )
  }
}

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
    color: shape({
      r: number,
      g: number,
      b: number,
      a: number
    }),
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
    textAlign: string,
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
  }),
  moduleRef: object
}

TextBox.defaultProps = {
  activeDevice: "MOBILE",
  data: {
    color: {r: 255, g: 255, b: 255, a: 1},
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
    textAlign: "center",
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
  align-items: center;
  font-family: ${props => props.styleData.fontFamily};
  font-size: ${props => calculator.fontSize(props.activeDevice, props.styleData.fontSize)};
  transition: padding 0.5s;
`

const TextContainer = styled.div`
  width: 100%;
  color: ${props => calculator.color(props.activeDevice, props.styleData.color)};
  text-align: ${props => calculator.textAlign(props.activeDevice, props.styleData.textAlign)};
  white-space: pre-wrap;
`

export default module(TextBox)