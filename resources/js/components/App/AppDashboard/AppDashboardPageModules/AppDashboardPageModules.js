//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, object } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { 
  setActiveDashboardContent as setActiveDashboardContentAction
} from '../../../../actions/appActions';

import AppDashboardPageModulesModule from '../AppDashboardPageModulesModule/AppDashboardPageModulesModule'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    setActiveDashboardContent: (nextActive) => dispatch(setActiveDashboardContentAction(nextActive)) 
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardPageModules extends Component {
  render() {
    const {
      activePage,
      activePageIndex,
      setActiveDashboardContent
    } = this.props

    //console.log(activePage.modules)
    return (
      <Container>
        {activePage.modules.map((module, index) => (
          <AppDashboardPageModulesModule
            key={index}
            activePageIndex={activePageIndex}
            isFirstModule={index === 0}
            isLastModule={index === activePage.modules.length - 1}
            module={module}
            moduleIndex={index}/>
        ))}
        {
          activePage.modules.length === 0 && 
          <AddModule
            onClick={() => setActiveDashboardContent("MODULES")}>
            ADD A MODULE
          </AddModule>
        }
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardPageModules.propTypes = {
  activePage: object,
  activePageIndex: number,
  setActiveDashboardContent: func
}

//-----------------------------------------------------------------------------
// Styled Component
//-----------------------------------------------------------------------------
const Container = styled.div`
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

const AddModule = styled.div`
  cursor: pointer;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(59, 203, 247, 0.75);
  font-size: 0.8em;
  font-weight: 400;
  color: white;
  border-radius: 10px;
  &:hover {
    background-color: rgba(59, 203, 247, 0.55);
  }
`