//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import _ from 'lodash'
//-----------------------------------------------------------------------------
// Default State
//-----------------------------------------------------------------------------
const defaultState = {
  meta: {
    domain: "thisismodularity.com",
    title: "Modularity"
  },
  active: {
    module: 0,
    page: 0
  },
  pages: [
    {
      slug: "",
      name: "Home",
      modules: [
        {
          type: "Image",
          data: {
            width: {
              MOBILE: {auto: false, value: 100},
              TABLET: {auto: false, value: 100},
              DESKTOP: {auto: false, value: 100},
            },
            height: {
              MOBILE: {auto: false, value: 50},
              TABLET: {auto: false, value: 75},
              DESKTOP: {auto: false, value: 100},
            },
            padding: {
              MOBILE: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
              TABLET: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
              DESKTOP: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
            },
            src: "/img/stock/1.jpg"
          }
        },
        {
          type: "TextBox",
          data: {
            width: {
              MOBILE: {auto: false, value: 100},
              TABLET: {auto: false, value: 100},
              DESKTOP: {auto: false, value: 100},
            },
            height: {
              MOBILE: {auto: true, value: 50},
              TABLET: {auto: true, value: 75},
              DESKTOP: {auto: true, value: 100},
            },
            fontFamily: "Source Sans Pro, sans-serif",
            fontSize: {
              MOBILE: 14,
              TABLET: 14,
              DESKTOP: 14
            },
            text: "Here's some text. Here's some text. Here's some text. Here's some text. Here's some text. Here's some text. Here's some text. Here's some text. Here's some text. ",
            padding: {
              MOBILE: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
              TABLET: {TOP: 5, RIGHT: 5, BOTTOM: 5, LEFT: 5},
              DESKTOP: {TOP: 10, RIGHT: 10, BOTTOM: 10, LEFT: 10},
            }
          }
        },
        {
          type: "Image",
          data: {
            width: {
              MOBILE: {auto: false, value: 100},
              TABLET: {auto: false, value: 100},
              DESKTOP: {auto: false, value: 100},
            },
            height: {
              MOBILE: {auto: false, value: 50},
              TABLET: {auto: false, value: 75},
              DESKTOP: {auto: false, value: 100},
            },
            padding: {
              MOBILE: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
              TABLET: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
              DESKTOP: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
            },
            src: "/img/stock/2.jpg"
          }
        },
        {
          type: "Image",
          data: {
            width: {
              MOBILE: {auto: false, value: 100},
              TABLET: {auto: false, value: 100},
              DESKTOP: {auto: false, value: 100},
            },
            height: {
              MOBILE: {auto: false, value: 50},
              TABLET: {auto: false, value: 75},
              DESKTOP: {auto: false, value: 100},
            },
            padding: {
              MOBILE: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
              TABLET: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
              DESKTOP: {TOP: 0, RIGHT: 0, BOTTOM: 0, LEFT: 0},
            },
            src: "/img/stock/3.jpg"
          }
        }
      ]
    }
  ]
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
const siteReducers = (state = defaultState, action) => {
  switch(action.type) {

    case 'ADD_PAGE': {
      let nextState = _.cloneDeep(state)
      const newPage = nextState.pages.length
      const siteId = nextState.pages[newPage - 1].site_id
      nextState.pages[newPage] = {
        id: _.random(-1, -5000),
        site_id: siteId,
        slug: "new-page",
        name: "New Page",
        modules: []
      }
      nextState.active.page = newPage
      return nextState
    }

    case 'ADD_MODULE': {
      const {
        pageIndex,
        moduleIndex,
        newModule
      } = action
      const newModuleIndex = moduleIndex + 1

      let nextState = _.cloneDeep(state)
      let nextPageModules = _.cloneDeep(nextState.pages[pageIndex].modules)
      nextPageModules.splice(newModuleIndex, 0, newModule)
      nextState.pages[pageIndex].modules = nextPageModules
      nextState.active.module = newModuleIndex
      return nextState
    }

    case 'CHANGE_SITE_STORE': {
      const {
        changes
      } = action

      let nextState = _.cloneDeep(state)
      _.forEach(changes, (change) => {
        nextState = _.set(nextState, change.key, change.value)
      })
      return nextState
    }

    case 'DELETE_MODULE': {
      const {
        moduleIndex,
        pageIndex
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].modules.splice(moduleIndex, 1)
      return nextState
    }

    case 'EDIT_FONT_FAMILY': {
      const {
        pageIndex,
        moduleIndex,
        nextFontFamily
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].modules[moduleIndex].data.fontFamily = nextFontFamily
      return nextState
    }

    case 'EDIT_FONT_SIZE': {
      const {
        pageIndex,
        moduleIndex,
        activeDevice,
        nextFontSize
      } = action
      
      let nextState = _.cloneDeep(state)
      if(!isNaN(nextFontSize)) {
        nextState.pages[pageIndex].modules[moduleIndex].data.fontSize[activeDevice] = nextFontSize
      }
      return nextState
    }

    case 'EDIT_HEIGHT_AUTO': {
      const {
        pageIndex,
        moduleIndex,
        activeDevice,
        nextHeightAuto
      } = action

      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].modules[moduleIndex].data.height[activeDevice].auto = nextHeightAuto
      return nextState
    }

    case 'EDIT_HEIGHT_VALUE': {
      const {
        pageIndex,
        moduleIndex,
        activeDevice,
        nextHeightValue
      } = action

      let nextState = _.cloneDeep(state)
      if(!isNaN(nextHeightValue)) {
        nextState.pages[pageIndex].modules[moduleIndex].data.height[activeDevice].value = nextHeightValue
      }
      return nextState
    }

    case 'EDIT_IMAGE_SRC': {
      const {
        pageIndex,
        moduleIndex,
        imageSrcKey,
        nextImageSrc
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].modules[moduleIndex].data[imageSrcKey] = nextImageSrc
      return nextState
    }

    case 'EDIT_PADDING': {
      const {
        pageIndex,
        moduleIndex,
        activeDevice,
        side,
        nextPadding
      } = action

      let nextState = _.cloneDeep(state)
      if(!isNaN(nextPadding)) {
        nextState.pages[pageIndex].modules[moduleIndex].data.padding[activeDevice][side] = nextPadding
      }
      return nextState
    }

    case 'EDIT_PAGE_NAME': {
      const {
        pageIndex,
        nextPageName
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].name = nextPageName
      return nextState
    }

    case 'EDIT_PAGE_SLUG': {
      const {
        pageIndex,
        nextPageSlug
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].slug = nextPageSlug
      return nextState
    }

    case 'EDIT_SITE_NAME': {
      const {
        nextSiteName
      } = action

      let nextState = _.cloneDeep(state)
      nextState.meta.name = nextSiteName
      return nextState
    }

    case 'EDIT_SITE_DOMAIN': {
      const {
        nextSiteDomain
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.meta.domain = nextSiteDomain
      return nextState
    }

    case 'EDIT_TEXT': {
      const {
        pageIndex,
        moduleIndex,
        textKey,
        nextText
      } = action
      
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].modules[moduleIndex].data[textKey] = nextText
      return nextState
    }

    case 'EDIT_WIDTH_AUTO': {
      const {
        pageIndex,
        moduleIndex,
        activeDevice,
        nextWidthAuto
      } = action
      let nextState = _.cloneDeep(state)
      nextState.pages[pageIndex].modules[moduleIndex].data.width[activeDevice].auto = nextWidthAuto
      return nextState
    }

    case 'EDIT_WIDTH_VALUE': {
      const {
        pageIndex,
        moduleIndex,
        activeDevice,
        nextWidthValue
      } = action
      let nextState = _.cloneDeep(state)
      if(!isNaN(nextWidthValue)) {
        nextState.pages[pageIndex].modules[moduleIndex].data.width[activeDevice].value = nextWidthValue
      }
      return nextState
    }

    case 'MOVE_MODULE': {
      let {
        from,
        pageIndex,
        to
      } = action
      let nextState = _.cloneDeep(state)
      let nextPageModules = _.cloneDeep(nextState.pages[pageIndex].modules)
      //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
      nextPageModules.splice(to, 0, nextPageModules.splice(from, 1)[0])
      nextState.pages[pageIndex].modules = nextPageModules
      return nextState
    }

    case 'SET_ACTIVE_MODULE': {
      const {
        nextActiveModule
      } = action

      let nextState = _.cloneDeep(state)
      nextState.active.module = nextActiveModule
      return nextState
    }

    case 'SET_ACTIVE_PAGE': {
      const {
        nextActivePage
      } = action

      let nextState = _.cloneDeep(state)
      nextState.active.page = nextActivePage
      return nextState
    }

    case 'SET_SITE_STORE':
      console.log(action.nextStore)
      return action.nextStore

    default:
      return state
  }
}

export default siteReducers