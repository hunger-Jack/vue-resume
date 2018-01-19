import saveOrUpdateResumeData from '../lib/saveOrUpdateResumeData'
import objectPath from 'object-path'
import getAvUser from '../lib/getAvUser'

const SET_USER = 'SET_USER'
const INIT_STATE = 'INIT_STATE'
const SWITCH_TAB = 'SWITCH_TAB'
const UPDATE_RESUME = 'UPDATE_RESUME'
const REMOVE_USER = 'REMOVE_USER'
const INIT_RESUME = 'INIT_RESUME'

export default {
  [SET_USER](state, payload) {
    Object.assign(state.user, payload)
  },
  [INIT_STATE](state, payload) {
    Object.assign(state, payload)
  },
  [SWITCH_TAB](state, payload) {
    state.selected = payload
    saveOrUpdateResumeData()
  },
  [UPDATE_RESUME](state, {
    path,
    value
  }) {
    objectPath.set(state.resume, path, value)
    saveOrUpdateResumeData()
  },
  [REMOVE_USER](state) {
    state.user.id = null
  },
  [INIT_RESUME](state) {
    Object.assign(state.resume, null)
  }
}
