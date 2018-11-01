//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, object, oneOf, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AppDashboardContent from './AppDashboardContent/AppDashboardContent'
import AppDashboardDocker from './AppDashboardDocker/AppDashboardDocker'
import AppDashboardHeader from './AppDashboardHeader/AppDashboardHeader'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  state => ({
    activeDashboardContent: state.app.active.dashboardContent,
    activeDevice: state.app.active.device,
    activeModule: state.site.pages[state.site.active.page].modules[state.site.active.module],
    activeModuleIndex: state.site.active.module,
    activePage: state.site.pages[state.site.active.page],
    activePageIndex: state.site.active.page,
    activeSaveStatus: state.app.active.saveStatus,
    meta: state.site.meta
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboard extends Component {

  state = {
    isVisible: true
  }

  setIsVisible = (nextIsVisible) => {
    this.setState({
      isVisible: nextIsVisible
    })
  }

  render() {
    const {
      activeDashboardContent,
      activeDevice,
      activeModule,
      activeModuleIndex,
      activePage,
      activePageIndex,
      activeSaveStatus,
      meta
    } = this.props
    const {
      isVisible
    } = this.state

    return (
      <Container
        isVisible={isVisible}>
        <AppDashboardDocker 
          activeSaveStatus={activeSaveStatus}
          isVisible={isVisible}
          setIsVisible={this.setIsVisible}/>
        <AppDashboardHeader
          activeDashboardContent={activeDashboardContent}
          activePage={activePage}
          activePageIndex={activePageIndex}
          isVisible={isVisible}
          meta={meta}/>
        <AppDashboardContent
          activeDevice={activeDevice}
          activeModule={activeModule}
          activeModuleIndex={activeModuleIndex}
          activePage={activePage}
          activePageId={activePage.id}
          activePageIndex={activePageIndex}
          isVisible={isVisible}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboard.propTypes = {
  activeDashboardContent: string,
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP",
  ]),
  activeModule: object,
  activeModuleIndex: number,
  activePage: object,
  activePageIndex: number,
  activeSaveStatus: func,
  meta: object
}

//-----------------------------------------------------------------------------
// Styled Component
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: ${props => props.isVisible ? "35vh" : "92vh"};
  left: 0vw;
  width: 100vw;
  height: 65vh;
  background-color: rgba(41,41,41,0.975);
  overflow-x: hidden;
  overflow-y: hidden;
  color: white;
  transition: left 0.5s, top 0.5s;
  @media (min-width: 64em){
      top: 0vh;
      left: ${props => props.isVisible ? "0vw" : "-23.5vw"};
      width: 27.5vw;
      height: 100vh;
  }
`