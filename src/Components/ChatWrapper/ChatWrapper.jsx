import React, { useState } from "react";
import { ChatList } from "../ChatList";
import { AddChat } from "../AddChat";
import "./ChatWrapper.sass";
import { ROUTES } from "../../Router/constants";
import { Link } from "react-router-dom";

export const ChatWrapper = () => {
  const [open, setOpen] = useState(false);
  const handleOpenAddChatModal = () => setOpen(true);
  const handleCloseAddChatModal = () => setOpen(false);

  return (
    <div className={"Chat-wrapper"}>
      <ChatList />
      <Link to={ROUTES.DICTIONARY}>
        <button className={"Dictionary-link"}>D</button>
      </Link>
      <button
        onClick={handleOpenAddChatModal}
        className={"Add-chat-open-modal"}
      >
        +
      </button>
      <AddChat open={open} close={handleCloseAddChatModal} />
    </div>
  );
};
