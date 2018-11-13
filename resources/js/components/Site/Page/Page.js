//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, object, oneOf } from 'prop-types'
import styled from 'styled-components'

import modulesMap from '../../maps/modulesMap'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Page = ({ activeDevice, activeModule, activePage }) => {
  return (
    <Container>
      {activePage.modules.map((module, index) => {
        return React.createElement(
          modulesMap[module.type].component,
          {
            key: module.type + "-" + index,
            activeDevice: activeDevice,
            activeModule: activeModule,
            moduleIndex: index,
            data: module.data
          }
        )
      })
      }
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Page.propTypes = {
  activeDevice: oneOf([
    "MOBILE",
    "TABLET",
    "DESKTOP"
  ]),
  activeModule: number,
  activePage: object
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

export default Page