import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import react_js from './images/chatAvatars/react_js.jpg';
import gb_js from './images/chatAvatars/gb-js.jpg';
import {useState} from "react";
import "./ChatsList.sass";

const chats = [
    {name: 'React JS', id: 1, avatar: react_js},
    {name: 'GB_JS', id: 2, avatar: gb_js},
];

export const ChatsList = () => {

    const [chatsList] = useState(chats);

    const [value, setValue] = useState('');

    const filteredChats = chatsList.filter(chat => {
        return chat.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={"Chat-wrapper"}>
            <div className={"Chat-left-header"}>
                <Avatar/>
                <Paper
                    component="div"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', boxShadow: 'none', borderRadius: '0', borderBottom: '1px solid #dfe1e5' }}
                >
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
    );
}

export default ChatsList;