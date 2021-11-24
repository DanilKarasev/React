import React from "react";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import react_js from "./images/chatAvatars/react_js.jpg";
import gb_js from "./images/chatAvatars/gb-js.jpg";
import {BrowserRouter , Link , Redirect , Route , Switch } from "react-router-dom";
import "./Router.sass"
import {Chats} from "../Screens/Chats";
import {ChatList} from "../Components/ChatList";

const chats = [
    {name: 'React JS', avatar: react_js},
    {name: 'GB_JS', avatar: gb_js},
];

export const Router = () => {
    const [chatsList] = useState (chats);

    const [search , setSearch] = useState ('');

    const filteredChats = chatsList.filter (chat => {
        return chat.name.toLowerCase ().includes (search.toLowerCase ())
    });

    return (
        <BrowserRouter>
            <div className={ 'Container' }>
                <div className={ "Chat-wrapper" }>
                    <div className={ "Chat-left-header" }>

                        <Link to={ ROUTES.PROFILE }><Avatar /></Link>

                        <Paper component="div" sx={ {
                            p : '2px 4px' ,
                            display : 'flex' ,
                            alignItems : 'center' ,
                            boxShadow : 'none' ,
                            borderRadius : '0' ,
                            borderBottom : '1px solid #dfe1e5'
                        } }>
                            <SearchIcon sx={ { color : '#a2a5a8' , paddingLeft : '10px' } }/>
                            <InputBase
                                sx={ { ml : 1 , flex : 1 } }
                                placeholder="Search Chats"
                                inputProps={ { 'aria-label' : 'search chats' } }
                                onChange={ ( e ) => setSearch ( e.target.value ) }
                            />
                        </Paper>
                    </div>

                    <ChatList filteredChats={filteredChats} />
                </div>

                <Switch>
                    <Route exact path={ ROUTES.HOME } render={ () => <Home/> }/>
                    <Route exact path={ ROUTES.PROFILE } render={ () => <Profile/> }/>
                    <Route path={ ROUTES.CHATS }>
                        <Chats chatList = {chatsList} />
                    </Route>
                    <Route>
                        <Redirect to={ROUTES.HOME} />
                    </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
};
