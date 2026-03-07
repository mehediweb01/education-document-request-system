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
import { useState } from "react";
import { IoCreate } from "react-icons/io5";
import AnnouncementEditAndCreateForm from "../AnnouncementEditAndCreateForm";

const CreateAnnouncement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <form>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer capitalize font-semibold font-montserrat text-base md:text-xl hover:text-white hover:bg-gray-800 transition-all duration-300 ease-in-out py-4 px-3 border-sky-400 border-2"
              onClick={() => setIsOpen(true)}
            >
              create announcement <IoCreate />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Create Announcement</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>

            {/* create announcement form */}
            <AnnouncementEditAndCreateForm onClose={() => setIsOpen(false)} />
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default CreateAnnouncement;
