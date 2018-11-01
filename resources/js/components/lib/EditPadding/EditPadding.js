//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, object, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { editPadding as editPaddingAction } from '../../../actions/siteActions'

import EditContainer from '../EditContainer/EditContainer'
import EditNumber from '../EditNumber/EditNumber'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    editPadding: (pageIndex, moduleIndex, side, activeDevice, nextPadding) => dispatch(editPaddingAction(pageIndex, moduleIndex, side, activeDevice, nextPadding))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditPadding extends Component {
  render() {
    const {
      activeDevice,
      activeModuleIndex,
      activePageIndex,
      editPadding,
      padding,
    } = this.props

    return (
      <EditContainer
        header="Padding"
        flexDirection="column"
        alignItems="flex-start">
        <ActionContainer>
          <ActionDescription>
            Padding Top
          </ActionDescription>
          <EditNumber
            onChange={(nextPadding) => editPadding(activePageIndex, activeModuleIndex, activeDevice, "TOP", nextPadding)}
            value={padding[activeDevice].TOP}/>
        </ActionContainer>
        <ActionContainer>
          <ActionDescription>
            Padding Right
          </ActionDescription>
          <EditNumber
            onChange={(nextPadding) => editPadding(activePageIndex, activeModuleIndex, activeDevice, "RIGHT", nextPadding)}
            value={padding[activeDevice].RIGHT}/>
        </ActionContainer>
        <ActionContainer>
          <ActionDescription>
            Padding Bottom
          </ActionDescription>
          <EditNumber
            onChange={(nextPadding) => editPadding(activePageIndex, activeModuleIndex, activeDevice, "BOTTOM", nextPadding)}
            value={padding[activeDevice].BOTTOM}/>
        </ActionContainer>
        <ActionContainer>
          <ActionDescription>
            Padding Left
          </ActionDescription>
          <EditNumber
            onChange={(nextPadding) => editPadding(activePageIndex, activeModuleIndex, activeDevice, "LEFT", nextPadding)}
            value={padding[activeDevice].LEFT}/>
        </ActionContainer>
      </EditContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditPadding.propTypes = {
  activeDevice: string,
  activeModuleIndex: number,
  activePageIndex: number,
  editPadding: func,
  padding: object
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

const ActionDescription = styled.div``
