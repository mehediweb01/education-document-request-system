"use client";

import { ChangeEvent, InputState } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

const RegisterForm = () => {
  const [showPassword, setShowPassword]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState(false);
  const [inputValue, setInputValue] = useState<InputState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "student",
    reg: 0,
    department: "",
    session: "",
    contactNumber: +880,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;

    if (name === "session") {
      setInputValue((prev) => ({
        ...prev,
        [name]: value.replace(/[^0-9-]/g, ""),
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        name: inputValue.name?.trim(),
        email: inputValue.email?.trim(),
        password: inputValue.password?.trim(),
        confirmPassword: inputValue.confirmPassword?.trim(),
        gender: inputValue.gender?.trim(),
        reg: Number(inputValue.reg),
        department: inputValue.department?.trim(),
        session: inputValue.session?.trim(),
        contactNumber: Number(inputValue.contactNumber),
        role: "student",
      };

      if (payload.password !== payload.confirmPassword) {
        toast.error("Passwords do not match");
        setLoading(false);
        return;
      }

      const response = await axios.post("/api/register", payload);

      const data = response.data;

      if (data) {
        setLoading(false);
        toast.success("User registered successfully");
        router.push("/login");
      }

      setInputValue({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        role: "student",
        reg: 0,
        department: "",
        session: "",
        contactNumber: +880,
      });
    } catch (err: unknown) {
      setLoading(false);
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Something went wrong!");
      } else {
        toast.error("Something went wrong, Please try again!");
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
          Register
        </h1>
      </div>
      <div className="space-y-3">
        {/* name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="input"
            placeholder="John Doe"
            name="name"
            onChange={handleInputChange}
            value={inputValue.name}
            required
          />
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input"
            name="email"
            placeholder="demo@gmail.com"
            onChange={handleInputChange}
            value={inputValue.email}
            required
          />
        </div>

        {/* reg number & department */}
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-2">
          <div>
            <label htmlFor="reg">Reg. Number:</label>
            <input
              type="number"
              id="reg"
              className="input"
              name="reg"
              placeholder="1248756554"
              onChange={handleInputChange}
              value={inputValue.reg}
              required
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              className="input"
              name="department"
              placeholder="Computer Science"
              onChange={handleInputChange}
              value={inputValue.department}
              required
            />
          </div>
        </div>

        {/* session & contact number */}
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-2">
          <div>
            <label htmlFor="contactNumber">Contact number:</label>
            <input
              type="number"
              id="contactNumber"
              className="input"
              name="contactNumber"
              placeholder="+8801777777777"
              onChange={handleInputChange}
              value={inputValue.contactNumber}
              required
            />
          </div>
          <div>
            <label htmlFor="session">Session:</label>
            <input
              type="text"
              id="session"
              className="input"
              name="session"
              placeholder="2024-2025"
              onChange={handleInputChange}
              value={inputValue.session}
              required
            />
          </div>
        </div>

        {/* password */}
        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <div className="flex justify-center items-center gap-2 w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="input relative pe-8"
              placeholder="*******"
              onChange={handleInputChange}
              value={inputValue.password}
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

        {/* confirm password */}
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            className={`input ${inputValue.password !== inputValue.confirmPassword ? "border-red-500" : ""}`}
            placeholder="*******"
            onChange={handleInputChange}
            value={inputValue.confirmPassword}
            name="confirmPassword"
            required
          />
        </div>

        {/* gender */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            className="input"
            onChange={handleInputChange}
            value={inputValue.gender}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
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
            className="bg-sky-400 hover:bg-sky-600 text-white btn-animate hover:cursor-pointer w-1/2 text-base sm:text-xl disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
            disabled={loading}
          >
            Register{" "}
            <span className="animate-pulse">{loading ? "..." : ""}</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
