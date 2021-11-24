import React, {useEffect, useRef, useState} from "react";
import "./MessageList.sass"
import faker from 'faker'
import Avatar from "@mui/material/Avatar";

export const MessageList = ({currentChat}) => {
    const [messageList, setMessageList] = useState([]);

    let inputRef = useRef(null);

    useEffect(() => {
        if (messageList.length) {
            if (messageList[messageList.length - 1].author === 'ME') {
                inputRef.current = setTimeout(() => {
                    let newDate = new Date();
                    setMessageList([...messageList, {message: faker.lorem.sentence(), author: faker.name.findName(), id:faker.datatype.uuid(), time: newDate.toTimeString().split(' ')[0].slice(0, -3)}]);
                }, 1500);
                return () => clearInterval(inputRef.current);
            }
        }
    }, [messageList, messageList.length]);

    const [message, setMessage] = useState('');
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const addMessage = (e) => {
        e.preventDefault();
        let newDate = new Date();
        setMessageList([...messageList, {message, author: 'ME', id:faker.datatype.uuid(), time: newDate.toTimeString().split(' ')[0].slice(0, -3)}]);
        setMessage('')
    }

    return (
        <div className={"Chat"}>
            <div className="Chat-header"> <Avatar alt={ currentChat.name } src={ currentChat.avatar }/> <h4>{ currentChat.name }</h4> </div>
            <div className={"Chat-body"}>
                {messageList.map(({message, author, id, time}) => (
                    <div key={id} className={(author === 'ME') ? "Message Message-me" : "Message"}>
                        <h4>{author}</h4>
                        <div className={"Message-box"}>
                            <div className={"Message-text"}>{message}</div>
                            <div className={"Message-time"}>{time}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"Chat-footer"}>
                <form onSubmit={addMessage}>
                    <input ref={inputRef} value={message} onChange={handleMessage} placeholder={"Message"} type="text" required autoFocus={true}/> <button type={"submit"}/>
                </form>
            </div>
        </div>
    )
}