//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import AppDashboard from './AppDashboard/AppDashboard'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => (
  <Container>
    <AppDashboard/>
  </Container>
)

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.section`
  z-index: 2;
  position: relative;
  font-family: Source Sans Pro, sans-serif;
`

export default App