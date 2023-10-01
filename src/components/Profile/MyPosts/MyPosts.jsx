import s from "./MyPosts.module.css"
import MyPost from "./Post/MyPost"

const MyPosts = () => {
   return (
        <div className= {s.item}>
          My posts
          <div className= {s.item}>New post</div>
          <div className = {s.posts}>
            <MyPost/>
            <MyPost/>
            <MyPost/>
            <MyPost/>
          </div>
        </div>
   )
}

export default MyPosts;