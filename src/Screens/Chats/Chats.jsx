import { AddMessage } from "../../Components/AddMessage";
import { Redirect, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Chats = ({ chatList, setChatList, filteredChats }) => {
  const { chatId } = useParams();
  const currentChat = chatList.find((chat) => chat.id === chatId);

  if (!currentChat) {
    return <Redirect to={ROUTES.HOME} />;
  }
  return (
    <>
      <AddMessage
        filteredChats={filteredChats}
        chatList={chatList}
        updateChatList={setChatList}
        currentChat={currentChat}
      />
    </>
  );
};
