//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, func, number, oneOf, shape, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setActiveDashboardContent as setActiveDashboardContentAction } from '../../../../actions/appActions'
import { addPage as addPageAction, setActivePage as setActivePageAction } from '../../../../actions/siteActions'

import AppDashboardContentContainer from '../AppDashboardContentContainer/AppDashboardContentContainer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  state => ({
    activePage: state.site.active.page,
    pages: state.site.pages
  }),
  dispatch => ({
    addPage: () => dispatch(addPageAction()),
    setActiveDashboardContent: nextActive => dispatch(setActiveDashboardContentAction(nextActive)),
    setActivePage: nextActivePage => dispatch(setActivePageAction(nextActivePage))
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardOverviewPages extends Component {

  handleAddPage = () => {
    const {
      addPage,
      setActiveDashboardContent
    } = this.props
    addPage()
    setActiveDashboardContent("PAGE")
  }

  handleChangePage = (nextActivePage) => {
    const {
      setActiveDashboardContent,
      setActivePage
    } = this.props
    setActiveDashboardContent("PAGE")
    setActivePage(nextActivePage)
  }

  render() {
    const {
      activePage,
      pages,
      position
    } = this.props

    return (
      <AppDashboardContentContainer
        position={position}>
        <PagesContainer>
          <PageContainer>
            Menu
          </PageContainer>
          {pages.map((page, index) => (
            <PageContainer
              key={index}
              isActivePage={index === activePage}
              onClick={() => this.handleChangePage(index)}>
              {page.name}
            </PageContainer>
          ))}
          <PageContainer
              onClick={() => this.handleAddPage()}>
            Add a Page
          </PageContainer>
        </PagesContainer>
      </AppDashboardContentContainer>
    )
  } 
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardOverviewPages.propTypes = {
  activePage: number,
  addPage: func,
  setActiveDashboardContent: func,
  setActivePage: func,
  pages: arrayOf(shape({
    page: string
  })),
  position: oneOf([
    "LEFT",
    "CENTER",
    "RIGHT"
  ])
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const PagesContainer = styled.div`
  margin: 1.5vh 0 0 0;
  width: 93vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 64em) {
      width: 23.375vw;
  }
`

const PageContainer = styled.div`
  margin: 0 0 1.5vh 0;
  width: 41.85vw;
  height: 5vh;
  cursor: pointer;
  border-radius: 5px;
  font-family: Source Sans Pro, sans-serif;
  font-size: 0.75em;
  font-weight: 400;
  background-color: ${props => props.isActivePage ? "rgb(25,25,25)" : "rgba(25,25,25,0.7)"};
  color: ${props => props.isActivePage ? "rgb(88, 218, 226)" : "white"};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.25s;
  @media (min-width: 64em): {
    margin: 0 0 2vh 0;
    border-radius: 10px;
    width: 10.51875vw;
    height: 5vh;
  }
  &:hover {
    background-color: rgb(25,25,25);
  }
`