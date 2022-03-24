import React from "react";
import { Card, Col, Layout, Rate, Row, Typography } from "antd";
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
      {/* style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }} */}
      <Typography.Title>Library</Typography.Title>
      <Layout>
        <Row justify="center">
          {books.map((book) => (
            <Col
              key={book.title + book.author}
              xs={24}
              md={12}
              lg={8}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Card
                className="card-hover"
                style={{ width: 300, marginTop: "16px", cursor: "pointer" }}
                cover={<img style={{ width: 270 }} alt="example" src={book.cover} />}
                onClick={() => navigation(`books/${book.genre}/${book.title}`)}
              >
                <Rate allowHalf defaultValue={calculateRate(book.rate)} disabled></Rate>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <Meta title={book.title} description={book.annotation} />
              </Card>
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
};

export default ListBooks;
