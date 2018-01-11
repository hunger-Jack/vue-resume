
import objectPath from 'object-path'
const SET_USER = 'SET_USER'
const INIT_STATE = 'INIT_STATE'
const SWITCH_TAB = 'SWITCH_TAB'
const UPDATE_RESUME = 'UPDATE_RESUME'
const REMOVE_USER = 'REMOVE_USER'

export default {
  [SET_USER](state, payload) {
    Object.assign(state.user, payload)
  },
  [INIT_STATE](state, payload) {
    Object.assign(state, payload)
  },
  [SWITCH_TAB](state, payload) {
    state.selected = payload
    localStorage.setItem('state', JSON.stringify(state))
  },
  [UPDATE_RESUME](state, {
    path,
    value
  }) {
    objectPath.set(state.resume, path, value)
    localStorage.setItem('state', JSON.stringify(state))
  },
  [REMOVE_USER](state) {
    state.user.id = null
  }
}
