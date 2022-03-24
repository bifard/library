import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import booksSlice from "../features/books/booksSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksSlice,
    auth: authSlice,
  },
});
