import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import "./Dictionary.sass";
import { DictionaryContent } from "../../Components/DictionaryContent";
import { useDispatch } from "react-redux";
import { fetchWordData } from "../../Store/Dictionary/actions";

export const Dictionary = () => {
  const animationStyle = useSpring({
    to: { marginLeft: 0 },
    from: { marginLeft: 700 },
  });

  const dispatch = useDispatch();

  const [inputWord, setInputWord] = useState("");
  const handleWord = (e) => {
    setInputWord(e.target.value);
  };

  const handleWordData = (e) => {
    e.preventDefault();
    setInputWord("");
    dispatch(fetchWordData({ inputWord }));
  };

  return (
    <animated.div style={animationStyle} className={"Profile"}>
      <div className={"Profile-header"}>Dictionary</div>
      <div className={"Profile-main"}>
        <FormGroup>
          <form className={"Profile-form"} onSubmit={handleWordData}>
            <TextField
              value={inputWord}
              onChange={handleWord}
              id="outlined-basic"
              label="Type any word in russian"
              variant="outlined"
            />
            <Button type={"submit"} disabled={!inputWord}>
              Check word
            </Button>
          </form>
        </FormGroup>

        <div className={"Profile-info"}>
          <div className={"Profile-info-content"}>
            <DictionaryContent />
          </div>
        </div>
      </div>
    </animated.div>
  );
};
