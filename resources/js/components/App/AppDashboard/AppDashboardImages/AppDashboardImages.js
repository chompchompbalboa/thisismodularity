//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { arrayOf, bool, func, number, oneOf, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { editImageSrc as editImageSrcAction } from '../../../../actions/siteActions'

import AppDashboardContentContainer from '../AppDashboardContentContainer/AppDashboardContentContainer'
import EditContainer from '../../../lib/EditContainer/EditContainer'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  state => ({
    images: state.app.collections.images,
    imageSrcKey: state.app.active.imageSrcKey
  }),
  dispatch => ({
    editImageSrc: (pageIndex, moduleIndex, imageSrcKey, nextImageSrc) => dispatch(editImageSrcAction(pageIndex, moduleIndex, imageSrcKey, nextImageSrc))
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardImages extends Component {
  render() {
    const {
      activePageIndex,
      activeModuleIndex,
      editImageSrc,
      images,
      imageSrcKey,
      isVisible,
      position
    } = this.props

    return (
      <AppDashboardContentContainer
        back="EDIT"
        position={position}>
        <Spacer/>
        {isVisible && images.map((image, index) => (
          <EditContainer
            key={index}>
            <StyledImage 
              onClick={() => editImageSrc(activePageIndex, activeModuleIndex, imageSrcKey, image)}
              src={image}/>
          </EditContainer>
        ))}
      </AppDashboardContentContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardImages.propTypes = {
  activeModuleIndex: number,
  activePageIndex: number,
  editImageSrc: func,
  images: arrayOf(string),
  imageSrcKey: number,
  isVisible: bool,
  position: oneOf([
    "LEFT",
    "CENTER",
    "RIGHT"
  ])
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Spacer = styled.div`
  width: 100%;
  height: 1vh;
`

const StyledImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: auto;
`