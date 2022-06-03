/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: null,
  modelsByMake: {},
  states: [],
  citiesByState: {},
  page: 1,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,

  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload
      state.filters[key] = value
    },

    setFilters: (state, action) => {
      const filters = action.payload
      if (state.filters) {
        Object.assign(state.filters, filters)
      } else {
        state.filters = filters
      }
    },

    setOverridedFilters: (state, action) => {
      const filters = action.payload
      state.filters = filters
    },

    resetFilters: (state) => {
      state.filters = {}
    },

    setModelsByMake: (state, action) => {
      const { maker, models } = action.payload
      state.modelsByMake[maker] = models
    },

    setCitiesByState: (state, action) => {
      const citiesByState = action.payload
      state.citiesByState = citiesByState
    },

    setStates: (state, action) => {
      const states = action.payload
      state.states = states
    },

    setPage: (state, action) => {
      const page = action.payload
      state.page = page
    },
  },
})

export default searchSlice.reducer
export const {
  setFilter, setFilters, resetFilters, setModelsByMake, setCitiesByState,
  setStates, setPage, setOverridedFilters,
} = searchSlice.actions
