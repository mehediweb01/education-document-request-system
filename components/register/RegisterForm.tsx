"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../ui/button";

const RegisterForm = () => {
  const [showPassword, setShowPassword]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("From submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/5 px-7 py-8 rounded-md shadow-md shadow-black/30"
    >
      <div className="mb-4">
        <h1 className="text-center font-bold font-montserrat text-base sm:text-xl md:text-2xl tracking-[1px] border-b border-dashed border-sky-400 rounded-sm pb-2">
          Register
        </h1>
      </div>
      <div className="space-y-3">
        {/* name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="input" required />
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input" required />
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <div className="flex justify-center items-center gap-2 w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="input relative pe-8"
              required
            />
            <div className="absolute right-14">
              {showPassword ? (
                <Button
                  onClick={() => setShowPassword(false)}
                  variant="ghost"
                  className="hover:cursor-pointer"
                >
                  <FiEye className="w-12 h-12" />
                </Button>
              ) : (
                <Button
                  onClick={() => setShowPassword(true)}
                  variant="ghost"
                  className="hover:cursor-pointer"
                >
                  <FiEyeOff className="w-12 h-12" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* confirm password */}
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            className="input"
            required
          />
        </div>

        {/* gender */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" className="input" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* role */}
        <div>
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            disabled
            required
            className="input disabled:cursor-not-allowed disabled:bg-gray-200"
          >
            <option value={"student"}>STUDENT</option>
          </select>
        </div>

        {/* submit button */}
        <div className="flex justify-center ">
          <Button
            type="submit"
            className="bg-sky-400 hover:bg-sky-600 text-white transition-all duration-300 hover:cursor-pointer w-1/2 text-base sm:text-xl"
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
