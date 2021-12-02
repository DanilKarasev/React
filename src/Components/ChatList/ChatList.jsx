import ListSubheader from "@mui/material/ListSubheader";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import "./ChatList.sass";

export const ChatList = ({ filteredChats, chatList, setChatList }) => {
  const location = useLocation();

  let currentChatId = location.pathname.split("/");
  currentChatId = currentChatId[currentChatId.length - 1]; //Имя текущего чата в виде строки

  const removeChat = (id) => {
    // const index = chatList.findIndex((el) => el.name === name);
    // chatList.splice(index, 1);
    chatList = chatList.filter((el) => el.id !== id);
    setChatList([...chatList]);
  };

  return (
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
  );
};
