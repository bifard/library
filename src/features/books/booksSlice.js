import { createSlice } from "@reduxjs/toolkit";
import books from "./books.js";
/* – автор, название, год издания, аннотация, жанр, средняя оценка и др */
const initialState = books;

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
