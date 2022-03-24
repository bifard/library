import { createSlice } from "@reduxjs/toolkit";
import books from "./books.js";
/* – автор, название, год издания, аннотация, жанр, средняя оценка и др */
const initialState = books;

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    editBook: (state, action) => {
      state[action.payload.index] = { ...state[action.payload.index], ...action.payload.values };
    },
    toRate: (state, action) => {
      state[action.payload.index].rate[action.payload.user] = action.payload.rate;
    },
    addComment: (state, action) => {
      state[action.payload.index].comments.push(action.payload.comment);
    },
  },
});
export const { editBook, toRate, addComment } = booksSlice.actions;
export default booksSlice.reducer;
