import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import react_js from './images/chatAvatars/react_js.jpg'
import gb_js from './images/chatAvatars/gb-js.jpg'
import faker from 'faker'
import {useState} from "react";

const chats = [
    {name: 'React JS', id: faker.datatype.uuid(), avatar: react_js},
    {name: 'GB_JS', id: faker.datatype.uuid(), avatar: gb_js},
];

export const ChatsList = () => {
    const [chatsList] = useState(chats);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Список чатов
                </ListSubheader>
            }>
            {chatsList.map(({name, id, avatar}) => (
                <ListItemButton key={id} sx={{
                    gap: '10px'
                }}>
                    <Avatar alt={name} src={avatar} />
                    <ListItemText primary={name} />
                </ListItemButton>
            ))}
        </List>
    );
}

export default ChatsList;