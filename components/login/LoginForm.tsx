"use client";

import { ChangeEvent, InputState } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState(false);

  const [inputValue, setInputValue] = useState<InputState>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        email: inputValue.email?.trim(),
        password: inputValue.password?.trim(),
      };

      const response = await axios.post("/api/login", payload);

      const data = response.data;

      if (data) {
        toast.success("User logged in successful");
        if (data.user.role === "admin") {
          router.push(`/?role=admin`);
        } else if (data.user.role === "student") {
          router.push(`/?role=student`);
        } else {
          router.push("/");
        }
      }

      setInputValue({
        email: "",
        password: "",
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      } else {
        toast.error("Something went wrong! Please try again later.");
      }
    }
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
            value={inputValue.email}
            onChange={handleInputChange}
            name="email"
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
              value={inputValue.password}
              onChange={handleInputChange}
              name="password"
              required
            />
            <div className="absolute right-14">
              {showPassword ? (
                <Button
                  onClick={() => setShowPassword(false)}
                  variant="ghost"
                  className="hover:cursor-pointer"
                  type="button"
                >
                  <FiEye className="w-12 h-12" />
                </Button>
              ) : (
                <Button
                  onClick={() => setShowPassword(true)}
                  variant="ghost"
                  className="hover:cursor-pointer"
                  type="button"
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
