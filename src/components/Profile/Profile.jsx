import MyPosts from "./MyPost/MyPosts";

function Profile() {
  return (
    <div className="profile_container">
      <div className="profile_wrapper">
        <div className="profile_back">
          <img src="https://phonoteka.org/uploads/posts/2021-05/1621824608_25-phonoteka_org-p-kosmicheskii-fon-dlya-saita-25.jpg" />
        </div>
        <div className="profile">
          <div className="profile__photo">
            <img src="https://sun9-29.userapi.com/impg/iYELjAew1VRcUBDaXKqJ0i5aF219unhSQnqs_Q/6p7Of6TAyqw.jpg?size=720x1280&quality=95&sign=24473c33dcf34d18b1b766a408f49974&type=album" />
          </div>
          <div className="person">
            <p className="person_name">Ruslan A.</p>
            <div className="person_other">
              <p className="other">Data of Birth: 17 august</p>
              <p className="other">City: SPb</p>
              <p className="other">Education: Internet</p>
              <p className="other">Web site:</p>
            </div>
          </div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;