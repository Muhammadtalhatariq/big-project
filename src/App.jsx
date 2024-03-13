import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

const App = () => {
  const [loading, setLoading ] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCuttentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading (false));
  }, []);

  return !loading ? (
    <div className=" bg-gray-400 min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
