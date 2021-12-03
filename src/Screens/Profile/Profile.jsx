import "./Profile.sass";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileInfoAction } from "../../Store/Profile/actions";
import { profileSelector } from "./selectors";
import { Switch } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Profile = () => {
  const dispatch = useDispatch();
  const { profileInfo, showProfileInfo } = useSelector(profileSelector);

  const handleToggleShowProfileInfo = () => {
    dispatch(toggleProfileInfoAction());
  };

  return (
    <div className={"Profile"}>
      <div className={"Profile-header"}>Profile name</div>
      <div className={"Profile-main"}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                color={"warning"}
                checked={showProfileInfo}
                onChange={handleToggleShowProfileInfo}
              />
            }
            label="Show profile info"
          />
        </FormGroup>
        <div className={"Profile-info"}>
          <div
            className={
              showProfileInfo
                ? "Profile-info-content"
                : "Profile-info-content__hidden"
            }
          >
            {showProfileInfo && profileInfo}
          </div>
        </div>
      </div>
    </div>
  );
};
