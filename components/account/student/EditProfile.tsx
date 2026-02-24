"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserProps } from "@/interface/interface";
import { Edit } from "lucide-react";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

const EditProfile = ({ user }: { user: UserProps | null }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Edit Profile <Edit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          {/* edit profile form */}
          <EditProfileForm setIsOpen={setIsOpen} user={user} />
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EditProfile;
