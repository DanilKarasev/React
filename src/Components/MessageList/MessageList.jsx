import "./MessageList.sass";
import { useSelector } from "react-redux";
import { messageListSelector } from "../../Store/Messages/selectors";
import { useSpring, animated } from "react-spring";

export const MessageList = ({ chatId, messageAuthor }) => {
  const messageList = useSelector(messageListSelector);
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={props} className={"Chat-body"}>
      {messageList[chatId]?.map(({ message, author, id, time }) => (
        <div
          key={id}
          className={
            author === messageAuthor ? "Message Message-me" : "Message"
          }
        >
          <h4>{author}</h4>
          <div className={"Message-box"}>
            <div className={"Message-text"}>{message}</div>
            <div className={"Message-time"}>{time}</div>
          </div>
        </div>
      ))}
    </animated.div>
  );
};
