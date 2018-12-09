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
class Image extends Component {
  render() {
    const {
      activeDevice,
      data: {
        src,
        width,
        height,
        padding
      },
      moduleRef
    } = this.props

    return (
      <Container
        data-testid="container"
        innerRef={moduleRef}
        activeDevice={activeDevice}
        styledProps={{
          width: width,
          height: height,
          padding: padding
        }}>
        <StyledImage
          data-testid="image"
          activeDevice={activeDevice}
          styledProps={{
            src: src
          }}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Image.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  data: shape({
    src: string,
    height: shape({
      MOBILE: shape({auto: bool, value: number}),
      TABLET: shape({auto: bool, value: number}),
      DESKTOP: shape({auto: bool, value: number}),
    }),
    width: shape({
      MOBILE: shape({auto: bool, value: number}),
      TABLET: shape({auto: bool, value: number}),
      DESKTOP: shape({auto: bool, value: number}),
    }),
    padding: shape({
      MOBILE: shape({TOP: number, RIGHT: number, BOTTOM: number, LEFT: number}),
      TABLET: shape({TOP: number, RIGHT: number, BOTTOM: number, LEFT: number}),
      DESKTOP: shape({TOP: number, RIGHT: number, BOTTOM: number, LEFT: number}),
    })
  }),
  moduleRef: object
}

Image.defaultProps = {
  activeDevice: "MOBILE",
  data: {
    src: "/img/stock/1.jpg",
    height: {
      MOBILE: {auto: false, value: 50},
      TABLET: {auto: false, value: 50},
      DESKTOP: {auto: false, value: 50},
    },
    width: {
      MOBILE: {auto: false, value: 100},
      TABLET: {auto: false, value: 100},
      DESKTOP: {auto: false, value: 100},
    },
    padding: {
      MOBILE: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
      TABLET: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
      DESKTOP: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
    }
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: ${props => calculator.width(props.activeDevice, props.styledProps.width)};
  height: ${props => calculator.height(props.activeDevice, props.styledProps.height)};
  padding: ${props => calculator.padding(props.activeDevice, props.styledProps.padding)};
`

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => calculator.backgroundImage(props.activeDevice, props.styledProps.src)};
  transition: all 0.5s;
`

export default module(Image)