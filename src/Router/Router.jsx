import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";

const INIT_CHATS = { id1: { name: "chat 1" } };

export const Router = () => {
  const [chatList] = useState(INIT_CHATS);
  return (
      <div className={'Container'}>
          <div className={"Chat-wrapper"}>
          <div className={"Chat-left-header"}>

            <Avatar/>

            <Paper component="div" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', boxShadow: 'none', borderRadius: '0', borderBottom: '1px solid #dfe1e5' }}>
              <SearchIcon sx={{color: '#a2a5a8', paddingLeft: '10px'}} />
              <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Chats"
                  inputProps={{ 'aria-label': 'search chats' }}
                  onChange={(e) => setValue(e.target.value)}
              />
            </Paper>

          </div>

          <List component="nav" aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Список чатов
                  </ListSubheader>
                }>
            {filteredChats.map(({name, id, avatar}) => (
                <ListItemButton key={id} sx={{
                  gap: '10px'
                }}>
                  <Avatar alt={name} src={avatar} />
                  <ListItemText primary={name} />
                </ListItemButton>
            ))}
          </List>
        </div>
          <Switch>
              <Route exact path={ROUTES.HOME} render={() => <Home />} />
              <Route exact path={ROUTES.CHAT} render={() => <Home />} />
          </Switch>
      </div>
    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to={ROUTES.HOME}>Home</Link>
    //     </li>
    //     <li>
    //       <Link to={ROUTES.CHAT}>Chats</Link>
    //     </li>
    //     <li>
    //       <Link to={ROUTES.PROFILE}>Profile</Link>
    //     </li>
    //   </ul>
    //
    //   <Switch>
    //     <Route exact path={ROUTES.CHATS}>
    //       <Chats chatList={chatList} />
    //     </Route>
    //     <Route exact path={ROUTES.PROFILE} component={Profile} />
    //     <Route exact path={ROUTES.HOME} render={() => <Home />} />
    //     <Route exact path={ROUTES.NO_CHAT}>
    //       no chat content
    //     </Route>
    //     <Route path={ROUTES.NOT_FOUND}>Not found 404</Route>
    //     <Route>
    //       <Redirect to={ROUTES.NOT_FOUND} />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  );
};
