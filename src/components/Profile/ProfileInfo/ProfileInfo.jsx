import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://img.freepik.com/premium-photo/sunny-beach-in-paradise-with-white-sand-coconut-palms-and-a-blue-water-concept-of-summertime-fun-and-relaxation-on-a-tropical-beach_410516-19004.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + descriotion
      </div>
    </div>
  );
};

export default ProfileInfo;
