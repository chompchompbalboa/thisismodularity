//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppDashboardContentContainerSectionHeader = ({ text }) => (
  <Container>
    <Text>
      {text}
    </Text>
    <Underline />
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardContentContainerSectionHeader.propTypes = {
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Underline = styled.div`
  margin: 0.5vh 0 0 0;
  width: 100%;
  height: 1px;
  background-color: rgba(145,145,145,0.65);
  @media (min-width: 64em) {
      margin: 1vh 0 0 0;
  }
`

export default AppDashboardContentContainerSectionHeader