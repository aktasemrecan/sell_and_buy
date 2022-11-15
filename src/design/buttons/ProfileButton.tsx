import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

export default function ProfileButton() {
  const navigate = useNavigate();
  const authReducer = useSelector((state: any) => state.authReducer);

  const onClick = () => {
    navigate("/profile");
  };

  return (
    <button className="text-xl text-orange-500 flex items-center" onClick={onClick}>{authReducer.displayName}<span className="text-3xl ml-2"><CgProfile color="rgb(249 115 22 / var(--tw-text-opacity))" /></span></button>
  )
}
