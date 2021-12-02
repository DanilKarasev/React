import React, { useEffect, useRef, useState } from "react";
import "./AddMessage.sass";
import faker from "faker";
import Avatar from "@mui/material/Avatar";
import { MessageList } from "../MessageList/MessageList";

export const AddMessage = ({ chatList, updateChatList, currentChat }) => {
  let inputRef = useRef(null);

  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      message,
      author: "ME",
      id: faker.datatype.uuid(),
      time: new Date().toTimeString().split(" ")[0].slice(0, -3),
    };

    updateChatList(
      chatList.map((chat) =>
        chat.id === currentChat.id
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );
    setMessage("");
  };

  useEffect(() => {
    const newBotMessage = {
      message: faker.lorem.sentence(),
      author: faker.name.findName(),
      id: faker.datatype.uuid(),
      time: new Date().toTimeString().split(" ")[0].slice(0, -3),
    };

    if (currentChat.messages[currentChat.messages.length - 1].author === "ME") {
      inputRef.current = setTimeout(() => {
        updateChatList(
          chatList.map((chat) =>
            chat.id === currentChat.id
              ? { ...chat, messages: [...chat.messages, newBotMessage] }
              : chat
          )
        );
      }, 1500);
      return () => clearTimeout(inputRef.current);
    }
  }, [currentChat, chatList, updateChatList]);

  return (
    <div className={"Chat"}>
      <div className="Chat-header">
        <Avatar alt={currentChat.name} src={currentChat.avatar} />
        <h4>{currentChat.name}</h4>{" "}
      </div>
      <MessageList messageList={currentChat.messages} />
      <div className={"Chat-footer"}>
        <form onSubmit={addMessage}>
          <input
            ref={inputRef}
            value={message}
            onChange={handleMessage}
            placeholder={"Message"}
            type="text"
            autoFocus={true}
          />{" "}
          <button disabled={!message} type={"submit"} />
        </form>
      </div>
    </div>
  );
};
