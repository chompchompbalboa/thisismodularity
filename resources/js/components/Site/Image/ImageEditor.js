//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, oneOf, shape, string } from 'prop-types'

import AppDashboardContentContainerSection from '../../App/AppDashboard/AppDashboardContentContainerSection/AppDashboardContentContainerSection'
import EditImage from '../../lib/EditImage/EditImage'
import EditPadding from '../../lib/EditPadding/EditPadding'
import EditWidthHeight from '../../lib/EditWidthHeight/EditWidthHeight'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ImageEditor = ({ activeDevice, activeModule: { data }, activeModuleIndex, activePageIndex }) => (
  <AppDashboardContentContainerSection>
    <EditImage
      activeDevice={activeDevice}
      activeModuleIndex={activeModuleIndex}
      activePageIndex={activePageIndex}
      image={data.src}
      imageKey="src"/>
    <EditWidthHeight
      activeDevice={activeDevice}
      activeModuleIndex={activeModuleIndex}
      activePageIndex={activePageIndex}
      height={data.height}
      width={data.width}/>
    <EditPadding
      activeDevice={activeDevice}
      activeModuleIndex={activeModuleIndex}
      activePageIndex={activePageIndex}
      padding={data.padding}/>
  </AppDashboardContentContainerSection>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
ImageEditor.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  activeModule: shape({
    data: shape({
      text: string,
      fontFamily: string
    })
  }),
  activeModuleIndex: number,
  activePageIndex: number
}

export default ImageEditor