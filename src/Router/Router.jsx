import React from "react";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Chats } from "../Screens/Chats";
import { ChatWrapper } from "../Components/ChatWrapper";
import { Dictionary } from "../Screens/Dictionary";
import "./Router.sass";

export const Router = () => {
  return (
    <BrowserRouter>
      <div className={"Container"}>
        <ChatWrapper />
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <Home />} />
          <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
          <Route path={ROUTES.CHATS} render={() => <Chats />} />
          <Route path={ROUTES.DICTIONARY} render={() => <Dictionary />} />
          <Route>
            <Redirect to={ROUTES.HOME} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
