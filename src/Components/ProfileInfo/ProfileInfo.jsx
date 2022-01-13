import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { currentUserSelector } from "../../Store/Auth/selectors";
import "./ProfileInfo.sass";
import { useSpring, animated } from "react-spring";

export const ProfileInfo = () => {
  const { displayName } = useSelector(currentUserSelector);

  const [profileInfoChanged, setProfileInfoChanged] = useState(false);
  const [userName, setUserName] = useState(displayName);

  const handleChangeUserName = (event) => {
    setUserName(event.target.value.replace(/\s+/g, " "));
  };
  useEffect(() => {
    if (userName !== displayName) {
      setProfileInfoChanged(true);
    } else {
      setProfileInfoChanged(false);
    }
  }, [userName]);

  const buttonAnimation = useSpring({
    opacity: profileInfoChanged ? 1 : 0,
    marginTop: profileInfoChanged ? 0 : 150,
  });

  return (
    <>
      <div className={"Profile-inputs"}>
        <TextField
          id="outlined-input"
          label="User name"
          value={userName}
          onChange={handleChangeUserName}
        />
        <TextField
          id="outlined-input"
          label="Phone number"
          defaultValue="Hello World"
        />
        <TextField id="outlined-input" label="Bio" defaultValue="Hello World" />
      </div>
      <animated.div style={buttonAnimation}>
        <Button sx={{ mt: 4 }}>Apply changes</Button>
      </animated.div>
    </>
  );
};
