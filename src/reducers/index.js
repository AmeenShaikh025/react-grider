import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./usersReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});
