import React from "react";
import { useState } from "react";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import react_js from "./images/chatAvatars/react_js.jpg";
import gb_js from "./images/chatAvatars/gb-js.jpg";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./Router.sass";
import { Chats } from "../Screens/Chats";
import { ChatList } from "../Components/ChatList";
import { AddChat } from "../Components/AddChat";
import { SearchChats } from "../Components/SearchChats";

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

  return (
    <BrowserRouter>
      <div className={"Container"}>
        <div className={"Chat-wrapper"}>
          <SearchChats setSearch={setSearch} />
          <ChatList filteredChats={filteredChats} />
          <AddChat chatList={chatList} setChatList={setChatList} />
        </div>

        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <Home />} />
          <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
          <Route
            path={ROUTES.CHATS}
            render={() => <Chats chatList={chatList} />}
          />
          <Route>
            <Redirect to={ROUTES.HOME} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
