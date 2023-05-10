import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./Redux/action/usersAction";

import "./App.css";
import Users from "./components/Users";

function App() {
  const dispatch = useDispatch();
  const userLists = useSelector((state) => state.userLists);
  const { loading, users, error } = userLists;

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  return (
    <>
      <h1>Redux Thunk </h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Users users={users} />
      )}
    </>
  );
}

export default App;
