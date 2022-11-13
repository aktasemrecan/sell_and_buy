import { auth } from "../firebase";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOutAction } from "../redux/actions";
import ProfileText from "../design/ProfileText";
import DefaultGreenButton from "../design/buttons/DefaultGreenButton";
import { FaSignOutAlt } from "react-icons/fa";

export default function ProfileInfo() {

  const authReducer = useSelector((state: any) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    photoURL: "",
    uid: ""
  });

  const { name, email, photoURL } = profileData;

  const onSignOutClick = async () => {
    await auth.signOut().then(() => {
      dispatch(signOutAction());
      navigate("/");
    });
  };

  useEffect(() => {
    if (authReducer) {
      setProfileData({
        name: authReducer.displayName,
        email: authReducer.email,
        photoURL: authReducer.photoURL,
        uid: authReducer.uid
      });

    }
  }, [auth.currentUser]);

    const profileDiv = () => {
        return <div style={{ "backgroundColor": "#3F475F" }} className="mx-auto  rounded-xl  py-8 px-10 shadow-lg">
          <div className="w-full "><img className="w-24 h-24 mx-auto" src={photoURL} alt={name} /></div>
          <div><ProfileText text={name} secondText="Name" /></div>
          <div><ProfileText text={email} secondText="Email" /></div>
          <div className="flex mx-auto justify-center space-x-7">
            <DefaultGreenButton extraClass="mt-3 px-2 py-2" onClick={() => navigate("/add-product")} text="New Advert" />
            <button onClick={onSignOutClick} className="flex  mt-3 text-xl items-center px-2 py-2 bg-white text-red-500 border-red-500 hover:text-red-800 rounded-xl shadow-lg border-2 "><span className="mx-2"><FaSignOutAlt /></span> Sign Out</button></div>
        </div>;
      };

  return (
    <div>{profileData&& profileDiv()}</div>
  )
}
