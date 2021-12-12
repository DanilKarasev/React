import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";
import react_js from "../../images/chatAvatars/react_js.jpg";
import gb_js from "../../images/chatAvatars/gb-js.jpg";

const initialState = {
  id1: {
    id: "id1",
    name: "React JS",
    avatar: react_js,
  },
  id2: {
    id: "id2",
    name: "GB_JS",
    avatar: gb_js,
  },
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        [action.payload.newChatId]: {
          id: action.payload.newChatId,
          name: action.payload.newChatName,
          avatar: "",
        },
      };
    }
    case DELETE_CHAT_ACTION: {
      const { id } = action.payload;
      const { [id]: chatToDelete, ...restChats } = state;
      return restChats;
    }
    default:
      return state;
  }
};
