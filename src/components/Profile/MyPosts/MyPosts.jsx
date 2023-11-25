import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"

const MyPosts = () => {

   return (
        <div className= { s.postsBlock }>
          <h3>My posts</h3>
          <div className= { s.item }>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
          <div className = { s.posts }>
            <Post message='Hi, how are you?' count='0'/>
            <Post message='Its my first post' count='23'/>
          </div>
        </div>
   )
}

export default MyPosts;