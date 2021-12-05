import "./MessageList.sass";
import { useEffect, useRef } from "react";

export const MessageList = ({ chatId, messageAuthor, messageList }) => {
  const messageBox = useRef(null);

  useEffect(() => {
    if (messageList[chatId]) {
      messageBox.current.scrollIntoView();
    }
  }, [messageList]);

  return (
    <div className={"Chat-body"}>
      {messageList[chatId]?.map(({ message, author, id, time }) => (
        <div
          key={id}
          className={
            author === messageAuthor ? "Message Message-me" : "Message"
          }
          ref={messageBox}
        >
          <h4>{author}</h4>
          <div className={"Message-box"}>
            <div className={"Message-text"}>{message}</div>
            <div className={"Message-time"}>{time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
