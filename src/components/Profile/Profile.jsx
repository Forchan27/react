import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://img.freepik.com/premium-photo/sunny-beach-in-paradise-with-white-sand-coconut-palms-and-a-blue-water-concept-of-summertime-fun-and-relaxation-on-a-tropical-beach_410516-19004.jpg"></img>
      </div>
      <div className={s.item}>ava + descriotion</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
