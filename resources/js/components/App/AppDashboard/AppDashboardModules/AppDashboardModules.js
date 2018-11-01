//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import _ from 'lodash'
import { func, number, oneOf } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { 
  setActiveDashboardContent as setActiveDashboardContentAction 
} from '../../../../actions/appActions'
import { 
  addModule as addModuleAction
} from '../../../../actions/siteActions'

import modulesMap from '../../../maps/modulesMap'

import AppDashboardContentContainer from '../AppDashboardContentContainer/AppDashboardContentContainer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    addModule: (pageIndex, moduleIndex, newModule) => dispatch(addModuleAction(pageIndex, moduleIndex, newModule)),
    setActiveDashboardContent: (nextActive) => dispatch(setActiveDashboardContentAction(nextActive))
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardModules extends Component {

  handleAddModuleClick = (type, data) => {
    const {
      activeModuleIndex,
      activePageIndex,
      addModule,
      setActiveDashboardContent
    } = this.props
    addModule(activePageIndex, activeModuleIndex, {type: type, data: data})
    setActiveDashboardContent("PAGE")
  }

  render() {
    const {
      position
    } = this.props

    return (
      <AppDashboardContentContainer
        back="PAGE"
        position={position}>
        {_.map(modulesMap, (module, index) => (
          <AddModule
            key={index}
            onClick={() => this.handleAddModuleClick(index, module.data)}>
            {module.name}
          </AddModule>
        ))}
      </AppDashboardContentContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardModules.propTypes = {
  addModule: func,
  activeModuleIndex: number,
  activePageIndex: number,
  position: oneOf([
    "LEFT",
    "CENTER",
    "RIGHT"
  ]),
  setActiveDashboardContent: func,
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const AddModule = styled.div`
  width: 100%;
  height: 5vh;
  margin: 0 0 1.5vh 0;
  cursor: pointer;
  border-radius: 5px;
  font-family: Source Sans Pro, sans-serif;
  font-size: 0.75em;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(59, 203, 247, 0.75);
  transition: background-color 0.25s;
  @media (min-width: 64em) {
      border-radius: 10px;
      height: 5vh;
  }
  &:hover {
    background-color: rgba(59, 203, 247, 0.55);
  }
`