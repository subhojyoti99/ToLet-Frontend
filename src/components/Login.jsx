import React, { useState } from "react";
// import styled from "styled-components";
import axios from "axios";
import HomeImg from "../img/rent1.png";
import "./authform.css";
import { Link, useNavigate } from "react-router-dom";

// const ErrorMessage = styled.div`
//   font-family: "Playfair Display", serif;
//   text-align: right;
//   color: red;
//   font-size: 0.8rem;
//   // margin-top: 0.5rem;
//   float: right;
// `;

export const Login = () => {
  const navigate = useNavigate();
  //   const [userRole, setUserRole] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    validateLogin(name, value);
  };

  const validateLogin = (fieldName, value) => {
    let errorLoginMessage = "";
    switch (fieldName) {
      case "email":
        if (
          !value.match(/^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/)
        ) {
          errorLoginMessage = "Invalid email address";
        }
        break;
      case "password":
        if (value.length < 5) {
          errorLoginMessage = "At least 6 characters";
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [fieldName]: errorLoginMessage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Object.keys(credentials).forEach((fieldName) => {
        validateLogin(fieldName, credentials[fieldName]);
      });
      if (Object.values(errors).every((error) => error === "")) {
        const res = await axios.post(
          "http://localhost:8080/auth/login",
          credentials,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response:", res);

        // Assuming you want to store the JWT token in localStorage
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("username", res.data.user.name);
        localStorage.setItem("role", res.data.user.role);
        // setUserRole(res.data.user.role);

        // const lib = localStorage.getItem("library");
        // Redirect or handle successful login here
        if (res.data.user.role === "admin") {
          window.location.href = `/room/register`;
        } else {
          window.location.href = "/#";
        }
      }
    } catch (err) {
      console.error("Error:", err);
      setErrorMsg(err?.response?.data?.error);
      console.log(errorMsg);
    }
  };

  function register() {
    navigate("/auth/register");
  }
  return (
    <>
      <div className="bg-gradient-to-b from-white to-red-200 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:w-1/2">
              <img src={HomeImg} alt="shipping-box" className="w-3/4" />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="w-80 mx-auto rounded-lg shadow-md p-8">
                <h1 className="text-center">Login</h1>
                <hr className="bg-gray-400 mb-6" />
                <form
                  onSubmit={handleSubmit}
                  id="loginForm"
                  className="transform translate-x-0 transition-transform duration-1000 text-black"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                  {/* <ErrorMessage>{errors.email}</ErrorMessage> */}
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full h-10 bg-[#FF9933] text-white font-bold py-2 rounded-lg hover:bg-[#FF7722]"
                  >
                    Login
                  </button>
                  <Link
                    href="#"
                    className="text-xs text-blue-500 block mt-2 text-right"
                  >
                    Forgot password
                  </Link>
                  <span className="mr-4 font-bold text-gray-400">
                    New customer?{" "}
                    <button
                      className="text-gray-600"
                      onClick={() => register()}
                    >
                      Register
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
