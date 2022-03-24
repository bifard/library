import { Button, Col, Layout, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
const BookPage = () => {
  const params = useParams();
  const books = useSelector((state) => state.books);
  const book = books.filter((item) => item.genre === params.genre && item.title === params.title)[0];
  const { isAuth, username } = useSelector((state) => state.auth);
  const isEdit = isAuth && username === book.user;
  return (
    <Layout>
      <Row>
        <Col>
          <Book book={book} />
        </Col>
      </Row>

      {isEdit && (
        <Row>
          <Col push={16}>
            <Button>Edit</Button>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default BookPage;
