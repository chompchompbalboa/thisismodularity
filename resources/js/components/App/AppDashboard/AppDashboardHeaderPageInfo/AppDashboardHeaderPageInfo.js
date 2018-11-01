//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, func, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppDashboardHeaderPageInfo = ({ domain, isInputActive, header, onHeaderChange, subheader, onSubheaderChange }) => (
  <Container>
    <InputContainer>
      <HeaderInput 
        onChange={(e) => onHeaderChange(e.target.value)}
        value={header}/>
    </InputContainer>
    <InputContainer>
      {domain}.com{isInputActive && "/"}
      <SubheaderInput
        disabled={!isInputActive} 
        onChange={(e) => onSubheaderChange(e.target.value)}
        value={subheader}/>
    </InputContainer>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardHeaderPageInfo.propTypes = {
  domain: string,
  isInputActive: bool,
  header: string,
  onHeaderChange: func,
  subheader: string,
  onSubheaderChange: func
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 7vh;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Source Sans Pro, sans-serif;
  font-size: 0.9em;
  font-weight: 300;
  color: rgb(145,145,145);
`

const HeaderInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-family: Source Sans Pro, sans-serif;
  font-size: 2em;
  font-weight: 400;
  color: white;
`

const SubheaderInput = styled.input`
  width: 100%;
  padding: 0.25vw 0.25vw 0.25vw 0;
  border: none;
  background-color: transparent;
  font-family: Source Sans Pro, sans-serif;
  font-size: 1em;
  font-weight: 300;
  color: rgb(145,145,145);
`

export default AppDashboardHeaderPageInfo