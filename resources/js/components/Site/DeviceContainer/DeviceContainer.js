//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, node, oneOf } from 'prop-types'
import styled from 'styled-components'

import { getDeviceStyle } from '../../../utils/containerCalculator'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const DeviceContainer = ({ activeDevice, children, isApp }) => {

  const deviceStyle = getDeviceStyle(activeDevice, isApp)

  return (
    <Container
      deviceStyle={deviceStyle}>
      {children}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
DeviceContainer.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  children: node,
  isApp: bool
}

DeviceContainer.defaultProps = {
  activeDevice: "MOBILE",
  isApp: false
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: ${props => props.deviceStyle.position};
  top: ${props => props.deviceStyle.top};
  left: ${props => props.deviceStyle.left};
  width: ${props => props.deviceStyle.width};
  height: ${props => props.deviceStyle.height};
  box-shadow: ${props => props.deviceStyle.boxShadow};
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.5s;
`

export default DeviceContainer