//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setActiveDashboardContent as setActiveDashboardContentAction } from '../../../../actions/appActions'

import appDashboardContentMap from '../../../maps/appDashboardContentMap'

import Icon from '../../../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    setActiveDashboardContent: (nextActive) => dispatch(setActiveDashboardContentAction(nextActive))
  })
)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppDashboardContentContainerNavigation extends Component {

  handleBackClick = () => {
    const {
      back,
      onBackClick,
      setActiveDashboardContent
    } = this.props
    setActiveDashboardContent(back)
    onBackClick && onBackClick()
  }

  handleForwardClick = () => {
    const {
      forward,
      onForwardClick,
      setActiveDashboardContent
    } = this.props
    setActiveDashboardContent(forward)
    onForwardClick && onForwardClick()
  }
  
  render() {
    const {
      back,
      forward
    } = this.props
  
    return (
      <Container>
        {back && 
          <BackButton
            onClick={() => this.handleBackClick()}>
            <Icon
              icon="CHEVRON_LEFT"/>
            {appDashboardContentMap[back].text}
          </BackButton>
        }
        {forward && 
          <ForwardButton
            onClick={() => this.handleForwardClick()}>
            {appDashboardContentMap[forward].text}
            <Icon
              icon="CHEVRON_RIGHT"/>
          </ForwardButton>
        }
        {!back && !forward &&
          <HeaderOnly>
            Select a page to edit:
          </HeaderOnly>
        }
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppDashboardContentContainerNavigation.propTypes = {
  back: string,
  onBackClick: func,
  onForwardClick: func,
  setActiveDashboardContent: func,
  forward: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  letter-spacing: 0.125em;
`

const Button = styled.div`
  cursor: pointer;
  opacity: 0.75;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`

const BackButton = styled(Button)`
`

const ForwardButton = styled(Button)`
`

const HeaderOnly = styled(Button)`
  margin-top: 1vh;
  cursor: auto;
  &:hover {
    opacity: 0.75;
  }
`