import { combineReducers } from "redux"
import commonReducer from "redux/modules/common"
import searchReducer from "redux/modules/search"
import auth from "redux/modules/auth"

export default combineReducers({
  common: commonReducer,
  search: searchReducer,
  auth: auth,
})
