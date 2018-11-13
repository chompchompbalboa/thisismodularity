//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { axios } from '../api/axios'
import {
  setActiveSaveStatus
} from '../actions/appActions'

//-----------------------------------------------------------------------------
// Timeout Placeholders
//-----------------------------------------------------------------------------
let savePageTimeout = null
let saveSiteTimeout = null
let saveStatusTimeout = null

//-----------------------------------------------------------------------------
// Action Creators
//-----------------------------------------------------------------------------
export const addPage = () => {
  return (dispatch, getState) => {
    // Add the page
    dispatch(addPageReducer())
    // Save the new page
    const state = getState()
    const pagesLength = state.site.pages.length
    const page = state.site.pages[pagesLength - 1]
    dispatch(savePage(page, page.site_id))
  }
}
export const addPageReducer = () => ({
  type: 'ADD_PAGE',
})

export const addModule = (pageIndex, moduleIndex, newModule) => {
  return (dispatch, getState) => {
    // Add the module
    dispatch(addModuleReducer(pageIndex, moduleIndex, newModule))
    // Save the modified page
    const page = getState().site.pages[pageIndex]
    dispatch(savePage(page, page.site_id))
  }
}

export const addModuleReducer = (pageIndex, moduleIndex, newModule) => ({
  type: 'ADD_MODULE',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  newModule: newModule,
})

export const changeSiteStore = (changes) => ({
  type: 'CHANGE_SITE_STORE',
  changes: changes
})

export const deleteModule = (pageIndex, moduleIndex) => {
  return (dispatch, getState) => {
    // Delete the module
    dispatch(deleteModuleReducer(pageIndex, moduleIndex))
    // Save the modified page
    const page = getState().site.pages[pageIndex]
    dispatch(savePage(page, page.site_id))
  }
}

export const deleteModuleReducer = (pageIndex, moduleIndex) => ({
  type: 'DELETE_MODULE',
  moduleIndex: moduleIndex,
  pageIndex: pageIndex
})

export const deletePage = (pageId, pageIndex) => {
  return dispatch => {
    // Delete the module
    dispatch(deletePageReducer(pageIndex))
    dispatch(deletePageFromServer(pageId))
  }
}

export const deletePageFromServer = (pageId) => {
  return dispatch => {
    window.clearTimeout(saveStatusTimeout)
    dispatch(setActiveSaveStatus("SAVING"))
    return axios.delete('/page/' + pageId)
      .then(response => {
        if(response.data.success) {
          saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
          return dispatch(setActiveSaveStatus("SAVE_SUCCESS"))
        }
        saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
        return dispatch(setActiveSaveStatus("SAVE_FAILURE"))
      })
      .catch(() => {
        saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
        return dispatch(setActiveSaveStatus("SAVE_FAILURE"))
      })
  }
}

export const deletePageReducer = (pageIndex) => ({
  type: 'DELETE_PAGE',
  pageIndex: pageIndex
})

export const editFontFamily = (pageIndex, moduleIndex, nextFontFamily) => ({
  type: 'EDIT_FONT_FAMILY',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  nextFontFamily: nextFontFamily
})

export const editFontSize = (pageIndex, moduleIndex, activeDevice, nextFontSize) => ({
  type: 'EDIT_FONT_SIZE',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  activeDevice: activeDevice,
  nextFontSize: nextFontSize
})

export const editHeightAuto = (pageIndex, moduleIndex, activeDevice, nextHeightAuto) => ({
  type: 'EDIT_HEIGHT_AUTO',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  activeDevice: activeDevice,
  nextHeightAuto: nextHeightAuto
})

export const editHeightValue = (pageIndex, moduleIndex, activeDevice, nextHeightValue) => ({
  type: 'EDIT_HEIGHT_VALUE',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  activeDevice: activeDevice,
  nextHeightValue: nextHeightValue
})

export const editImageSrc = (pageIndex, moduleIndex, imageSrcKey, nextImageSrc) => ({
  type: 'EDIT_IMAGE_SRC',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  imageSrcKey: imageSrcKey,
  nextImageSrc: nextImageSrc
})

export const editPadding = (pageIndex, moduleIndex, activeDevice, side, nextPadding) => ({
  type: 'EDIT_PADDING',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  activeDevice: activeDevice,
  side: side,
  nextPadding: nextPadding
})

export const editPageName = (pageIndex, nextPageName) => {
  return (dispatch, getState) => {
    // Edit the page name
    dispatch(editPageNameReducer(pageIndex, nextPageName))
    // Save the modified page
    const page = getState().site.pages[pageIndex]
    dispatch(savePage(page, page.site_id))
  }
}

export const editPageNameReducer = (pageIndex, nextPageName) => ({
  type: 'EDIT_PAGE_NAME',
  pageIndex: pageIndex,
  nextPageName: nextPageName
})

export const editPageSlug = (pageIndex, nextPageSlug) => {
  return (dispatch, getState) => {
    // Edit the page name
    dispatch(editPageSlugReducer(pageIndex, nextPageSlug))
    // Save the modified page
    const page = getState().site.pages[pageIndex]
    dispatch(savePage(page, page.site_id))
  }
}

export const editPageSlugReducer = (pageIndex, nextPageSlug) => ({
  type: 'EDIT_PAGE_SLUG',
  pageIndex: pageIndex,
  nextPageSlug: nextPageSlug
})

export const editSiteName = (nextSiteName) => {
  return (dispatch, getState) => {
    // Edit the page name
    dispatch(editSiteNameReducer(nextSiteName))
    // Save the modified page
    const site = getState().site
    dispatch(saveSite(site))
  }
}

export const editSiteNameReducer = (nextSiteName) => ({
  type: 'EDIT_SITE_NAME',
  nextSiteName: nextSiteName
})

export const editSiteDomain = (nextSiteDomain) => {
  return (dispatch, getState) => {
    // Edit the page name
    dispatch(editSiteDomainReducer(nextSiteDomain))
    // Save the modified page
    const site = getState().site
    dispatch(saveSite(site))
  }
}

export const editSiteDomainReducer = (nextSiteDomain) => ({
  type: 'EDIT_SITE_DOMAIN',
  nextSiteDomain: nextSiteDomain
})

export const editText = (pageIndex, moduleIndex, textKey, nextText) => ({
  type: 'EDIT_TEXT',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  textKey: textKey,
  nextText: nextText
})

export const editWidthAuto = (pageIndex, moduleIndex, activeDevice, nextWidthAuto) => ({
  type: 'EDIT_WIDTH_AUTO',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  activeDevice: activeDevice,
  nextWidthAuto: nextWidthAuto
})

export const editWidthValue = (pageIndex, moduleIndex, activeDevice, nextWidthValue) => ({
  type: 'EDIT_WIDTH_VALUE',
  pageIndex: pageIndex,
  moduleIndex: moduleIndex,
  activeDevice: activeDevice,
  nextWidthValue: nextWidthValue
})

export const moveModule = (pageIndex, from, to) => {
  return (dispatch, getState) => {
    // Move the module
    dispatch(moveModuleReducer(pageIndex, from, to))
    // Save the modified page
    const page = getState().site.pages[pageIndex]
    dispatch(savePage(page, page.site_id))
  }
}

export const moveModuleReducer = (pageIndex, from, to) => ({
  type: 'MOVE_MODULE',
  pageIndex: pageIndex,
  from: from,
  to: to
})

export const savePage = (page, siteId) => {
  return dispatch => {
    window.clearTimeout(savePageTimeout)
    savePageTimeout = window.setTimeout(() => dispatch(savePageToServer(page, siteId)), 1500)
  }
}

export const savePageToServer = (page, siteId) => {
  return dispatch => {
    window.clearTimeout(saveStatusTimeout)
    dispatch(setActiveSaveStatus("SAVING"))
    return axios.post('/page/' + page.id, {
      page: page,
      siteId: siteId,
    }).then(response => {
        if(response.data.success) {
          saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
          dispatch(setPageId(page.id, response.data.id))
          return dispatch(setActiveSaveStatus("SAVE_SUCCESS"))
        }
        saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
        return dispatch(setActiveSaveStatus("SAVE_FAILURE"))
      })
      .catch(() => {
        saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
        return dispatch(setActiveSaveStatus("SAVE_FAILURE"))
      })
  }
}

export const saveSite = (site) => {
  return dispatch => {
    window.clearTimeout(saveSiteTimeout)
    saveSiteTimeout = window.setTimeout(() => dispatch(saveSiteToServer(site)), 1500)
  }
}

export const saveSiteToServer = (site) => {
  return dispatch => {
    window.clearTimeout(saveStatusTimeout)
    dispatch(setActiveSaveStatus("SAVING"))
    return axios.post('/site/' + site.id, {
      site: site
    }).then(response => {
        if(response.data.success) {
          saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
          return dispatch(setActiveSaveStatus("SAVE_SUCCESS"))
        }
        saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
        return dispatch(setActiveSaveStatus("SAVE_FAILURE"))
      })
      .catch(() => {
        saveStatusTimeout = window.setTimeout(() => dispatch(setActiveSaveStatus("READY")), 1500)
        return dispatch(setActiveSaveStatus("SAVE_FAILURE"))
      })
  }
}

export const setActiveModule = (nextActiveModule) => ({
  type: 'SET_ACTIVE_MODULE',
  nextActiveModule: nextActiveModule
})

export const setActivePage = (nextActivePage) => ({
  type: 'SET_ACTIVE_PAGE',
  nextActivePage: nextActivePage
})

export const setPageId = (pageId, nextPageId) => ({
  type: 'SET_PAGE_ID',
  pageId: pageId,
  nextPageId: nextPageId
})

export const setSiteStore = (nextStore) => ({
  type: 'SET_SITE_STORE',
  nextStore: nextStore
})