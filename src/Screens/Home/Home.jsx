import React from "react";
import "./Home.sass";
import { ChatWrapper } from "../../Components/ChatWrapper";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../../Store/Auth/selectors";

export const Home = () => {
  const { displayName } = useSelector(currentUserSelector);
  return (
    <div className={"Container"}>
      <ChatWrapper />
      <div className={"Home"}>
        <div className={"Home-header"}>Welcome {displayName}!</div>
        <div className={"Home-info"}>
          <p>Please select chat to start messaging</p>
        </div>
      </div>
    </div>
  );
};
