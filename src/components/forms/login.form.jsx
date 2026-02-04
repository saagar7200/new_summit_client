import React, { useState } from "react";
import { login } from "../../api/auth.api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      const response = await login(formData);
      // success
      if (response.data && response.access_token) {
        localStorage.setItem("access_token", response.access_token);
        toast.success(response.message || "Login Success");

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="mt-10 ">
      <form onSubmit={onFormSubmit} className="flex flex-col gap-3">
        {/* email */}
        <div className="flex flex-col gap-1">
          {/* label */}
          <label className="text-[16px] font-semibold" htmlFor="email">
            Email
          </label>
          {/* input */}
          <input
            className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            value={formData.email}
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
            onChange={handleChange}
            value={formData.password}
            id="password"
            type="password"
            name="password"
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
