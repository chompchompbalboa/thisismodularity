//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, func, number, object, string } from 'prop-types'
import { connect } from 'react-redux'

import {
  editPageName as editPageNameAction,
  editPageSlug as editPageSlugAction,
  editSiteDomain as editSiteDomainAction,
  editSiteName as editSiteNameAction,
} from '../../../../actions/siteActions'

import AppDashboardContainer from '../AppDashboardContainer/AppDashboardContainer'
import AppDashboardHeaderDevices from '../AppDashboardHeaderDevices/AppDashboardHeaderDevices'
import AppDashboardHeaderPageInfo from '../AppDashboardHeaderPageInfo/AppDashboardHeaderPageInfo'
import Spacer from '../../../lib/Spacer/Spacer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    editPageName: (pageIndex, nextPageName) => dispatch(editPageNameAction(pageIndex, nextPageName)),
    editPageSlug: (pageIndex, nextPageSlug) => dispatch(editPageSlugAction(pageIndex, nextPageSlug)),
    editSiteDomain: (nextSiteDomain) => dispatch(editSiteDomainAction(nextSiteDomain)),
    editSiteName: (nextSiteName) => dispatch(editSiteNameAction(nextSiteName)),
  })
)

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
export default class AppDashboardHeader extends Component {
  render() {
    const {
      activeDashboardContent, 
      activePage, 
      activePageIndex, 
      editPageName,
      editPageSlug,
      editSiteDomain,
      editSiteName,
      isVisible, 
      meta
    } = this.props
  
    const isActiveDashboardContentOverview = activeDashboardContent === "OVERVIEW"
    const header = isActiveDashboardContentOverview ? meta.name : activePage.name
    const onHeaderChange = isActiveDashboardContentOverview 
                          ? (nextSiteName) => editSiteName(nextSiteName) 
                          : (nextPageName) => editPageName(activePageIndex, nextPageName)
    const subheader = isActiveDashboardContentOverview ? "" : activePage.slug
    const onSubheaderChange = isActiveDashboardContentOverview 
                          ? (nextSiteDomain) => editSiteDomain(nextSiteDomain) 
                          : (nextPageSlug) => editPageSlug(activePageIndex, nextPageSlug)

    return (
      <AppDashboardContainer
        isVisible={isVisible}>
        <AppDashboardHeaderPageInfo
          domain={meta.domain}
          isInputActive={!isActiveDashboardContentOverview}
          header={header}
          onHeaderChange={onHeaderChange}
          subheader={subheader}
          onSubheaderChange={onSubheaderChange}/>
          <Spacer height={{sm: "2vh", md: "2vh", lg: "3vh"}} />
        <AppDashboardHeaderDevices/>
      </AppDashboardContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardHeader.propTypes = {
  activeDashboardContent: string,
  activePage: object,
  activePageIndex: number,
  editPageName: func,
  editPageSlug: func,
  editSiteDomain: func,
  editSiteName: func,
  isVisible: bool,
  meta: object,
}