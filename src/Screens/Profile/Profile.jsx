import "./Profile.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProfileNameAction,
  toggleProfileInfoAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { Switch, Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

export const Profile = () => {
  const dispatch = useDispatch();
  const { registerMessage, showProfileInfo, profileName } =
    useSelector(profileSelector);

  const [inputProfileName, setInputProfileName] = useState("");

  const handleProfileName = (e) => {
    setInputProfileName(e.target.value);
  };

  const handleToggleShowProfileInfo = () => {
    dispatch(toggleProfileInfoAction());
  };

  const handleProfileNameChange = (e) => {
    e.preventDefault();
    dispatch(
      changeProfileNameAction({
        profileName: inputProfileName,
      })
    );
  };

  return (
    <div className={"Profile"}>
      <div className={"Profile-header"}>{profileName}</div>
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
          <form className={"Profile-form"} onSubmit={handleProfileNameChange}>
            <TextField
              value={inputProfileName}
              onChange={handleProfileName}
              id="outlined-basic"
              label="Your name"
              variant="outlined"
            />
            <Button type={"submit"} disabled={!inputProfileName}>
              Register
            </Button>
          </form>
        </FormGroup>

        <div className={"Profile-info"}>
          <div
            className={
              showProfileInfo
                ? "Profile-info-content"
                : "Profile-info-content__hidden"
            }
          >
            {profileName ? (
              <FadeIn>Welcome {profileName}!</FadeIn>
            ) : (
              <FadeIn>{registerMessage}</FadeIn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
