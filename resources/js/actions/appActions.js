export const changeAppStore = (changes) => ({
  type: 'CHANGE_APP_STORE',
  changes: changes
})

export const setActiveDashboardContent = (nextActive) => ({
  type: 'SET_ACTIVE_DASHBOARD_CONTENT',
  nextActive: nextActive
})

export const setActiveImageSrcKey = (nextImageSrcKey) => ({
  type: 'SET_ACTIVE_IMAGE_SRC_KEY',
  nextImageSrcKey: nextImageSrcKey
})

export const setActiveSaveStatus = (nextSaveStatus) => ({
  type: 'SET_ACTIVE_SAVE_STATUS',
  nextSaveStatus: nextSaveStatus
})

export const setAppStore = (nextStore) => ({
  type: 'SET_APP_STORE',
  nextStore: nextStore
})