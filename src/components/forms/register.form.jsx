import React, { useState } from "react";
import { register } from "../../api/auth.api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    c_password: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const { c_password, ...rest } = formData;

      const response = await register(rest);
      if (response && response.data) {
        toast.success(response.message || "Account created");
        // navigate to login
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="mt-10 ">
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        {/* first name */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="first_name">
            First Name
          </label>
          {/* input */}
          <input
            onChange={onChange}
            name="first_name"
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            id="first_name"
            type="text"
            placeholder="John"
            required
          />
        </div>

        {/* last  name */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="last_name">
            Last Name
          </label>
          {/* input */}
          <input
            onChange={onChange}
            name="last_name"
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            id="last_name"
            type="text"
            placeholder="Doe"
            required
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="email">
            Email
          </label>
          {/* input */}
          <input
            onChange={onChange}
            name="email"
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
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
            onChange={onChange}
            name="password"
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            id="password"
            type="password"
            placeholder="enter password"
            required
          />
        </div>

        {/*retype  password */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="c_password">
            Re-type Password
          </label>
          {/* input */}
          <input
            onChange={onChange}
            name="c_password"
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            id="c_password"
            type="password"
            placeholder="retype password"
            required
          />
        </div>

        {/* submit button */}
        <div className="w-full mt-4">
          <button
            className="w-full bg-blue-600 py-3.5 text-white font-bold rounded-sm cursor-pointer"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
