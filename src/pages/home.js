import { Layout, Pagination } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ListBooks from "../components/ListBooks";

const Home = () => {
  const size = 6;
  const books = useSelector((state) => state.books);
  const [booksPage, setBooksPage] = useState(books.slice(0, size));

  return (
    <Layout style={{ display: "flex", alignItems: "center" }}>
      <ListBooks books={booksPage} />
      <Pagination
        style={{ marginTop: 10, marginBottom: 10 }}
        defaultCurrent={1}
        defaultPageSize={size}
        total={books.length}
        onChange={(pages) => {
          const index = (pages - 1) * size;
          setBooksPage(books.slice(index, index + size));
        }}
      />
    </Layout>
  );
};

export default Home;
