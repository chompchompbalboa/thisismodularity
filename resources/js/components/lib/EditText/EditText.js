//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { editText as editTextAction } from '../../../actions/siteActions'

import colors from '../../../config/colors'

import AutosizeTextArea from 'react-autosize-textarea'
import EditContainer from '../../lib/EditContainer/EditContainer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    editText: (pageIndex, moduleIndex, textKey, text) => dispatch(editTextAction(pageIndex, moduleIndex, textKey, text))
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditText extends Component {
  render() {
    const {
      activeModuleIndex,
      activePageIndex,
      editText,
      header,
      textKey,
      value
    } = this.props

    return (
      <EditContainer
        header={header}>
        <StyledTextArea
          value={value}
          onChange={(e) => editText(activePageIndex, activeModuleIndex, textKey, e.target.value)}/>
      </EditContainer>
    )
  }
}

EditText.propTypes = {
  activeModuleIndex: number,
  activePageIndex: number,
  editText: func,
  header: string,
  textKey: string,
  value: string,
}

const StyledTextArea = styled(AutosizeTextArea)`
  width: 100%;
  padding: 1.5vh;
  border: 1px solid ${colors.editor.borderColor};
  border-radius: 0.35em;
  outline: none;
  resize: none;
  color: ${colors.editor.color};
  background-color: ${colors.editor.backgroundColor};
`