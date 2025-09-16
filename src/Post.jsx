const Post = ({ userId, id, title, body }) => {
  return (
    <div>
      <p> {userId}</p>
      <p> {id}</p>
      <p> {title}</p>
      <p> {body}</p>
    </div>
  );
};

export default Post;
