//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object, oneOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import { calculator } from '../../../utils/containerCalculator'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Image = ({ activeDevice, data }) => (
  <Container
    activeDevice={activeDevice}
    styleData={data}>
    <StyledImage
      activeDevice={activeDevice}
      styleData={data}/>
  </Container>
)

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
    height: object,
    src: string,
    width: object
  })
}

Image.defaultProps = {
  data: {
    src: "/img/stock/1.jpg",
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: ${props => calculator.width(props.activeDevice, props.styleData.width)};
  height: ${props => calculator.height(props.activeDevice, props.styleData.height)};
  padding: ${props => calculator.padding(props.activeDevice, props.styleData.padding)};
`

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => calculator.backgroundImage(props.activeDevice, props.styleData.src)};
  transition: all 0.5s;
`

export default Image