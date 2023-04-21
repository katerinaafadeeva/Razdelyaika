import { combineReducers } from "redux";
import packReducer from "./packReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";


const rootReducer = combineReducers({
  pack: packReducer,
  auth: authReducer,
  users: usersReducer,

});

export default rootReducer;
