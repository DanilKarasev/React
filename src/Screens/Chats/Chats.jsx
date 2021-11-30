import { MessageList } from "../../Components/MessageList";
import { Redirect, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Chats = ({ chatList, messageList, setMessageList }) => {
  const { chatName } = useParams();

  let currentChat = chatList.filter((chat) => chat.name === chatName);

  currentChat = currentChat[0];

  if (currentChat) {
    return (
      <>
        <MessageList
          currentChat={currentChat}
          messageList={currentChat.messages}
          setMessageList={setMessageList}
        />
      </>
    );
  }

  return <Redirect to={ROUTES.HOME} />;
};
