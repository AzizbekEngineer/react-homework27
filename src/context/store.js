import { legacy_createStore, combineReducers } from "redux";
import { users } from "./redusers/users";

const reducers = combineReducers({
  users,
});

export const store = legacy_createStore(reducers);
