//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, bool, number, oneOf } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Navigation
//import NavigationIcon from '../lib/NavigationIcon/NavigationIcon'
//import NavigationLinks from '../lib/NavigationLinks/NavigationLinks'

import DeviceContainer from './DeviceContainer/DeviceContainer'
import Page from './Page/Page'
//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  state => ({
    activeDevice: state.app.active.device,
    activeModule: state.site.active.module,
    activePage: state.site.active.page,
    isApp: state.app.isApp,
    pages: state.site.pages,
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Site extends Component {
  render() {
    const {
      activeDevice,
      activeModule,
      activePage,
      isApp,
      pages
    } = this.props
    
    return (
      <Background>
        <DeviceContainer
          activeDevice={activeDevice}
          isApp={isApp}>
          <Page
            activeDevice={activeDevice}
            activeModule={activeModule}
            activePage={pages[activePage]}/>
        </DeviceContainer>
      </Background>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Site.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  activeModule: number,
  activePage: number,
  isApp: bool,
  pages: array
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Background = styled.div`
  z-index: 1;
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  overflow: scroll;
`