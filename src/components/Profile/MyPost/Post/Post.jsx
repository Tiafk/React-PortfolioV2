
function Post(props) {
  return (
    <div className="post">
      <div className="post_container">
        <div className="avatar">
          <img src="https://i.pinimg.com/736x/9a/0d/eb/9a0debd592a5b15b9b979d53bfb0e019.jpg" alt="#" />
        </div>
        <p className="post_text">{props.message}</p>
      </div>
      <div className="like_container">
        <span className="like">Like</span>
        <p className="counter_like">{props.like}</p>
      </div>
    </div>
  );
};

export default Post;