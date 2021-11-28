import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import react_js from "./images/chatAvatars/react_js.jpg";
import gb_js from "./images/chatAvatars/gb-js.jpg";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import "./Router.sass";
import { Chats } from "../Screens/Chats";
import { ChatList } from "../Components/ChatList";

const CHATS = [
  { name: "React JS", avatar: react_js },
  { name: "GB_JS", avatar: gb_js },
];

export const Router = () => {
  const [chatList, setChatList] = useState(CHATS);

  const [search, setSearch] = useState("");

  const filteredChats = chatList.filter((chat) => {
    return chat.name.toLowerCase().includes(search.toLowerCase());
  });

  const [newChatName, setNewChatName] = useState("");

  let handleChange = (event) => {
    setNewChatName(event.target.value);
  };

  const addChat = () => {
    let allChatNames = [];

    chatList.forEach((el) => {
      allChatNames.push(Object.values(el)[0]);
    });

    const checkChatName = (arr, val) => {
      return arr.some((arrVal) => val === arrVal);
    };

    if (checkChatName(allChatNames, newChatName)) {
      alert("Введите уникальное имя чата!");
    } else if (newChatName.length === 0) {
      alert("Имя чата не может быть пустым!");
    } else {
      let newChat = { name: newChatName, avatar: "" };
      chatList.push(newChat);
      setChatList([...chatList]);
      setNewChatName("");
    }
  };

  return (
    <BrowserRouter>
      <div className={"Container"}>
        <div className={"Chat-wrapper"}>
          <div className={"Chat-left-header"}>
            <Link to={ROUTES.PROFILE}>
              <Avatar sx={{ bgcolor: "#3390ec" }} />
            </Link>

            <Paper
              component="div"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "1px solid #dfe1e5",
              }}
            >
              <SearchIcon sx={{ color: "#a2a5a8", paddingLeft: "10px" }} />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Chats"
                inputProps={{ "aria-label": "search chats" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Paper>
          </div>

          <ChatList filteredChats={filteredChats} />

          <div className={"Chat-left-footer"}>
            <Paper
              component="div"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "1px solid #dfe1e5",
              }}
            >
              <InputBase
                onChange={handleChange}
                value={newChatName}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type chat name to add a new chat"
                inputProps={{ "aria-label": "Add chats" }}
              />
            </Paper>
            <AddIcon onClick={addChat}>CLICK</AddIcon>
          </div>
        </div>

        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <Home />} />
          <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
          <Route path={ROUTES.CHATS}>
            <Chats chatList={chatList} />
          </Route>
          <Route>
            <Redirect to={ROUTES.HOME} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
