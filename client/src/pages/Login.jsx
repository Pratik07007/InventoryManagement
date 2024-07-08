import React, { useState } from "react";
import { BASE_URL } from "../utils/BASE_URL";
import toast from "react-hot-toast";

const Form = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const handelLogin = () => {
    fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginPayload),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        resp.success ? toast.success(resp.msg) : toast.error(resp.msg);
      });
  };
  return (
    <div className="flex flex-col justify-around items-center  h-[53%] w-[40%] ">
      <h1 className="text-3xl font-medium flex justify-center w-full">Login</h1>
      <div className="flex flex-col items-center gap-1 w-full">
        <input
          value={loginPayload.email}
          onChange={(e) =>
            setLoginPayload({ ...loginPayload, email: e.target.value })
          }
          className="w-[80%] px-4 outline-none  bg-[#E0E0E0] h-8 rounded-xl"
          placeholder="Enter email"
          type="email"
        />{" "}
        <br />
        <input
          value={loginPayload.password}
          onChange={(e) =>
            setLoginPayload({ ...loginPayload, password: e.target.value })
          }
          className="w-[80%] px-4 outline-none bg-[#E0E0E0] h-8 rounded-xl"
          placeholder="Enter password"
          type="password"
        />
      </div>
      <button
        onClick={handelLogin}
        className="text-[#F4F9FA] text-xl px-10 py-2 rounded-2xl bg-[#4796BD]"
      >
        Login
      </button>
      <div>
        new user? <span className=" underline">Register?</span>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="h-[90vh] bg-[#F3F9FB] flex items-center justify-center">
      <div className="flex items-center bg-[rgb(255,255,254)] w-[70%] h-[60%] ">
        <img className="w-[60%] " src="/LoginMain.png" alt="" />
        <Form />
      </div>
    </div>
  );
};

export default Login;
