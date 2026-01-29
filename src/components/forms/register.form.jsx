import React from 'react'

const RegisterForm = () => {
  return (
       <div className="mt-10 ">
          <form className="flex flex-col gap-3">
            {/* first name */}
            <div className="flex flex-col gap-1">
              {/* label */}
              <label className="text-[16px] font-semibold" htmlFor="first_name">
                First Name
              </label>
              {/* input */}
              <input
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
  )
}

export default RegisterForm