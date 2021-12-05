import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import "./AddChat.sass";
import { addChatAction } from "../../Store/Chats/actions";
import faker from "faker";
import { addMessageAction } from "../../Store/Messages/actions";

export const AddChat = ({ dispatch }) => {
  const [newChatName, setNewChatName] = useState("");

  const handleChange = (event) => {
    setNewChatName(event.target.value);
  };

  const addChat = () => {
    const newChatId = faker.datatype.uuid();
    dispatch(
      addChatAction({ newChatName, newChatId }),
      addMessageAction({
        newChatId,
        messageAuthor: "Welcome Bot",
        message: `Welcome to ${newChatName} chat!`,
      })
    );
    dispatch(
      addMessageAction({
        chatId: newChatId,
        messageAuthor: "Welcome Bot",
        message: `Welcome to ${newChatName} chat!`,
      })
    );
    setNewChatName("");
  };

  return (
    <div className={"Chat-left-footer"}>
      <Paper
        component="div"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          boxShadow: "none",
          borderRadius: "0",
          borderBottom: "1px solid #dfe1e5",
        }}
      >
        <InputBase
          onChange={handleChange}
          value={newChatName}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type chat name to add a new chat"
          inputProps={{ "aria-label": "Add chats" }}
        />
      </Paper>
      <button
        className={"AddChat-btn"}
        disabled={!newChatName}
        onClick={addChat}
      >
        +
      </button>
    </div>
  );
};
