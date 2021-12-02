import react_js from "./images/chatAvatars/react_js.jpg";
import faker from "faker";
import gb_js from "./images/chatAvatars/gb-js.jpg";

export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats/:chatId",
  CHAT: "/chats/",
};

export const CHATS = [
  {
    id: "id-1",
    name: "React JS",
    avatar: react_js,
    messages: [
      {
        message: "Welcome to React JS chat!",
        author: "Welcome bot",
        id: faker.datatype.uuid(),
        time: new Date().toTimeString().split(" ")[0].slice(0, -3),
      },
    ],
  },
  {
    id: "id-2",
    name: "GB_JS",
    avatar: gb_js,
    messages: [
      {
        message: "Welcome to GB_JS chat!",
        author: "Welcome bot",
        id: faker.datatype.uuid(),
        time: new Date().toTimeString().split(" ")[0].slice(0, -3),
      },
    ],
  },
];
