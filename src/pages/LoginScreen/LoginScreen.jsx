import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import users from "../../users";

export const LoginScreen = ({ setIsLoggedIn, isLoggedIn }) => {
  let history = useHistory();

  const [formValues, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formValues;
    const user = users.find((user) => user.username === username);
    const pass = users.find((user) => user.password === password);
    if (!user || !pass) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "User or password are incorrect",
      });
    }

    if (user && pass) {
      localStorage.setItem("accessToken", "token");
      Swal.fire("Entering", "", "success");
      setIsLoggedIn(true);
      history.push("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          placeholder="Username"
          autoComplete="off"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
        />
        <input
          placeholder="Password"
          autoComplete="off"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
