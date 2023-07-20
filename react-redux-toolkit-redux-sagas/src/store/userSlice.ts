import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../types/User"

interface UserState {
    list: User[],
    loading: boolean
    error: string | null
}
  
const initialState: UserState = {
    list: [],
    loading: false,
    error: null,
}

  export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      fetchUsers: (state) => {
        state.loading = true
        state.error = null
      },
      fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.list = action.payload
      },
      fetchUsersError: (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
      }
    },
    extraReducers: {},
  })
  
  export const { fetchUsers, fetchUsersSuccess, fetchUsersError } = userSlice.actions

  export const userReducer = userSlice.reducer