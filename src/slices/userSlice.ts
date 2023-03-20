// Slices

import {createSlice} from "@reduxjs/toolkit";
import {
    addUser,
    deleteUser,
    editUser,
    fetchUser,
    fetchUsers
} from "../api/systemUsers";
import {RootState} from "../store";

const initialState: RootState["users"] = {
    list: [],
    user: null,
    loading: false,
    totalCount: 0,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.list = action.payload.results;
                state.totalCount = action.payload.totalCount;
                state.error = null;
                state.status = 'succeeded'
                state.loading = false;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to create user';
            })
            .addCase(editUser.fulfilled, (state, action) => {
                const userAt = state.list.findIndex(
                    (user) => user.id === action.payload.id
                );
                state.list[userAt] = action.payload;
            })
            .addCase(editUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to create user';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.list = state.list.filter((user) => user.id !== action.payload);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to create user';
            });
    },
});

export default userSlice