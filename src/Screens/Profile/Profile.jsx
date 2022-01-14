import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { ChatWrapper } from "../../Components/ChatWrapper";
import { logout } from "../../Store/Auth/actions";
import { currentUserSelector } from "../../Store/Auth/selectors";
import Avatar from "@mui/material/Avatar";
import { ProfileInfo } from "../../Components/ProfileInfo";
import stringToColor from "../../Utilities/StringToColor";
import "./Profile.sass";

export const Profile = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector(currentUserSelector);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={"Container"}>
      <ChatWrapper />
      <div className={"Profile"}>
        <div className={"Profile-header"}>
          <p>Profile settings</p>
          <Button onClick={handleLogout} color={"error"}>
            LOGOUT
          </Button>
        </div>
        <div className={"Profile-main"}>
          <div className={"Profile-info"}>
            <div className={"Profile-info-content"}>
              <ProfileInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
