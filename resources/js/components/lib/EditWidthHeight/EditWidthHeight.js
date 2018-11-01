//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, object, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { 
  editHeightAuto as editHeightAutoAction,
  editWidthAuto as editWidthAutoAction,
  editHeightValue as editHeightValueAction,
  editWidthValue as editWidthValueAction 
} from '../../../actions/siteActions'

import EditContainer from '../EditContainer/EditContainer'
import EditNumber from '../EditNumber/EditNumber'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    editHeightAuto: (pageIndex, moduleIndex, side, activeDevice, nextHeightAuto) => dispatch(editHeightAutoAction(pageIndex, moduleIndex, side, activeDevice, nextHeightAuto)),
    editWidthAuto: (pageIndex, moduleIndex, side, activeDevice, nextWidthAuto) => dispatch(editWidthAutoAction(pageIndex, moduleIndex, side, activeDevice, nextWidthAuto)),
    editHeightValue: (pageIndex, moduleIndex, side, activeDevice, nextHeightValue) => dispatch(editHeightValueAction(pageIndex, moduleIndex, side, activeDevice, nextHeightValue)),
    editWidthValue: (pageIndex, moduleIndex, side, activeDevice, nextWidthValue) => dispatch(editWidthValueAction(pageIndex, moduleIndex, side, activeDevice, nextWidthValue))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditWidthHeight extends Component {
  render() {
    const {
      activeDevice,
      activeModuleIndex,
      activePageIndex,
      editHeightAuto,
      editWidthAuto,
      editHeightValue,
      editWidthValue,
      height,
      width
    } = this.props
    const isHeightAuto = height[activeDevice].auto
    const isWidthAuto = width[activeDevice].auto

    return (
      <EditContainer
        header="Size"
        flexDirection="column"
        alignItems="flex-start">
        <ActionContainer>
          <ActionDescription>
            Height
          </ActionDescription>
          <Actions>
            <AutoContainer>
              Auto
              <Checkbox 
                type="checkbox"
                onChange={() => editHeightAuto(activePageIndex, activeModuleIndex, activeDevice, !isHeightAuto)}
                checked={isHeightAuto}/>
            </AutoContainer>
            <EditNumber
              isDisabled={isHeightAuto}
              onChange={(nextHeightValue) => editHeightValue(activePageIndex, activeModuleIndex, activeDevice, nextHeightValue)}
              value={height[activeDevice].value}/>
          </Actions>
        </ActionContainer>
        <ActionContainer>
          <ActionDescription>
            Width
          </ActionDescription>
          <Actions>
            <AutoContainer>
              Auto
              <Checkbox 
                type="checkbox"
                onChange={() => editWidthAuto(activePageIndex, activeModuleIndex, activeDevice, !isWidthAuto)}
                checked={isWidthAuto}/>
            </AutoContainer>
            <EditNumber
              isDisabled={isWidthAuto}
              onChange={(nextWidthValue) => editWidthValue(activePageIndex, activeModuleIndex, activeDevice, nextWidthValue)}
              value={width[activeDevice].value}/>
          </Actions>
        </ActionContainer>
      </EditContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditWidthHeight.propTypes = {
  activeDevice: string,
  activeModuleIndex: number,
  activePageIndex: number,
  editHeightAuto: func,
  editWidthAuto: func,
  editHeightValue: func,
  editWidthValue: func,
  height: object,
  width: object
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ActionContainer = styled.div`
  margin: 0.25vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ActionDescription = styled.div`
`

const Actions = styled.div`
  display: flex;
`

const AutoContainer = styled.div`
  margin-right: 1vw;
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  height: 1.4em;
  width: 1.4em;
  cursor: pointer;
  margin-left: 0.5vw;
`
