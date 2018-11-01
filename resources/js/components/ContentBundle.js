//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'

import { axios } from '../api/axios'
import { setAppStore } from '../actions/appActions'
import { setSiteStore } from '../actions/siteActions'

import App from './App/App'
import Site from './Site/Site'

//-----------------------------------------------------------------------------
// Redux
//-----------------------------------------------------------------------------
@connect(
  null,
  dispatch => ({
    setAppStore: (nextStore) => dispatch(setAppStore(nextStore)),
    setSiteStore: (nextStore) => dispatch(setSiteStore(nextStore))
  })
)

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class ContentBundle extends Component {

  state = {
    hasLoaded: false
  }

  componentDidMount = () => {
    const {
      setSiteStore
    } = this.props
    const domain = "thisismodularity"
    axios.get('/site/' + domain)
      .then(response => {
        setSiteStore(response.data)
        this.setState({
          hasLoaded: true
        })
      })
      .catch(response => {
        console.warn(response)
      })

  }

  render() {
    const {
      hasLoaded
    } = this.state
    if(hasLoaded) {
      return (
        <React.Fragment>
          <App/>
          <Site/>
        </React.Fragment>
      )
    }
    return null
  } 
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
ContentBundle.propTypes = {
  setSiteStore: func
}