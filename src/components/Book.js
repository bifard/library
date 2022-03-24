import React from "react";

import { Col, Image, Layout, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;

const Book = ({ book }) => {
  return (
    <Layout style={{ paddingTop: 16 }}>
      <Row>
        <Col xs={24} sm={8}>
          <Image src={book.cover} />
        </Col>
        <Col xs={24} sm={12}>
          <Paragraph>
            <Title>{book.title}</Title>
            <Title level={4}>Author: {book.author}</Title>
            <Title level={5}>Date of publication: {book.yearPublication} year</Title>
          </Paragraph>
          <Paragraph>{book.annotation}</Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default Book;
