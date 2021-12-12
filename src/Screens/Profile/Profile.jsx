import "./Profile.sass";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Profile = () => {
  const dispatch = useDispatch();
  const { profileName } = useSelector(profileSelector);

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

  const animationStyle = useSpring({
    to: { marginLeft: 0 },
    from: { marginLeft: 700 },
  });

  return (
    <animated.div style={animationStyle} className={"Profile"}>
      <div className={"Profile-header"}>
        {profileName ? `Welcome ${profileName}!` : "Please register"}
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
        </FormGroup>

        <div className={"Profile-info"}>
          <div className={"Profile-info-content"}>
            {profileName ? `Welcome ${profileName}!` : "Please register first"}
          </div>
        </div>
      </div>
    </animated.div>
  );
};
