import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../context/action";
import EditUser from "../editUser/EditUser";

function Users() {
  const [editUser, setEditUser] = useState(null);
  let userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(userData);
  let userItem = userData
    ?.map((el) => (
      <div key={el?.id} className="users__card">
        <img src={male} alt="" />
        <h2>{el?.name}</h2>
        <p>{el?.profession}</p>
        <p>{el?.age}</p>
        <div className="users__btns">
          <button onClick={() => dispatch(removeUser(el))}>Remove</button>
          <button onClick={() => setEditUser(el)}>Edit</button>
        </div>
      </div>
    ))
    .reverse();
  return (
    <div className="users__wrapper">
      {userItem}{" "}
      {editUser ? <EditUser data={editUser} setClose={setEditUser} /> : <></>}
    </div>
  );
}

export default Users;
