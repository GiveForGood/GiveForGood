import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    selectedUser: {},
  },
  reducers: {
    saveSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  saveSelectedUser,
} = userSlice.actions;
export default userSlice.reducer;