import { configureStore } from "@reduxjs/toolkit";
import { User } from "./models/User";
import userSlice from "./slices/userSlice";

// STore

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;

export type RootState = {
  users: {
    list: User[];
    user: User | null;
    loading: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    totalCount: number;
  };
};
export type AppDispatch = typeof store.dispatch;
