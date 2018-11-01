//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from'react'
import { bool, node } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
const AppDashboardContainer = ({ isVisible, children }) => (
  <Container
    isVisible={isVisible}>
    {children}
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardContainer.propTypes = {
  children: node,
  isVisible: bool
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  opacity: ${props => props.isVisible ? "1" : "0"};
  position: relative;
  width: 95%;
  transition: all 0.5s;
  @media(min-width: 64em) {
    margin-left: 7.5%;
    width: 85%;
  }
`

export default AppDashboardContainer