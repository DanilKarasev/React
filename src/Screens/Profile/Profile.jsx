import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { ChatWrapper } from "../../Components/ChatWrapper";
import { logout } from "../../Store/Auth/actions";
import { currentUserSelector } from "../../Store/Auth/selectors";
import "./Profile.sass";
import Avatar from "@mui/material/Avatar";
import { ProfileInfo } from "../../Components/ProfileInfo";

export const Profile = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector(currentUserSelector);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  function stringToColor(string) {
    //просто копипаст функция, отвечающая за цвет аватара
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    if (name.includes(" ")) {
      return {
        sx: {
          bgcolor: stringToColor(name),
          width: "100%",
          height: "100%",
          fontSize: "6.5rem",
        },
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    }
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: "100%",
        height: "100%",
        fontSize: "6.5rem",
      },
      children: `${name[0]}`,
    };
  }

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
              <div className={"Profile-avatar"}>
                <Avatar {...stringAvatar(displayName)} />
              </div>
              <ProfileInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
