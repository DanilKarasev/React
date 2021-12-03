import { createStore } from "@reduxjs/toolkit";
import { profileReducer } from "../Screens/Profile/reducer";

export const store = createStore(profileReducer);
