//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, bool, number, object, oneOf, shape, string } from 'prop-types'
import { connect } from 'react-redux'

import AppDashboardContainer from '../AppDashboardContainer/AppDashboardContainer'
import AppDashboardEditor from '../AppDashboardEditor/AppDashboardEditor'
import AppDashboardImages from '../AppDashboardImages/AppDashboardImages'
import AppDashboardModules from '../AppDashboardModules/AppDashboardModules'
import AppDashboardPage from '../AppDashboardPage/AppDashboardPage'
//import AppDashboardModules from '../AppDashboardModules/AppDashboardModules'
//import AppDashboardNavigation from '../AppDashboardNavigation/AppDashboardNavigation'
import AppDashboardOverview from '../AppDashboardOverview/AppDashboardOverview'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  state => ({
    positions: state.app.active.positions
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardContent extends Component {
  render() {
    const {
      activeDevice,
      activeModule,
      activeModuleIndex,
      activePage,
      activePageIndex,
      isVisible,
      positions
    } = this.props
    
    return (
      <AppDashboardContainer
        isVisible={isVisible}>
        <AppDashboardEditor
          activeDevice={activeDevice}
          activeModule={activeModule}
          activeModuleIndex={activeModuleIndex}
          activePage={activePage}
          activePageIndex={activePageIndex}
          position={positions.EDIT}/>
        <AppDashboardImages
          activeDevice={activeDevice}
          activeModuleIndex={activeModuleIndex}
          activePageIndex={activePageIndex}
          isVisible={positions.IMAGES === "CENTER"}
          position={positions.IMAGES}/>
        <AppDashboardOverview 
          position={positions.OVERVIEW}/>
        <AppDashboardModules
          activeModuleIndex={activeModuleIndex}
          activePageIndex={activePageIndex}
          position={positions.MODULES}/>
        <AppDashboardPage
          activePage={activePage}
          activePageIndex={activePageIndex}
          position={positions.PAGE}/>
      </AppDashboardContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardContent.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  activeModule: object,
  activeModuleIndex: number,
  activePage: object,
  activePageId: number,
  activePageIndex: number,
  images: arrayOf(string),
  isVisible: bool,
  positions: shape({
    OVERVIEW: string,
    PAGE: string
  })
}
