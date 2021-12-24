import {
  ADD_MESSAGE_ACTION,
  DELETE_CHAT_MESSAGES_ACTION,
  UPDATE_MESSAGES_ACTION,
} from "./constants";

const initialState = {
  messageList: {
    // id1: [
    //   {
    //     message: "Welcome to React JS chat!",
    //     author: "Welcome bot",
    //     id: faker.datatype.uuid(),
    //     time: new Date().toTimeString().split(" ")[0].slice(0, -3),
    //   },
    // ],
    // id2: [
    //   {
    //     message: "Welcome to GB_JS chat!",
    //     author: "Welcome bot",
    //     id: faker.datatype.uuid(),
    //     time: new Date().toTimeString().split(" ")[0].slice(0, -3),
    //   },
    // ],
  },
};

export const messageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId } = action.payload;
      const chatMessages = state.messageList[chatId] ?? [];

      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [
            ...chatMessages,
            {
              message: action.payload.message,
              author: action.payload.messageAuthor,
              id: action.payload.fakeMessageId,
              time: new Date().toTimeString().split(" ")[0].slice(0, -3),
            },
          ],
        },
      };
    }

    case DELETE_CHAT_MESSAGES_ACTION: {
      const { id } = action.payload;
      const { [id]: chatMessagesToDelete, ...restChatMessages } =
        state.messageList;
      return { ...state, messageList: { ...restChatMessages } };
    }
    case UPDATE_MESSAGES_ACTION: {
      return {
        ...state,
        messageList: action.payload.messages,
      };
    }
    default:
      return state;
  }
};
