export const USER = "USER";
export const REMOVE = "REMOVE";
export const EDIT = "EDIT";

export const AddUser = (payload) => {
  return {
    type: USER,
    payload,
  };
};
export const removeUser = (payload) => {
  return {
    type: REMOVE,
    payload,
  };
};
export const editUser = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
