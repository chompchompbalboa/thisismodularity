//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/reducers'
import { BrowserRouter } from 'react-router-dom'

import ContentBundle from './components/ContentBundle'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Root extends Component {

  store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware
    )
  )

  render() {

    return (
      <ReduxProvider store={this.store}>
        <ContentBundle />
      </ReduxProvider>
    )
  }
}
//-----------------------------------------------------------------------------
// Mount to DOM
//-----------------------------------------------------------------------------
if (document.getElementById('react-container')) {
    ReactDOM.render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
    document.getElementById('react-container'));
}
