import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UsersHome from "./components/UsersHome";
import { Provider } from "react-redux";
import store from "./store";
import UserForm from "./components/UserForm";
import EditUserForm from "./components/EditUser";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

/**
 * Main App component
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">
                <h1> Welcome to Hyperactive Sloth CRUD Example</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/" element={<UsersHome />} />
              <Route path="/add" element={<UserForm  />} />
              <Route path="/edit/:id" element={<EditUserForm  />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
export default App;
