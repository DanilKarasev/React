import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageAction } from "../../Store/Messages/actions";
import "./AddMessage.sass";
import { currentUserSelector } from "../../Store/Auth/selectors";

export const AddMessage = ({ chatId }) => {
  const dispatch = useDispatch();
  const messageAuthor = useSelector(currentUserSelector).displayName;
  const messageAuthorId = useSelector(currentUserSelector).uid;

  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    const fakeMessageId = Date.now();
    dispatch(
      addMessageAction({
        chatId,
        messageAuthor,
        messageAuthorId,
        message,
        fakeMessageId,
      })
    );
    setMessage("");
  };

  return (
    <div className={"Add-message"}>
      <form onSubmit={addMessage}>
        <input
          value={message}
          onChange={handleMessage}
          placeholder={"Message"}
          type="text"
          autoFocus={true}
        />{" "}
        <button disabled={!message} type={"submit"} />
      </form>
    </div>
  );
};
