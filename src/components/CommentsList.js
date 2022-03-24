import { Comment, List } from "antd";

const CommentList = ({ comments = [] }) => (
  <List
    dataSource={comments}
    bordered={true}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(comment) => (
      <Comment
        style={{ paddingLeft: 20, paddingRight: 20 }}
        datetime={<div>{comment.data && comment.data}</div>}
        content={comment.text}
        author={comment.username}
      />
    )}
  />
);
export default CommentList;
