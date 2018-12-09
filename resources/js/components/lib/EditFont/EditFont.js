//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import _ from 'lodash'
import { func, number, oneOf, shape, string } from 'prop-types'
import { ChromePicker } from 'react-color'
import { connect } from 'react-redux'
import Select from 'react-select'
import styled from 'styled-components'

import { calculator } from '../../../utils/containerCalculator'

import { 
  editColor as editColorAction,
  editFontFamily as editFontFamilyAction,
  editFontSize as editFontSizeAction,
  editTextAlign as editTextAlignAction
} from '../../../actions/siteActions'

import colors from '../../../config/colors'

import EditContainer from '../../lib/EditContainer/EditContainer'
import EditNumber from '../../lib/EditNumber/EditNumber'
import Icon from '../../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    editColor: (pageIndex, moduleIndex, activeDevice, nextColor) => dispatch(editColorAction(pageIndex, moduleIndex, activeDevice, nextColor)),
    editFontFamily: (pageIndex, moduleIndex, nextFontFamily) => dispatch(editFontFamilyAction(pageIndex, moduleIndex, nextFontFamily)),
    editFontSize: (pageIndex, moduleIndex, activeDevice, nextFontSize) => dispatch(editFontSizeAction(pageIndex, moduleIndex, activeDevice, nextFontSize)),
    editTextAlign: (pageIndex, moduleIndex, activeDevice, nextTextAlign) => dispatch(editTextAlignAction(pageIndex, moduleIndex, activeDevice, nextTextAlign))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditFont extends Component {

  state = {
    hiddenColorContainerVisible: false
  }

  options = [
    {value: "Source Sans Pro, sans-serif", label: "Source Sans Pro"},
    {value: "Arial", label: "Arial"},
    {value: "Serif", label: "Serif"},
    {value: "Times New Roman", label: "Times New Roman"},
  ]

  componentDidUpdate = () => {
    const {
      hiddenColorContainerVisible
    } = this.state
    hiddenColorContainerVisible && document.addEventListener('mousedown', this.checkForClickOutsideColorPicker, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.checkForClickOutsideColorPicker, false)
  }

  checkForClickOutsideColorPicker = (e) => {
    if(this.hiddenColorContainer.contains(e.target)) {
      return
    }
    else {
      this.setState({
        hiddenColorContainerVisible: false
      })
    }
  }

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
      color,
      editColor,
      editFontFamily,
      editTextAlign,
      fontFamily,
      fontSize,
      textAlign,
    } = this.props
    const {
      hiddenColorContainerVisible
    } = this.state
    const sortedOptions = _.sortBy(this.options, "label")

    return (
      <EditContainer
        header="Font"
        flexDirection="column">
        <Row>
          <StyledSelect
            defaultValue={_.find(sortedOptions, ["value", fontFamily])}
            onChange={(option) => {editFontFamily(activePageIndex, activeModuleIndex, option.value)}}
            options={sortedOptions}
            styles={customSelectStyles}/>
          <EditNumber 
            onChange={this.handleFontSizeChange}
            value={fontSize[activeDevice]}/>
        </Row>
        <Spacer />
        <Row>
          <FontAlignContainer>
            <AlignContainer
              isActive={textAlign === "left"}
              onClick={() => editTextAlign(activePageIndex, activeModuleIndex, activeDevice, "left")}>
              <Icon
                icon="FONT_ALIGN_LEFT"/>
            </AlignContainer>
            <AlignContainer
              isActive={textAlign === "center"}
              onClick={() => editTextAlign(activePageIndex, activeModuleIndex, activeDevice, "center")}>
              <Icon
                icon="FONT_ALIGN_CENTER"/>
            </AlignContainer>
            <AlignContainer
              isActive={textAlign === "right"}
              onClick={() => editTextAlign(activePageIndex, activeModuleIndex, activeDevice, "right")}>
              <Icon
                icon="FONT_ALIGN_RIGHT"/>
            </AlignContainer>
            <AlignContainer
              isActive={textAlign === "justify"}
              onClick={() => editTextAlign(activePageIndex, activeModuleIndex, activeDevice, "justify")}>
              <Icon
                icon="FONT_ALIGN_JUSTIFY"/>
            </AlignContainer>
          </FontAlignContainer>
          <ColorContainer>
            <VisibleColorContainer
              color={color}
              onClick={() => this.setState({ hiddenColorContainerVisible: !hiddenColorContainerVisible})}>
            </VisibleColorContainer>
            <HiddenColorContainer
              innerRef={c => this.hiddenColorContainer = c}
              isVisible={hiddenColorContainerVisible}>
              <ChromePicker
                color={color}
                onChangeComplete={(color) => editColor(activePageIndex, activeModuleIndex, activeDevice, color.rgb)}/>
            </HiddenColorContainer>
          </ColorContainer>
        </Row>
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
  color: shape({
    r: number,
    g: number,
    b: number,
    a: number
  }),
  editColor: func,
  editFontFamily: func,
  editFontSize: func,
  editTextAlign: func,
  fontFamily: string,
  fontSize: shape({
    MOBILE: number,
    TABLET: number,
    DESKTOP: number
  }),
  textAlign: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledSelect = styled(Select)`
  width: 55%;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Spacer = styled.div`
  width: 100%;
  margin: 1vh 0;
`

const FontAlignContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AlignContainer = styled.div`
  cursor: pointer;
  padding: 0.35vw;
  margin-right: 0.125vw;
  border-radius: 5px;
  background-color: ${props => props.isActive ? colors.editor.backgroundColor : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${colors.editor.backgroundColor};
  }
`

const ColorContainer = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  justify-content: flex-end;
`

const VisibleColorContainer = styled.div`
  cursor: pointer;
  width: 50%;
  height: 3vh;
  background-color: ${props => calculator.color(props.activeDevice, props.color)};;
  border-radius: 5px;
  border: 2px solid white;
`

const HiddenColorContainer = styled.div`
  z-index: 1000;
  position: absolute;
  top: 4vh;
  display: ${props => props.isVisible ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  background-color: white;
`

// The custom styles below are needed by react-select and can't be styled using
// styled-components. See the link below for implementation details.
// https://react-select.com/styles
const customSelectStyles = {
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