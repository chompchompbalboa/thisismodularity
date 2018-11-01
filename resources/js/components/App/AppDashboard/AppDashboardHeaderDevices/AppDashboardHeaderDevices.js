//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, oneOf } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { changeAppStore as changeAppStoreAction } from '../../../../actions/appActions'

import Icon from '../../../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  state => ({
    activeDevice: state.app.active.device
  }),
  dispatch => ({
    changeAppStore: (changes) => dispatch(changeAppStoreAction(changes))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardContentDevices extends Component {
  render() {
    const {
      activeDevice,
      changeAppStore
    } = this.props

    const deviceTypes = [
      "MOBILE",
      "TABLET",
      "DESKTOP"
    ]

    return (
      <Container>
        <DevicesContainer>
          {deviceTypes.map((deviceType, index) => (
            <ChangeDeviceContainer
              key={index}
              isActive={activeDevice === deviceType}
              onClick={() => changeAppStore([{ key: "active.device", value: deviceType }])}>
              <Icon
                icon={deviceType}
                size="1.25em"/>
              <ChangeDeviceText>
                {deviceType}
              </ChangeDeviceText>
            </ChangeDeviceContainer>
          ))}
        </DevicesContainer>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardContentDevices.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  changeAppStore: func,
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
`

const DevicesContainer = styled.div`
  margin: 1.5vh 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Source Sans Pro, sans-serif;
`

const ChangeDeviceContainer = styled.div`
  cursor: pointer;
  width: 7vw;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.isActive ? "rgb(25,25,25)" : "rgba(25,25,25,0.7)"};
  color: ${props => props.isActive ? "rgb(88, 218, 226)" : "white"};
  transition: all 0.25s;
  &:hover {
    background-color: rgb(25,25,25);
    color: rgb(88, 218, 226);
  }
`

const ChangeDeviceText = styled.div`
  font-size: 0.75em;
`