import s from "./Profile.module.css"

const Profile = () => {
   return (
      <div className={s.content}>
        <div>
          <img src="https://img.freepik.com/premium-photo/sunny-beach-in-paradise-with-white-sand-coconut-palms-and-a-blue-water-concept-of-summertime-fun-and-relaxation-on-a-tropical-beach_410516-19004.jpg"></img>
        </div>
        <div className= {s.item}>
          ava + descriotion
        </div>
        <div className= {`${s.item} ${s.active}`}>
          My posts
          <div className= {s.item}>New post</div>
          <div className = {s.posts}>
            <div className= {s.item}>post 1</div>
            <div className= {s.item}>post 2</div>
          </div>
        </div>
      </div>
   )
}

export default Profile;