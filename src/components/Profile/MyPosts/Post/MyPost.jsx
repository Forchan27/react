import s from "./MyPost.module.css";

const MyPost = () => {
  return (
    <div className={s.item}>
      <img src="https://png.pngtree.com/png-clipart/20211121/original/pngtree-funny-avatar-vector-icons-png-png-image_6948004.png"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default MyPost;
