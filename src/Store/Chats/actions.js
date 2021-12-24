import {
  ADD_CHAT_ACTION,
  UPDATE_CHAT_ACTION,
  DELETE_CHAT_ACTION,
  GET_CHATS_ACTION,
} from "./constants";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const deleteChatAction = (payload) => ({
  type: DELETE_CHAT_ACTION,
  payload,
});

export const getChatsAction = () => ({
  type: GET_CHATS_ACTION,
});

export const updateChatAction = (payload) => ({
  type: UPDATE_CHAT_ACTION,
  payload,
});
