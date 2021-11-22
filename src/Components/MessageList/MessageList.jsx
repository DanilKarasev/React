import React, {useEffect, useRef, useState} from "react";
import "./MessageList.sass"
import faker from 'faker'

export const MessageList = () => {
    const [messageList, setMessageList] = useState([]);

    let inputRef = useRef(null);

    useEffect(() => {
        clearInterval(inputRef.current);
        if (messageList.length) {
            if (messageList[messageList.length - 1].author === 'ME') {
                inputRef.current = setTimeout(() => {
                    setMessageList([...messageList, {message: faker.lorem.sentence(), author: faker.name.findName(), id:faker.datatype.uuid()}]);
                }, 1500);
                return () => clearInterval(inputRef.current);
            }
        }
    }, [messageList, messageList.length]);

    let [message, setMessage] = useState('');
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const addMessage = (e) => {
        e.preventDefault();
        setMessageList([...messageList, {message, author: 'ME', id:faker.datatype.uuid()}]);
        setMessage('')
    }

    console.log(messageList)

    return (
        <div className={"Chat"}>
            <div className={"Chat-body"}>
                {messageList.map(({message, author, id}) => (
                    <div key={id} className={(author === 'ME') ? "Message Message-me" : "Message"}><h4>{author}</h4> <p>{message}</p></div>
                ))}
            </div>
            <div className={"Chat-footer"}>
                <form action="submit" onSubmit={addMessage}>
                    <input ref={inputRef} value={message} onChange={handleMessage} placeholder={"Message"} type="text" required/> <button type={"submit"}/>
                </form>
            </div>
        </div>
    )
}