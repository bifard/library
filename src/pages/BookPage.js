import { Button, Col, Layout, Row, Typography } from "antd";
import Title from "antd/lib/skeleton/Title";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import Book from "../components/Book";
import CommentList from "../components/CommentsList";
import FormComment from "../components/FormComment";

const BookPage = () => {
  const [book, setBook] = useState(null);
  const [indexBook, setIndexBook] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();
  const books = useSelector((state) => state.books);
  const { isAuth, username } = useSelector((state) => state.auth);

  useEffect(() => {
    setBook(books.find((item) => item.title === params.title));
  }, [books]);
  useEffect(() => {
    if (book) setIndexBook(books.findIndex((item) => item.title === book.title));
  }, [book]);

  useEffect(() => {
    if (book) setIsEdit(isAuth && username === book.user);
  }, [book]);
  return (
    <Layout>
      {book && (
        <>
          <Row>
            <Col>
              <Book isEdit={isEdit} book={book} />
            </Col>
          </Row>

          <Row justify="center" style={{ paddingTop: 20 }}>
            <Typography.Title level={3}>Comments:</Typography.Title>
            <Col span={24}>
              <CommentList comments={book.comments}></CommentList>
              {isAuth && <FormComment disabled={!isAuth} username={username} index={indexBook}></FormComment>}
            </Col>
          </Row>
        </>
      )}
    </Layout>
  );
};

export default BookPage;
