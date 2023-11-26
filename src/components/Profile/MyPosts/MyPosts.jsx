import s from "./MyPosts.module.css"
import Post from "./Post/MyPost"

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'Hi, how are you?', likeCount: 0},
    {id: 2, message: 'Its my first pos', likeCount: 23}
  ];

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
            <Post message={postsData[0].message} count={postsData[0].likeCount}/>
            <Post message={postsData[1].message} count={postsData[1].likeCount}/>
          </div>
        </div>
   )
}

export default MyPosts;