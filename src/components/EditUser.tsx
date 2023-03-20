import React from "react";
import { User } from "../models/User";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import {editUser, useFetchUserQuery} from "../api/systemUsers";

const EditUserForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {data: user, isLoading } = useFetchUserQuery(id);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      const formDataReq = new FormData(e.currentTarget);
      const updatedUser: User = {
        ...user,
        firstname: formDataReq.get("firstname") as string,
        middlename: formDataReq.get("middlename") as string,
        lastname: formDataReq.get("lastname") as string,
        username: formDataReq.get("username") as string,
        email: formDataReq.get("email") as string,
        displayname: formDataReq.get("displayname") as string,
      };
      dispatch(editUser(updatedUser));
      navigate("/");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : (
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
                defaultValue={user?.firstname}
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
                defaultValue={user?.middlename}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                name="lastname"
                defaultValue={user?.lastname}
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
                defaultValue={user?.username}
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
                defaultValue={user?.email}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="displayname" className="block">
                Display Name:
              </label>
              <input
                type="text"
                placeholder="Display Name"
                id="displayname"
                name="displayname"
                defaultValue={user?.displayname}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit User
          </button>
          <button
              type="button"
              className="w-full bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default EditUserForm;
