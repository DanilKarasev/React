import "./MessageList.sass";
import { useDispatch, useSelector } from "react-redux";
import { messageListSelector } from "../../Store/Messages/selectors";
import { useSpring, animated } from "react-spring";
import { currentUserSelector } from "../../Store/Auth/selectors";
import { useEffect, useRef } from "react";
import { getMessagesAction } from "../../Store/Messages/actions";

export const MessageList = ({ chatId }) => {
  const { displayName } = useSelector(currentUserSelector);
  const messageList = useSelector(messageListSelector);
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messageList[chatId]) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageList]);

  useEffect(() => {
    dispatch(getMessagesAction());
  }, [dispatch]);

  const animationStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  if (!messageList[chatId]) {
    return (
      <div className={"Home-info"}>
        <p>No messages here yet...</p>
      </div>
    );
  } else
    return (
      <animated.div style={animationStyle} className={"Chat-body"}>
        {Object.values(messageList[chatId]).map(
          ({ message, author, id, time }) => (
            <div
              key={id}
              className={
                author === displayName ? "Message Message-me" : "Message"
              }
              ref={scrollRef}
            >
              <h4>{author}</h4>
              <div className={"Message-box"}>
                <div className={"Message-text"}>{message}</div>
                <div className={"Message-time"}>{time.slice(0, -3)}</div>
              </div>
            </div>
          )
        )}
      </animated.div>
    );
};
