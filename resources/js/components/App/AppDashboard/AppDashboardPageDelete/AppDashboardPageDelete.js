//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, object } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  setActiveDashboardContent as setActiveDashboardContentAction
} from '../../../../actions/appActions'
import {
  deletePage as deletePageAction
} from '../../../../actions/siteActions'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    deletePage: (pageId, pageIndex) => dispatch(deletePageAction(pageId, pageIndex)),
    setActiveDashboardContent: (nextActive) => dispatch(setActiveDashboardContentAction(nextActive))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardPageDelete extends Component {

  handleDeleteClick = () => {
    const {
      activePage,
      activePageIndex,
      deletePage,
      setActiveDashboardContent
    } = this.props
    const activePageId = activePage.id
    deletePage(activePageId, activePageIndex)
    setActiveDashboardContent("OVERVIEW")
  }

  render() {
    return (
      <Container>
        <Button
          onClick={() => this.handleDeleteClick()}>
          DELETE PAGE
        </Button>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardPageDelete.propTypes = {
  activePage: object,
  activePageIndex: number,
  deletePage: func,
  setActiveDashboardContent: func
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
`

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 10px;
  font-family: Source Sans Pro, sans-serif;
  font-size: 0.75em;
  font-weight: 400;
`