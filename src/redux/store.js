import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import reducer from 'redux/reducer'

const options = {
  reducer,
  preloadedState: {},
  devTools: process.env.NODE_ENV !== 'production',
}

if (process.env.NODE_ENV !== 'production') {
  options.middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}

export const store = configureStore(options)

/* export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
  serializeState: (state) => serialize(state),
  deserializeState: (state) => deserialize(state),
})
 */