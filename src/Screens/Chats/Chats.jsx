import { Redirect, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import { useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { MessageList } from "../../Components/MessageList";
import { AddMessage } from "../../Components/AddMessage";
import Avatar from "@mui/material/Avatar";
import "./Chats.sass";
import { ChatWrapper } from "../../Components/ChatWrapper";

export const Chats = () => {
  const { chatId } = useParams();

  const chatList = Object.values(useSelector(chatListSelector));
  const currentChat = chatList.find((chat) => chat.id === chatId);

  if (!currentChat) {
    return <Redirect to={ROUTES.HOME} />;
  }
  return (
    <div className={"Container"}>
      <ChatWrapper />
      <div className={"Chat"}>
        <div className="Chat-header">
          <Avatar alt={currentChat.name} src={currentChat.avatar} />
          <h4>{currentChat.name}</h4>{" "}
        </div>
        <MessageList chatId={chatId} />
        <AddMessage chatId={chatId} />
      </div>
    </div>
  );
};
