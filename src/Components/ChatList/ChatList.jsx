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

  let currentChatName = location.pathname.split("/");
  currentChatName = currentChatName[currentChatName.length - 1]; //Имя текущего чата в виде строки

  const removeChat = (name) => {
    const index = chatList.findIndex((el) => el.name === name);
    chatList.splice(index, 1);
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
        {filteredChats.map(({ name, avatar }) => (
          <Link key={name} to={ROUTES.CHAT + name}>
            <ListItemButton
              selected={name === currentChatName}
              sx={{ gap: "10px" }}
            >
              <Avatar alt={name} src={avatar}>
                {name[0]}
              </Avatar>
              <ListItemText primary={name} />
              <DeleteIcon
                onClick={() => removeChat(name)}
                className={"Delete-icon"}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
};
