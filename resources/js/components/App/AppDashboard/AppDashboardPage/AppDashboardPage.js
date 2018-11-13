//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, object, oneOf } from 'prop-types'

import AppDashboardContentContainer from '../AppDashboardContentContainer/AppDashboardContentContainer'
import AppDashboardPageDelete from '../AppDashboardPageDelete/AppDashboardPageDelete'
import AppDashboardPageModules from '../AppDashboardPageModules/AppDashboardPageModules'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppDashboardPage = ({ activePage, activePageIndex, position }) => (
  <AppDashboardContentContainer
    back="OVERVIEW"
    position={position}>
    <AppDashboardPageModules
      activePage={activePage}
      activePageIndex={activePageIndex}/>
    <AppDashboardPageDelete
      activePage={activePage}
      activePageIndex={activePageIndex}/>
  </AppDashboardContentContainer>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardPage.propTypes = {
  activePage: object,
  activePageIndex: number,
  position: oneOf([
    "LEFT",
    "CENTER",
    "RIGHT"
  ])
}

export default AppDashboardPage