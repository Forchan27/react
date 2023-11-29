import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"

const MyPosts = (props) => {

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
          {props.posts.map(p => <Post message={p.message} count={p.likeCount}/>)}
          </div>
        </div>
   )
}

export default MyPosts;