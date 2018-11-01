//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { node, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const EditContainer = ({ alignItems, children, flexDirection, header, justifyContent }) => (
  <Container>
    <Header>
      {header}
    </Header>
    <Children
      alignItems={alignItems}
      flexDirection={flexDirection}
      justifyContent={justifyContent}>
      {children}
    </Children>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditContainer.propTypes = {
  alignItems: string,
  children: node,
  flexDirection: string,
  header: string,
  justifyContent: string,
}

EditContainer.defaultProps = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  user-select: none;
  margin-top: -2vh;
  margin-bottom: 4vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Header = styled.div`
  margin-left: 5px;
  font-size: 1em;
`

const Children = styled.div`
  background-color: rgba(25,25,25,0.7);
  border-radius: 10px;
  padding: 1.5vh;
  margin: 1vh 0 0 0;
  width: calc(100% - 1vh);
  font-size: 0.85em;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export default EditContainer