import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"

const MyPosts = () => {

   return (
        <div className= {s.item}>
          My posts
          <div className= {s.item}>New post</div>
          <div className = {s.posts}>
            <Post message='Hi, how are you?' count='15'/>
            <Post message='Its my first post' count='20'/>
          </div>
        </div>
   )
}

export default MyPosts;