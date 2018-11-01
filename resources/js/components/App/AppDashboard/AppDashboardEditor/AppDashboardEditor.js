//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, object, oneOf } from 'prop-types'
import { connect } from 'react-redux'

import { 
  savePage as savePageAction
} from '../../../../actions/siteActions'

import modulesMap from '../../../maps/modulesMap'

import AppDashboardContentContainer from '../AppDashboardContentContainer/AppDashboardContentContainer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    savePage: (page, pageId) => dispatch(savePageAction(page, pageId)) 
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardEditor extends Component {

  render() {
    const {
      activeDevice,
      activeModule,
      activeModuleIndex,
      activePage,
      activePageIndex,
      position,
      savePage
    } = this.props

    return (
      <AppDashboardContentContainer
        back="PAGE"
        onBackClick={() => savePage(activePage, activePage.site_id)}
        position={position}>
        {activeModule &&
          React.createElement(
            modulesMap[activeModule.type].editor,
            {
              activeDevice: activeDevice,
              activeModule: activeModule,
              activeModuleIndex: activeModuleIndex,
              activePageIndex: activePageIndex
            }
          )
        }
      </AppDashboardContentContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardEditor.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  activeModule: object,
  activeModuleIndex: number,
  activePage: object,
  activePageIndex: number,
  position: oneOf([
    "LEFT",
    "CENTER",
    "RIGHT"
  ]),
  savePage: func,
}