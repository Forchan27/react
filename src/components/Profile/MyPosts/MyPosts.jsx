import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 0},
    {id: 2, message: 'Its my first pos', likeCount: 23}
  ];
  let postsElements = posts.map(p => <Post message={p.message} count={p.likeCount}/>)

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
            {postsElements}
          </div>
        </div>
   )
}

export default MyPosts;