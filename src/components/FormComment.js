import { Form, Button, Input, Comment } from "antd";
import { useDispatch } from "react-redux";
import { addComment } from "../features/books/booksSlice";

const { TextArea } = Input;

const FormComment = ({ username, index, disabled }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onSubmit = (value) => {
    const data = new Date().toUTCString("YYYY-MM-DD");
    console.log(data);
    dispatch(addComment({ index, comment: { username, ...value, data } }));
    form.resetFields();
  };
  return (
    <Comment author={username}>
      <Form form={form} onFinish={onSubmit}>
        <Form.Item rules={[{ required: true, message: "Please input text comment!" }]} name="text">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button disabled={disabled} type="primary" htmlType="submit">
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </Comment>
  );
};

export default FormComment;
