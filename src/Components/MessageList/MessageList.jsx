import "./MessageList.sass";

export const MessageList = ({ messageList }) => {
  return (
    <div className={"Chat-body"}>
      {messageList.map(({ message, author, id, time }) => (
        <div
          key={id}
          className={author === "ME" ? "Message Message-me" : "Message"}
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
