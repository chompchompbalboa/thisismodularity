//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, oneOf, shape, string } from 'prop-types'

//import modulesMap from '../../maps/modulesMap'

import AppDashboardContentContainerSection from '../../App/AppDashboard/AppDashboardContentContainerSection/AppDashboardContentContainerSection'
import EditFont from '../../lib/EditFont/EditFont'
//4import EditPosition from '../../lib/EditPosition/EditPosition'
import EditPadding from '../../lib/EditPadding/EditPadding'
import EditText from '../../lib/EditText/EditText'
import EditWidthHeight from '../../lib/EditWidthHeight/EditWidthHeight'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TextBoxEditor = ({ activeDevice, activeModule: { data }, activeModuleIndex, activePageIndex }) => (
  <AppDashboardContentContainerSection>
    <EditText
      activeModuleIndex={activeModuleIndex}
      activePageIndex={activePageIndex}
      header="Text"
      textKey="text"
      value={data.text}/>
    <EditFont
      activeDevice={activeDevice}
      activeModuleIndex={activeModuleIndex}
      activePageIndex={activePageIndex}
      color={data.color}
      fontFamily={data.fontFamily}
      fontSize={data.fontSize}
      textAlign={data.textAlign}/>
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
TextBoxEditor.propTypes = {
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

export default TextBoxEditor