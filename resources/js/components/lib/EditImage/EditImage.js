//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { 
  setActiveDashboardContent as setActiveDashboardContentAction,
  setActiveImageSrcKey as setActiveImageSrcKeyAction
} from '../../../actions/appActions'

import EditContainer from '../../lib/EditContainer/EditContainer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    setActiveDashboardContent: (nextActive) => dispatch(setActiveDashboardContentAction(nextActive)),
    setActiveImageSrcKey: (nextActive) => dispatch(setActiveImageSrcKeyAction(nextActive))
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditImage extends Component {

  handleImageClick = () => {
    const {
      imageKey,
      setActiveDashboardContent,
      setActiveImageSrcKey
    } = this.props
    setActiveImageSrcKey(imageKey),
    setActiveDashboardContent("IMAGES")
  }

  render() {
    const {
      image
    } = this.props

    return (
      <EditContainer
        header="Image">
        <ImageContainer
          onClick={() => this.handleImageClick()}>
          <StyledImage 
            src={image}/>
        </ImageContainer>
      </EditContainer>
    )
  }
}

EditImage.propTypes = {
  activeModuleIndex: number,
  activePageIndex: number,
  editImage: func,
  imageKey: string,
  image: string,
  setActiveDashboardContent: func,
  setActiveImageSrcKey: func,
}

const ImageContainer = styled.div`
  cursor: pointer;
  width: 100%;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`