import React from "react";
import { Card, Layout, Rate, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const ListBooks = ({ books = [] }) => {
  const navigation = useNavigate();
  const calculateRate = (rate) => {
    const index = Object.keys(rate).length;
    let totalRate = 0;
    for (let key in rate) {
      totalRate += rate[key];
    }
    return totalRate / index;
  };

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
            <Rate allowHalf defaultValue={calculateRate(book.rate)} disabled></Rate>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <Meta title={book.title} description={book.annotation} />
          </Card>
        ))}
      </Layout>
    </>
  );
};

export default ListBooks;
