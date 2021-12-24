import "./Profile.sass";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileNameAction } from "../../Store/Profile/actions";
import { Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { ChatWrapper } from "../../Components/ChatWrapper";
import { standardAnimation } from "../../Components/Animations/animations";
import { logout } from "../../Store/Auth/actions";
import { currentUserSelector } from "../../Store/Auth/selectors";

export const Profile = () => {
  const animation = useSpring(standardAnimation);
  const dispatch = useDispatch();
  const { displayName } = useSelector(currentUserSelector);

  const [inputProfileName, setInputProfileName] = useState("");

  const handleProfileName = (e) => {
    setInputProfileName(e.target.value);
  };

  const handleProfileNameChange = (e) => {
    e.preventDefault();
    dispatch(
      changeProfileNameAction({
        profileName: inputProfileName,
      })
    );
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={"Container"}>
      <ChatWrapper />
      <animated.div style={animation} className={"Profile"}>
        <div className={"Profile-header"}>
          {displayName ? `Welcome ${displayName}!` : "Please register"}
        </div>
        <div className={"Profile-main"}>
          <FormGroup>
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
            <Button onClick={handleLogout} color={"error"}>
              LOGOUT
            </Button>
          </FormGroup>

          <div className={"Profile-info"}>
            <div className={"Profile-info-content"}>
              {displayName
                ? `Welcome ${displayName}!`
                : "Please register first"}
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};
