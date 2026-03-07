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
import { Edit } from "lucide-react";
import { useState } from "react";
import AnnouncementEditAndCreateForm from "../AnnouncementEditAndCreateForm";

const AnnouncementAction = ({
  isPending,
  text,
  announcementId,
}: {
  isPending: string;
  text: string;
  announcementId: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex justify-end items-center gap-3 flex-wrap">
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <form>
            <DialogTrigger asChild>
              <Button
                className="bg-yellow-400 text-eerie-black cursor-pointer text-base tracking-wider "
                variant="outline"
                type="button"
                onClick={handleOpenModal}
              >
                Edit <Edit />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Edit Announcement</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>

              {/* create announcement form */}
              <AnnouncementEditAndCreateForm
                onClose={() => setIsOpen(false)}
                editText={text}
                isEdit={true}
                announcementId={announcementId as string}
              />
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <div>
        {isPending === "pending" && (
          <Button
            className="bg-green cursor-pointer text-base tracking-wider text-white"
            variant="outline"
            type="button"
          >
            Publish
          </Button>
        )}
      </div>
    </div>
  );
};

export default AnnouncementAction;
