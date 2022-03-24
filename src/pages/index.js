import React from "react";
import { Routes, Route } from "react-router-dom";
import FormBook from "../components/FormBook";
import BookPage from "./BookPage";
import Error from "./error";

import Home from "./home";
import Login from "./login";



const Pages = () => {
 
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/books/:genre/:title" element={<BookPage />}></Route>
      <Route path="/books/:genre/:title/edit" element={<FormBook />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export default Pages;
