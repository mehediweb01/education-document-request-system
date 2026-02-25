"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { UserProps } from "@/interface/interface";
import { ChangeEvent } from "@/types/type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import InputField from "../../common/InputField";

const EditProfileForm = ({
  setIsOpen,
  user,
}: {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  user: UserProps | null;
}) => {
  const [userInfo, setUserInfo] = useState<UserProps | null>(user);
  const router = useRouter();

  const handleUserInfoChange = (e: ChangeEvent) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);

    try {
      const response = await axios.patch(
        `/api/user/update/${user?.id}`,
        userInfo,
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully");
        setIsOpen(false);
        router.refresh();
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err: unknown) {
      if (err instanceof axios.AxiosError) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      name: "",
      gender: "",
      address: "",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="space-y-2">
        <InputField
          name="name"
          label="Name"
          type="text"
          value={userInfo?.name as string}
          onChange={handleUserInfoChange}
          placeholder="John Doe"
        />

        <InputField
          name="address"
          label="Address"
          type="text"
          value={userInfo?.address as string}
          onChange={handleUserInfoChange}
          placeholder="123 main st"
        />

        <InputField
          name="department"
          label="Department"
          type="text"
          value={userInfo?.department as string}
          onChange={handleUserInfoChange}
          placeholder="Computer Science"
        />

        <InputField
          name="contactNumber"
          label="Contact Number"
          type="number"
          value={userInfo?.contactNumber as number}
          onChange={handleUserInfoChange}
          placeholder="+8801234567890"
        />

        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            className="input"
            onChange={handleUserInfoChange}
            value={userInfo?.gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      {/* dialog footer */}
      <DialogFooter>
        <DialogClose asChild>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={handleReset}
          >
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" onClick={handleSubmit} className="cursor-pointer">
          Save changes
        </Button>
      </DialogFooter>
    </>
  );
};

export default EditProfileForm;
