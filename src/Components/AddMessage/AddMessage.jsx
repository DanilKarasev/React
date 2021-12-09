import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessageAction } from "../../Store/Messages/actions";
import "./AddMessage.sass";

export const AddMessage = ({ chatId, messageAuthor }) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const addMessage = (e) => {
    e.preventDefault();
    dispatch(addMessageAction({ chatId, messageAuthor, message }));
    setMessage("");
  };

  // useEffect(() => {
  //   if (
  //     messageList[chatId]?.length &&
  //     messageList[chatId][messageList[chatId].length - 1].author ===
  //       messageAuthor
  //   ) {
  //     inputRef.current = setTimeout(() => {
  //       dispatch(
  //         addMessageAction({
  //           chatId,
  //           messageAuthor: faker.name.findName(),
  //           message: faker.lorem.sentence(),
  //         })
  //       );
  //     }, 1500);
  //     return () => clearTimeout(inputRef.current);
  //   }
  // }, [messageList]);

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
