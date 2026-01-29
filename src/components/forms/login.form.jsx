import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState(""); //email

  // hook state , sideeffet , memoization
  // useState()
  // useEffect()

  const onEmailChange = (e) => {
    console.log("email changed", e.target.value);
    setEmail(e.target.value);
  };

  console.log('state',email);

  return (
    <div className="mt-10 ">
      <form className="flex flex-col gap-3">
        {/* email */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="email">
            Email
          </label>
          {/* input */}
          <input
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            onChange={onEmailChange}
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            required
          />
        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="password">
            Password
          </label>
          {/* input */}
          <input
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            id="password"
            type="password"
            placeholder="enter password"
            required
          />
        </div>

        {/* submit button */}
        <div className="w-full mt-4">
          <button
            className="w-full bg-blue-600 py-3.5 text-white font-bold rounded-sm cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
