import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AuthLayout, Login } from "./components/index.js";

import Signup from "./Pages/Signup.jsx";
import Post from "./Pages/post.jsx";
import AllPost from "./Pages/AllPost.jsx";
import AddPost from "./Pages/AddPost.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/Signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-post",
        element: (
          <AuthLayout authentication>
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
