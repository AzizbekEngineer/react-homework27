import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../context/action";
import "./editUser.scss";

const initialState = {
  id: 0,
  name: "",
  age: "",
  profession: "",
  gender: "",
};

function EditUser({ data, setClose }) {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id, name, profession, age, gender } = data;
    setForm({ id, name, profession, age, gender });
  }, [data]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(editUser(form));
    setClose(null);
  };

  return (
    <div className="edit">
      <div onClick={() => setClose(null)} className="edit__overlay"></div>
      <div className="edit__user">
        <form onSubmit={handleEditUser} className="edit__user-form" action="">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            name="profession"
            value={form.profession}
            onChange={handleChange}
            type="text"
            placeholder="Profession"
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            type="number"
            placeholder="Age"
          />
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button className="edit__user__save" type="submit">
            Save
          </button>
          <button type="button" onClick={() => setClose(null)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
