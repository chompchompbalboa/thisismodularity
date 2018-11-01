//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, func, oneOf } from 'prop-types'
import styled from 'styled-components'

import Icon from '../../../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppDashboardHeaderDocker = ({ activeSaveStatus, isVisible, setIsVisible }) => (
  <Container>
    <SaveStatus
      isVisible={isVisible}>
      {saveStatusMessages[activeSaveStatus]}
    </SaveStatus>
    <MobileClickContainer
      onClick={() => setIsVisible(!isVisible)}>
      <Icon
        color="white"
        icon={isVisible ? "CHEVRON_DOWN" : "CHEVRON_UP"}
        size="2em"/>
    </MobileClickContainer>
    <DesktopClickContainer
      onClick={() => setIsVisible(!isVisible)}>
      <Icon
        color="white"
        icon={isVisible ? "CHEVRON_LEFT" : "CHEVRON_RIGHT"}
        size="2em"/>
    </DesktopClickContainer>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardHeaderDocker.propTypes = {
  activeSaveStatus: oneOf([
    "READY",
    "SAVING",
    "SAVE_FAILURE",
    "SAVE_SUCCESS",
  ]),
  isVisible: bool,
  setIsVisible: func
}

//-----------------------------------------------------------------------------
// Save Status Messages
//-----------------------------------------------------------------------------
const saveStatusMessages = {
  "READY": "",
  "SAVING": "Saving...",
  "SAVE_FAILURE": "Unable to save. Please try again.",
  "SAVE_SUCCESS": "Saved!",
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 64em) {
    justify-content: flex-end;
  }
`

const SaveStatus = styled.div`
  opacity: ${props => props.isVisible ? "1" : "0"};
  font-size: 0.95em;
  letter-spacing: 0.5px;
  font-weight: 300;
  color: rgb(220,220,220);
  transition: opacity 0.5s;
`

const DesktopClickContainer = styled.div`
  display: none;
  @media (min-width: 64em) {
    cursor: pointer;
    padding: 1vh 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const MobileClickContainer = styled.div`
  width: 100%;
  padding: 1vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 64em) {
    display: none;
  }
`

export default AppDashboardHeaderDocker