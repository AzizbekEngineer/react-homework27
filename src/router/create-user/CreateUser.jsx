import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../../context/action";

const initialState = {
  id: 0,
  name: "",
  age: "",
  profession: "",
  gender: "",
};

function CreateUser() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    (form.id = new Date().getTime()), console.log(form);
    dispatch(AddUser(form));
    setForm(initialState);
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleCreate} className="create__user-form" action="">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          name="profession"
          value={form.profession}
          onChange={handleChange}
          type="text"
          placeholder="profession"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          type="number"
          placeholder="age"
        />
        <select name="gender" value={form.gender} onChange={handleChange} id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default CreateUser;
