import { createSlice } from '@reduxjs/toolkit'

const HOME_URL = '/'
const initialState = {
  sellYourCarFormOpen: false,
  financingLinkClicks: 0,
  selectedIndexVDPMenu: 0,
  zipcode: '',
  confirmationType:
    typeof window !== 'undefined'
      ? window.sessionStorage.getItem('confirmationType')
      : '',
  priceRating:
    typeof window !== 'undefined'
      ? JSON.parse(window.sessionStorage.getItem('priceRating'))
      : false,
  hideVdpModal:
    typeof window !== 'undefined'
      ? JSON.parse(window.sessionStorage.getItem('vdpModal'))
      : null,
  promoCode: '',
  urlToBack: HOME_URL,
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggleSellYourCarForm: (state) => {
      state.sellYourCarFormOpen = !state.sellYourCarFormOpen
    },

    setValue: (state, action) => {
      const { key, value, persist } = action.payload
      if (persist) {
        window.sessionStorage.setItem(
          key,
          typeof value === 'object' ? JSON.stringify(value) : String(value),
        )
      }
      state[key] = value
    },

    IncrementFinancingClicks: (state) => {
      state.financingLinkClicks += 1
    },
    resetUrlToBack: (state) => {
      state.urlToBack = HOME_URL
    },
  },
})

export default commonSlice.reducer
export const {
  toggleSellYourCarForm,
  setValue,
  IncrementFinancingClicks,
  togglelVdpModal,
  resetUrlToBack,
} = commonSlice.actions
