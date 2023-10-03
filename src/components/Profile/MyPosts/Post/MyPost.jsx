import s from "./MyPost.module.css";

const Post = (props) => {

  return (
    <div className={ s.item }>
      <img src="https://png.pngtree.com/png-clipart/20211121/original/pngtree-funny-avatar-vector-icons-png-png-image_6948004.png"></img>
      { props.message }
      <div>
        <span>like { props.count }</span>
      </div>
    </div>
  );
};

export default Post;
