"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../ui/button";

const LoginForm = () => {
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
          Login
        </h1>
      </div>
      <div className="space-y-3">
        {/* email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="demo@gmail.com"
            required
          />
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <div className="flex justify-center items-center gap-2 w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="input relative pe-8"
              placeholder="*******"
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

        {/* button */}
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            className="w-1/2 text-base sm:text-xl font-inter font-semibold tracking-[1px] py-2 rounded-md hover:cursor-pointer btn-animate"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
