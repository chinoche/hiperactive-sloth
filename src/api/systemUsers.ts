import {createAsyncThunk} from "@reduxjs/toolkit";
import { useQuery} from "react-query";
import {User} from "../models/User";

const BASE_URL = "http://localhost:8005/api";
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await fetch(`${BASE_URL}/systemusers`);
    const users = await response.json();
    return users;
});

export const fetchUser = createAsyncThunk("user/fetch", async (id:string) => {
    const response = await fetch(`${BASE_URL}/systemusers/${id}`);
    const user: User = await response.json();
    return user;
})

const fetchUserQuery = async (id: string): Promise<User> => {
    const response = await fetch(`${BASE_URL}/systemusers/${id}`);
    const data:User = await response.json();
    return data;
};


export const addUser = createAsyncThunk(
    "users/add",
    async (user: Omit<User, "id">) => {
        const response = await fetch(`${BASE_URL}/systemusers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const addedUser = await response.json();
        return addedUser;
    }
);

export const editUser = createAsyncThunk('users/edit', async (user: User) => {
    const response = await fetch(`${BASE_URL}/systemusers/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
    const updatedUser: User = await response.json();
    return updatedUser;
})

export const deleteUser = createAsyncThunk(
    "users/delete",
    async (id: string) => {
        await fetch(`${BASE_URL}/systemusers/${id}`, {
            method: "DELETE",
        });
        return id;
    }
);

export const useFetchUserQuery = (id: string) => {
    return useQuery(['id', id], () => fetchUserQuery(id));
};