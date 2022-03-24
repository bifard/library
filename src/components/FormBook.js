import React from "react";
import { Form, Input, Button, Image, Layout, Row, Col, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBook } from "../features/books/booksSlice";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const FormBook = () => {
  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const index = books.findIndex((item) => item.title === params.title);
  const { title, yearPublication, genre, annotation, author, cover } = books[index];

  const onFinish = (values) => {
    console.log({ values, index });
    dispatch(editBook({ values, index }));
    navigation(`/books/${values.genre}/${values.title}`);
  };

  return (
    <Layout>
      <Row justify="center">
        <Image src={cover} style={{ maxWidth: 300 }}></Image>
      </Row>
      <Row justify="center" style={{ paddingTop: 20 }}>
        <Col sm={{ span: 16, pull: 2 }} xs={{ span: 24 }}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            initialValues={{ title, author, yearPublication, genre, annotation }}
          >
            <Form.Item name={"title"} label="Title">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item name={"genre"} label="Genre">
              <Input />
            </Form.Item>

            <Form.Item name={"author"} label="Author">
              <Input />
            </Form.Item>

            <Form.Item name={"yearPublication"} label="Year of publication">
              <Input />
            </Form.Item>
            <Form.Item name={"annotation"} label="Annotation">
              <Input.TextArea autoSize="true" />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default FormBook;
