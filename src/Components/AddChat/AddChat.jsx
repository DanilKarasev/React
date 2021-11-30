import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import faker from "faker";

export const AddChat = ({ chatList, setChatList }) => {
  const [newChatName, setNewChatName] = useState("");

  let handleChange = (event) => {
    setNewChatName(event.target.value);
  };

  const addChat = () => {
    let allChatNames = [];

    chatList.forEach((el) => {
      allChatNames.push(Object.values(el)[0]);
    }); // создаем массив со всеми существующими именами чатов

    const checkChatName = (arr, val) => {
      return arr.some((arrVal) => val === arrVal);
    }; // функция проверяющая совпадение нового имени чата с существующими

    if (checkChatName(allChatNames, newChatName)) {
      alert("Введите уникальное имя чата!");
    } else if (newChatName.length === 0) {
      alert("Имя чата не может быть пустым!");
    } else {
      setChatList([
        ...chatList,
        {
          name: newChatName,
          avatar: "",
          messages: [
            {
              message: "Welcome to " + newChatName + " chat!",
              author: "Welcome bot",
              id: faker.datatype.uuid(),
              time: new Date().toTimeString().split(" ")[0].slice(0, -3),
            },
          ],
        },
      ]);
      setNewChatName("");
    }
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
      <AddIcon onClick={addChat} />
    </div>
  );
};
