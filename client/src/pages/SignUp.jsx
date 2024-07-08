import React, { useState } from "react";
import { BASE_URL } from "../utils/BASE_URL";
import toast from "react-hot-toast";
toast;

const Form = () => {
  const [registrationPayload, setRegistrationPayload] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });
  const handelSubmit = () => {
    fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationPayload),
    })
      .then((res) => res.json())
      .then((res) => {
        res.success ? toast.success(res.msg) : toast.error(res.msg);
      });
  };
  return (
    <div className="flex flex-col gap-10 justify-center  items-center  h-full w-[40%] ">
      <h1 className="text-3xl font-medium flex justify-center w-full">
        Register
      </h1>
      <div className="flex flex-col items-center justify-between w-full">
        <input
          value={registrationPayload.name}
          onChange={(e) =>
            setRegistrationPayload({
              ...registrationPayload,
              name: e.target.value,
            })
          }
          className="w-[80%] px-4 outline-none  bg-[#E0E0E0] h-8 rounded-xl"
          placeholder="Enter name"
          type="text"
        />{" "}
        <br />
        <input
          value={registrationPayload.email}
          onChange={(e) =>
            setRegistrationPayload({
              ...registrationPayload,
              email: e.target.value,
            })
          }
          className="w-[80%] px-4 outline-none bg-[#E0E0E0] h-8 rounded-xl"
          placeholder="Enter email"
          type="email"
        />{" "}
        <br />
        <div className="w-[80%] flex justify-start items-start ">
          <select
            className="border-[1px] border-solid border-black rounded-3xl outline-none  text-xl font-thin"
            value={registrationPayload.gender}
            onChange={(e) =>
              setRegistrationPayload({
                ...registrationPayload,
                gender: e.target.value,
              })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>{" "}
        <br />
        <input
          value={registrationPayload.password}
          onChange={(e) =>
            setRegistrationPayload({
              ...registrationPayload,
              password: e.target.value,
            })
          }
          className="w-[80%] px-4 outline-none bg-[#E0E0E0] h-8 rounded-xl"
          placeholder="Enter password"
          type="password"
        />{" "}
        <br />
        <input
          value={registrationPayload.number}
          onChange={(e) =>
            setRegistrationPayload({
              ...registrationPayload,
              number: e.target.value,
            })
          }
          className="w-[80%] px-4 outline-none bg-[#E0E0E0] h-8 rounded-xl"
          placeholder="Enter Contact number"
          type="text"
        />
      </div>
      <button
        onClick={handelSubmit}
        className="text-[#F4F9FA] text-xl px-10 py-2 rounded-2xl bg-[#4796BD]"
      >
        Register
      </button>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="h-[90vh] bg-[#F3F9FB] flex items-center justify-center">
      <div className="flex items-center bg-[rgb(255,255,254)] w-[70%] h-[60%] ">
        <img className="w-[60%] " src="/LoginMain.png" alt="" />
        <Form />
      </div>
    </div>
  );
};

export default SignUp;
