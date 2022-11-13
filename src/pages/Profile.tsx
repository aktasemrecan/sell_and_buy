import LoadingSpinner from "../components/LoadingSpinner";
import ProfileAdverts from "../components/ProfileAdverts";
import ProfileInfo from "../components/ProfileInfo";
import { useSelector } from "react-redux";

export default function Profile() {
  const authReducer = useSelector((state: any) => state.authReducer);

  return (
    <div className="w-full">
      {authReducer ? <div className="flex w-[90%] mx-auto">
        <div className="w-[40%]">{<ProfileInfo />}</div>
        <div className="w-[90%]">{<ProfileAdverts />}</div>
      </div> : <LoadingSpinner />}
    </div>
  );
}
