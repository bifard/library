import { Layout, Pagination, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListBooks from "../components/ListBooks";

const { Search } = Input;
const { Option } = Select;

const Home = () => {
  const size = 6;
  const books = useSelector((state) => state.books);
  const [booksPage, setBooksPage] = useState();
  const [searchBook, setSearchBook] = useState(books);
  const [filter, setFilter] = useState("title");
  const onSearch = (event) => {
    if (event.target.value) {
      setSearchBook(books.filter((item) => item[filter].includes(event.target.value)));
    } else {
      setSearchBook(books);
    }
  };

  useEffect(() => {
    setBooksPage(searchBook.slice(0, size));
  }, [searchBook]);

  return (
    <Layout style={{ display: "flex", alignItems: "center" }}>
      <Row>
        <Search placeholder="input search text" onChange={onSearch} style={{ width: 200 }} />
        <Select defaultValue={filter} onChange={setFilter}>
          <Option value="title">title</Option>
          <Option value="author">author</Option>
        </Select>
      </Row>
      <ListBooks books={booksPage && booksPage} />
      <Pagination
        style={{ marginTop: 10, marginBottom: 10 }}
        defaultCurrent={1}
        defaultPageSize={size}
        total={searchBook.length}
        onChange={(pages) => {
          const index = (pages - 1) * size;
          setBooksPage(searchBook.slice(index, index + size));
        }}
      />
    </Layout>
  );
};

export default Home;
