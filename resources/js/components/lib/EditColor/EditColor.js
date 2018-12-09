//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import EditContainer from '../../lib/EditContainer/EditContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const EditColor = ({ header }) => (
  <EditContainer
    header={header}>
  </EditContainer>
)

EditColor.propTypes = {
  header: string
}