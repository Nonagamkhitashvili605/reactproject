import Greeting from "../assets/Greeting";

const Profile = ({ isAdmin }) => {
  if (!isAdmin) return <Greeting n="nona" />;

  return (
    <div>
      <p> adminia</p>
    </div>
  );
};

export default Profile;
