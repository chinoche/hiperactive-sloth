import { User } from "../models/User";
import { AppDispatch } from "../store";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {addUser} from "../api/systemUsers";
import React from "react";

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleAddUser = async (user: Omit<User, "id">) => {
    dispatch(addUser(user));
    navigate("/");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    const formData = new FormData(e.target);
    const userRequest = {
      firstname: formData.get("firstname") ?? "",
      middlename: formData.get("middlename") ?? "",
      lastname: formData.get("lastname") ?? "",
      username: formData.get("username") ?? "",
      email: formData.get("email") ?? "",
      displayname: formData.get("displayname") ?? "",
    };
    // @ts-ignore
    handleAddUser(userRequest);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="firstname" className="block">
            Name:
          </label>
          <input
            type="text"
            placeholder="Name"
            id="firstname"
            name="firstname"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="middlename" className="block">
            Middle Name:
          </label>
          <input
            type="text"
            placeholder="Middle Name"
            id="middlename"
            name="middlename"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="block">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastname"
            name="lastname"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="username" className="block">
            User Name:
          </label>
          <input
              type="text"
              required
              placeholder="User Name"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Company email:
          </label>
          <input
            type="email"
            required
            placeholder="Email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="displayname" className="block">
            Display Name:
          </label>
          <input
              type="text"
              placeholder="LastNam3e"
              id="displayname"
              name="displayname"
              className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>
      <button
          type="button"
          className="w-full bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
      >
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
