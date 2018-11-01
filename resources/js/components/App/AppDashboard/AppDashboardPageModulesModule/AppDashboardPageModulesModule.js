//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool, func, number, object } from 'prop-types'
import styled from 'styled-components'

import { 
  setActiveDashboardContent as setActiveDashboardContentAction 
} from '../../../../actions/appActions'
import {
  setActiveModule as setActiveModuleAction,
  deleteModule as deleteModuleAction,
  moveModule as moveModuleAction
} from '../../../../actions/siteActions'

import Icon from '../../../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    setActiveDashboardContent: (moduleIndex) => dispatch(setActiveDashboardContentAction(moduleIndex)),
    setActiveModule: (moduleIndex) => dispatch(setActiveModuleAction(moduleIndex)),
    deleteModule: (pageIndex, moduleIndex) => dispatch(deleteModuleAction(pageIndex, moduleIndex)),
    moveModule: (pageIndex, from, to) => dispatch(moveModuleAction(pageIndex, from, to)),
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardPageModulesModule extends Component {

  handleAddModuleClick = () => {
    const {
      setActiveDashboardContent,
      setActiveModule,
      moduleIndex
    } = this.props
    setActiveModule(moduleIndex)
    setActiveDashboardContent("MODULES")
  }

  handleModuleClick = () => {
    const {
      setActiveDashboardContent,
      setActiveModule,
      moduleIndex
    } = this.props
    setActiveModule(moduleIndex)
    setActiveDashboardContent("EDIT")
  }

  render() {
    const {
      activePageIndex,
      deleteModule,
      isFirstModule,
      isLastModule,
      module,
      moduleIndex,
      moveModule,
    } = this.props

    return (
      <Container>
        <ModuleType
          onClick={() => this.handleModuleClick()}>
          {module.type}
        </ModuleType>
        <MoveModuleUp
          isActive={!isFirstModule}
          onClick={() => !isFirstModule && moveModule(activePageIndex, moduleIndex, moduleIndex - 1)}>
          <Icon 
            icon="ARROW_UP"
            size="1.25vw"/>
        </MoveModuleUp>
        <MoveModuleDown
          isActive={!isLastModule}
          onClick={() => !isLastModule && moveModule(activePageIndex, moduleIndex, moduleIndex + 1)}>
          <Icon 
            icon="ARROW_DOWN"
            size="1.25vw"/>
        </MoveModuleDown>
        <DeleteModule
          isActive
          onClick={() => deleteModule(activePageIndex, moduleIndex)}>
          <Icon 
            icon="DELETE"
            size="1.25vw"/>
        </DeleteModule>
        <AddModule
          isActive
          onClick={() => this.handleAddModuleClick()}>
          <Icon 
            icon="SIGN_PLUS"
            size="1.25vw"/>
        </AddModule>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardPageModulesModule.propTypes = {
  setActiveDashboardContent: func,
  setActiveModule: func,
  deleteModule: func,
  isFirstModule: bool,
  isLastModule: bool,
  module: object,
  moduleIndex: number,
  moveModule: func,
  activePageIndex: number
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0 0 1.5vh 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 64em) {
      margin: 0 0 2vh 0;
  }
`

const ModuleType = styled.div`
  width: 39vw;
  height: 5vh;
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
      width: 13vw;
      height: 5vh;
  }
  &:hover {
    background-color: rgba(59, 203, 247, 0.55);
  }
`

const ActionButton = styled.div`
  cursor: ${props => props.isActive ? "pointer" : "auto"};
  width: 2vw;
  height: 2vw;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(25,25,25);
  color: ${props => props.isActive ? "rgb(145, 145, 145)" : "rgb(50,50,50)"};
  transition: all 0.15s;
  @media (min-width: 64em) {
      border-radius: 10px;
  }
  &:hover {
    background-color: ${props => props.isActive ? "rgba(25,25,25,0.6)" : "rgb(25,25,25)"};
    color: ${props => props.isActive ? "rgb(59, 203, 247)" : "rgb(50,50,50)"};
  }
`

const MoveModuleUp = styled(ActionButton)``
const MoveModuleDown = styled(ActionButton)``

const DeleteModule = styled(ActionButton)`
  &:hover {
    background-color: rgb(200,0,0);
    color: white;
  }
`

const AddModule = styled(ActionButton)`
  &:hover {
    background-color: green;
    color: white;
  }
`