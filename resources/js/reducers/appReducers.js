//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import _ from 'lodash'

//-----------------------------------------------------------------------------
// Default State
//-----------------------------------------------------------------------------
const defaultState = {
  active: {
    dashboardContent: "OVERVIEW",
    device: "MOBILE",
    imageSrcKey: "src",
    positions: {
      EDIT: "RIGHT",
      IMAGES: "RIGHT",
      MODULES: "RIGHT",
      OVERVIEW: "CENTER",
      PAGE: "RIGHT"
    },
    saveStatus: "READY"
  },
  collections: {
    images: [
      "/img/stock/1.jpg",
      "/img/stock/2.jpg",
      "/img/stock/3.jpg",
      "/img/stock/4.jpg",
      "/img/stock/5.jpg",
      "/img/stock/6.jpg",
      "/img/stock/7.jpg",
      "/img/stock/8.jpg",
      "/img/stock/9.jpg",
      "/img/stock/10.jpg",
    ],
  },
  isApp: true
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
const appReducers = (state = defaultState, action) => {
  switch(action.type) {

    case 'CHANGE_APP_STORE': {
      const {
        changes
      } = action

      let nextState = _.cloneDeep(state)
      _.forEach(changes, (change) => {
        nextState = _.set(nextState, change.key, change.value)
      })
      return nextState
    }

    case 'SET_ACTIVE_DASHBOARD_CONTENT': {
      const {
        nextActive
      } = action
      const active = _.findKey(state.active.positions, (position) => {return position === "CENTER"})
      const nextActiveCurrentPosition = _.find(state.active.positions, (position, componentKey) => {return componentKey === nextActive})

      let nextState = _.cloneDeep(state)
      nextState.active.positions[active] = nextActiveCurrentPosition === "RIGHT" ? "LEFT" : "RIGHT"
      nextState.active.positions[nextActive] = "CENTER"
      nextState.active.dashboardContent = nextActive
      return nextState
    }

    case 'SET_ACTIVE_IMAGE_SRC_KEY': {
      const {
        nextImageSrcKey
      } = action

      let nextState = _.cloneDeep(state)
      nextState.active.imageSrcKey = nextImageSrcKey
      return nextState
    }

    case 'SET_ACTIVE_SAVE_STATUS': {
      const {
        nextSaveStatus
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.active.saveStatus = nextSaveStatus
      return nextState
    }

    case 'SET_APP_STORE': {
      const {
        nextStore
      } = action

      return nextStore
    }

    default:
      return state
  }
}

export default appReducers