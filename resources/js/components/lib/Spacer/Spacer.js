//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Spacer = ({ size }) => (
  <Container
    size={size}/>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Spacer.propTypes = {
  size: shape({
    sm: string,
    md: string,
    lg: string
  })
}

Spacer.defaultProps = {
  size: {
    sm: "2vh",
    md: "2vh",
    lg: "2vh"
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: ${props => props.size.sm};
  @media (min-width: 48em) and (max-width: 64em) {
      height: ${props => props.size.md};
  }
  @media (min-width: 64em) {
      height: ${props => props.size.lg};
  }
`

export default Spacer