import { USER, REMOVE, EDIT } from "../action";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

export const users = (state = initialState, { payload, type }) => {
  let newStateUser;
  switch (type) {
    case USER:
      newStateUser = state = [...state, payload];
      localStorage.setItem("users", JSON.stringify(newStateUser));
      return newStateUser;
    case REMOVE:
      newStateUser = state.filter((user) => user.id !== payload.id);
      return newStateUser;
    case EDIT:
      newStateUser = state.map((el) => (el.id === payload.id ? payload : el));
      localStorage.setItem("users", JSON.stringify(newStateUser));
      return newStateUser;
    default:
      return state;
  }
};
