import React from "react";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./Router.sass";
import { Chats } from "../Screens/Chats";
import { ChatList } from "../Components/ChatList";
import { AddChat } from "../Components/AddChat";

export const Router = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenAddChatModal = () => setOpen(true);
  const handleCloseAddChatModal = () => setOpen(false);

  return (
    <BrowserRouter>
      <div className={"Container"}>
        <div className={"Chat-wrapper"}>
          <ChatList />
          <button
            onClick={handleOpenAddChatModal}
            className={"Add-chat-open-modal"}
          >
            +
          </button>
          <AddChat open={open} close={handleCloseAddChatModal} />
        </div>

        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <Home />} />
          <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
          <Route path={ROUTES.CHATS} render={() => <Chats />} />
          <Route>
            <Redirect to={ROUTES.HOME} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
