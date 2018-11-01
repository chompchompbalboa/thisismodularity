//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import _ from 'lodash'
import { func, number, oneOf, shape, string } from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import styled from 'styled-components'

import { editFontFamily as editFontFamilyAction } from '../../../actions/siteActions'
import { editFontSize as editFontSizeAction } from '../../../actions/siteActions'

import colors from '../../../config/colors'

import EditContainer from '../../lib/EditContainer/EditContainer'
import EditNumber from '../../lib/EditNumber/EditNumber'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    editFontFamily: (pageIndex, moduleIndex, nextFontFamily) => dispatch(editFontFamilyAction(pageIndex, moduleIndex, nextFontFamily)),
    editFontSize: (pageIndex, moduleIndex, activeDevice, nextFontSize) => dispatch(editFontSizeAction(pageIndex, moduleIndex, activeDevice, nextFontSize))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditFont extends Component {

  options = [
    {value: "Source Sans Pro, sans-serif", label: "Source Sans Pro"},
    {value: "Arial", label: "Arial"},
    {value: "Serif", label: "Serif"},
    {value: "Times New Roman", label: "Times New Roman"},
  ]

  handleFontSizeChange = (nextFontSize) => {
    const {
      activeDevice,
      activePageIndex,
      activeModuleIndex,
      editFontSize
    } = this.props
    editFontSize(activePageIndex, activeModuleIndex, activeDevice, nextFontSize)
  }

  render() {
    const {
      activeDevice,
      activePageIndex,
      activeModuleIndex,
      editFontFamily,
      fontFamily,
      fontSize,
    } = this.props
    const sortedOptions = _.sortBy(this.options, "label")
    return (
      <EditContainer
        header="Font">
        <StyledSelect
          defaultValue={_.find(sortedOptions, ["value", fontFamily])}
          onChange={(option) => {editFontFamily(activePageIndex, activeModuleIndex, option.value)}}
          options={sortedOptions}
          styles={customStyles}/>
        <EditNumber 
          onChange={this.handleFontSizeChange}
          value={fontSize[activeDevice]}/>
      </EditContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditFont.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  activePageIndex: number,
  activeModuleIndex: number,
  editFontFamily: func,
  editFontSize: func,
  fontFamily: string,
  fontSize: shape({
    MOBILE: number,
    TABLET: number,
    DESKTOP: number
  }),
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledSelect = styled(Select)`
  width: 55%;
`

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: colors.editor.backgroundColor,
    borderColor: state.isFocused ? colors.editor.borderColor : colors.editor.borderColor,
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      cursor: "pointer",
      borderColor: state.isFocused ? colors.editor.borderColor : colors.editor.borderColor,
    }
  }),
  input: (base) => ({
    ...base,
    color: colors.editor.color,
    fontSize: "0.85em"
  }),
  menu: (base) => ({
    ...base,
    background: colors.editor.backgroundColor,
    color: colors.editor.color,
  }),
  option: (base) => ({
    ...base,
    background: colors.editor.backgroundColor,
    color: colors.editor.color,
    fontSize: "0.85em",
    "&:hover": {
      background: colors.editor.containerBackgroundColor,
      cursor: "pointer",
    }
  }),
  singleValue: (base) => ({
    ...base,
    color: colors.editor.color,
    fontSize: "0.85em"
  })
}