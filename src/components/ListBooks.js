import React from "react";
import { Card, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const ListBooks = ({ books }) => {
  const navigation = useNavigate();
  return (
    <>
      <Typography.Title>Library</Typography.Title>
      <Layout style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
        {books.map((book) => (
          <Card
            className="card-hover"
            key={book.title + book.author}
            style={{ width: 300, marginTop: "16px", cursor: "pointer" }}
            cover={<img style={{ width: 270 }} alt="example" src={book.cover} />}
            onClick={() => navigation(`books/${book.genre}/${book.title}`)}
          >
            <p>{book.author}</p>
            <Meta title={book.title} description={book.annotation} />
          </Card>
        ))}
      </Layout>
    </>
  );
};

export default ListBooks;
