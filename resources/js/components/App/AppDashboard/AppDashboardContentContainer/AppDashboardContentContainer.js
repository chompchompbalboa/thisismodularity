//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { func, node, oneOf, string } from 'prop-types'
import styled from 'styled-components'

import AppDashboardContentContainerNavigation from '../AppDashboardContentContainerNavigation/AppDashboardContentContainerNavigation'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppDashboardContentContainer = ({ back, children, forward, onBackClick, onForwardClick, position }) => {

  const left = {
    CENTER: {
      sm: "0",
      lg: "0"
    },
    LEFT: {
      sm: "-115%",
      lg: "-115%"
    },
    RIGHT: {
      sm: "115%",
      lg: "115%"
    }
  }

  return (
    <Container
      left={left[position]}>
      <AppDashboardContentContainerNavigation
        back={back}
        forward={forward}
        onBackClick={onBackClick}
        onForwardClick={onForwardClick}/>
      <ChildrenContainer>
        <ChildrenContainerNoScrollbar>
          {children}
        </ChildrenContainerNoScrollbar>
      </ChildrenContainer>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardContentContainer.propTypes = {
  back: string,
  children: node,
  forward: string,
  onBackClick: func,
  onForwardClick: func,
  position: oneOf([
    "CENTER",
    "LEFT",
    "RIGHT"
  ])
}

AppDashboardContentContainer.defaultProps = {
  position: "CENTER"
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: absolute;
  left: ${props => props.left.sm};
  width: 100%;
  height: 76vh;
  transition: left 0.5s;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: hidden;
  @media (min-width: 64em) {
      left: ${props => props.left.lg};
      width: 100%;
  }
`

const ChildrenContainer = styled.div`
  width: 100%;
  height: 69vh;
  overflow-x: hidden;
  overflow-y: hidden;
`

const ChildrenContainerNoScrollbar = styled.div`
  height: 100%;
  margin-right: -50px;
  padding-right: 50px;
  overflow-x: hidden;
  overflow-y: scroll;
`

export default AppDashboardContentContainer