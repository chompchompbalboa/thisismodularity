import { combineReducers } from 'redux'
import appReducers from './appReducers'
import siteReducers from './siteReducers'

export default combineReducers({
  app: appReducers,
  site: siteReducers,
})