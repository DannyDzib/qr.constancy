import { combineReducers } from 'redux'
import commonReducer from 'redux/modules/common'
import searchReducer from 'redux/modules/search'

export default combineReducers({
  common: commonReducer,
  search: searchReducer,
})
