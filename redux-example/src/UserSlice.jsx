import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 101, name: "dm101" },
    { id: 102, name: "dm102" },
    { id: 103, name: "dm103" },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id != action.payload);
    },
  },
});
export const { addUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
