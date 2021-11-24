import ListSubheader from "@mui/material/ListSubheader";
import { Link , useLocation } from "react-router-dom";
import { ROUTES } from "../../Router/constants";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";


export const ChatList = ( { filteredChats } ) => {
    const location = useLocation ();

    let currentChatName = location.pathname.split ( '/' );
    currentChatName = currentChatName[ currentChatName.length - 1 ]

    return (
        <List component="nav" aria-labelledby="nested-list-subheader"
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader"> Список чатов </ListSubheader>
              }>
            { filteredChats.map ( ( { name , avatar } ) => (
                <Link key={ name } to={ ROUTES.CHAT + name }>
                    <ListItemButton selected={ name === currentChatName } sx={ { gap : '10px' } }>
                        <Avatar alt={ name } src={ avatar }/>
                        <ListItemText primary={ name }/>
                    </ListItemButton>
                </Link>
            ) ) }
        </List>
    );
}