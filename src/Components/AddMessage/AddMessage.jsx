import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageAction } from "../../Store/Messages/actions";
import "./AddMessage.sass";
import { currentUserSelector } from "../../Store/Auth/selectors";
import faker from "faker";

export const AddMessage = ({ chatId }) => {
  const dispatch = useDispatch();
  const messageAuthor = useSelector(currentUserSelector).displayName;

  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    const fakeMessageId = faker.datatype.uuid();
    dispatch(
      addMessageAction({ chatId, messageAuthor, message, fakeMessageId })
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
