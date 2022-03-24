import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { username: "test1", pssword: "test1" },
  { username: "test2", pssword: "test2" },
  { username: "test3", pssword: "test3" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
