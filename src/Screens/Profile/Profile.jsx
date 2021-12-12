import "./Profile.sass";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

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

  return (
    <div className={"Profile"}>
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
            {profileName ? (
              <FadeIn>Welcome {profileName}!</FadeIn>
            ) : (
              <FadeIn>Please register first</FadeIn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
