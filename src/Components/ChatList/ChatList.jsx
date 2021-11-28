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

export const ChatList = ({ filteredChats }) => {
  const location = useLocation();

  let currentChatName = location.pathname.split("/");
  currentChatName = currentChatName[currentChatName.length - 1];

  return (
    <div className={"Chat-content"}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {" "}
            Список чатов{" "}
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
              <DeleteIcon className={"Delete-icon"} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
};
