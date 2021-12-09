import ListSubheader from "@mui/material/ListSubheader";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import "./ChatList.sass";
import { useDispatch, useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { SearchChats } from "../SearchChats";
import { AddChat } from "../AddChat";
import { deleteChatAction } from "../../Store/Chats/actions";
import { deleteMessageListAction } from "../../Store/Messages/actions";

export const ChatList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const chatList = Object.values(useSelector(chatListSelector));

  const [search, setSearch] = useState("");
  const filteredChats = chatList.filter((chat) => {
    return chat.name.toLowerCase().includes(search.toLowerCase());
  });

  let currentChatId = location.pathname.split("/");
  currentChatId = currentChatId[currentChatId.length - 1]; //Имя текущего чата в виде строки

  const removeChat = (id) => {
    dispatch(deleteChatAction({ id }));
    dispatch(deleteMessageListAction({ id }));
  };

  return (
    <>
      <SearchChats setSearch={setSearch} />
      <div className={"Chat-content"}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Список чатов
            </ListSubheader>
          }
        >
          {filteredChats.map(({ id, name, avatar }) => (
            <Link key={id} to={ROUTES.CHAT + id}>
              <ListItemButton
                selected={id === currentChatId}
                sx={{ gap: "10px" }}
              >
                <Avatar alt={name} src={avatar}>
                  {name[0]}
                </Avatar>
                <ListItemText primary={name} />
                <DeleteIcon
                  onClick={() => removeChat(id)}
                  className={"Delete-icon"}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </div>
      <AddChat dispatch={dispatch} />
    </>
  );
};
