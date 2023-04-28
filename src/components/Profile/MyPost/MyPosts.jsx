import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className="container_posts">
      <textarea className="text"></textarea>
      <button className="post_btn">Add post</button>
      <Post message='Hi how are u?' like='20'/>
      <Post message="It's my first posts." like='15'/>
    </div>
  );
};

export default MyPosts;