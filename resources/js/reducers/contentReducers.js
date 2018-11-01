import _ from 'lodash'

const defaultState = null

const projects = (state = defaultState, action) => {
  switch(action.type) {

    case 'SET_PROJECTS_STORE':
      return action.nextStore

    case 'UPDATE_PROJECT': {
      const {
        projectIndex,
        key,
        value
      } = action
      const nextState = _.clone(state)
      nextState[projectIndex] = _.set(_.clone(nextState[projectIndex]), key, value)
      return _.values(nextState)
      break;
    }

    case 'DELETE_PROJECT_DATA': {
      const {
        projectIndex,
        dataType,
        id
      } = action
      const nextState = _.clone(state)
      const dataToDeleteIndex = _.findIndex(nextState[projectIndex].data[dataType], ['id', id])
      nextState[projectIndex].data[dataType].splice(dataToDeleteIndex, 1)
      return nextState
      break;
    }

    default:
      return state
  }
}

export default projects