import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
}

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export default commonSlice.reducer
export const { setLoading } = commonSlice.actions
