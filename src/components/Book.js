import React, { useEffect, useState } from "react";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Image, Layout, Rate, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toRate } from "../features/books/booksSlice";
import { useNavigate, useParams } from "react-router-dom";
const { Title, Paragraph } = Typography;

const Book = ({ book, isEdit }) => {
  const params = useParams();
  const navigation = useNavigate();
  const [rateBook, setRateBook] = useState(1);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const { isAuth, username } = useSelector((state) => state.auth);
  const indexBook = books.findIndex((item) => item.title === book.title);
  const toEditPage = () => {
    navigation(`/books/${params.genre}/${params.title}/edit`);
  };
  const calculateRate = (rate) => {
    const index = Object.keys(rate).length;
    let totalRate = 0;
    for (let key in rate) {
      totalRate += rate[key];
    }
    return totalRate / index;
  };
  useEffect(() => {
    setRateBook(calculateRate(book.rate));
  });
  const onChangeRate = (value) => {
    dispatch(toRate({ user: username, rate: value, index: indexBook }));
  };
  return (
    <Layout style={{ paddingTop: 16 }}>
      <Row>
        <Col xs={24} sm={8}>
          <Image src={book.cover} />
          <Rate disabled={!isAuth} allowHalf onChange={(value) => onChangeRate(value)} value={rateBook}></Rate>
          <Title level={5}>Средняя оценка: {rateBook}</Title>
        </Col>
        <Col xs={24} sm={12} style={{ paddingLeft: 5 }}>
          <Paragraph>
            <Title>{book.title}</Title>
            <Title level={4}>Author: {book.author}</Title>
            <Title level={5}>Genre: {book.genre}</Title>
            <Title level={5}>Date of publication: {book.yearPublication} year</Title>
          </Paragraph>
          <Paragraph>{book.annotation}</Paragraph>
          {isEdit && (
            <Button icon={<EditOutlined />} onClick={toEditPage}>
              Edit
            </Button>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Book;
