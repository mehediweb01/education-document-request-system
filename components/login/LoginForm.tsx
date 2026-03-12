"use client";

import { ChangeEvent, LoginState } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import InputField from "../common/InputField";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState(false);

  const [inputValue, setInputValue] = useState<LoginState>({
    email: "",
    password: "",
    isAdmin: false,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });

    if (name === "isAdmin") {
      setInputValue({
        ...inputValue,
        [name]: !inputValue.isAdmin,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const payload = {
        email: inputValue.email?.trim(),
        password: inputValue.password?.trim(),
        isAdmin: inputValue.isAdmin,
      };

      const response = await axios.post("/api/login", payload);

      const data = response.data;

      if (data) {
        toast.success(data.message);
        if (data.user.role === "admin") {
          router.push(`/dashboard/admin/${data.user.id}`);
        } else if (data.user.role === "student") {
          router.push(`/dashboard/student/${data.user.id}`);
        } else {
          router.push("/");
        }
        router.refresh();
        setLoading(false);
      }

      setInputValue({
        email: "",
        password: "",
        isAdmin: false,
      });
    } catch (err: unknown) {
      setLoading(false);
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
        <InputField
          type="email"
          name="email"
          className="input"
          placeholder="demo@gmail.com"
          value={inputValue.email}
          onChange={handleInputChange}
          label="Email"
          required
        />

        {/* password */}
        <div className="w-full">
          <div className="relative flex items-end justify-start gap-2">
            <div className="w-full">
              <InputField
                type={showPassword ? "text" : "password"}
                className="input relative pe-8"
                placeholder="*******"
                value={inputValue.password}
                onChange={handleInputChange}
                name="password"
                label="Password"
                required
              />
            </div>
            <div className="absolute right-0">
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

        {/* isAdmin */}
        <InputField
          type="checkbox"
          name="isAdmin"
          onChange={handleInputChange}
          checked={inputValue.isAdmin}
          className="cursor-pointer input"
          label="Is Admin"
        />

        {/* button */}
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            className="w-1/2 text-base sm:text-xl font-inter font-semibold tracking-[1px] py-2 rounded-md hover:cursor-pointer btn-animate disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 "
            disabled={loading}
          >
            Login <span className=" animate-pulse">{loading ? "..." : ""}</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
