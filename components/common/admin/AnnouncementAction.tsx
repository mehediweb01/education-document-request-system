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
import axios from "axios";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
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
  const router = useRouter();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handlePublish = async () => {
    try {
      const response = await axios.patch(`/api/announcement/publish`, {
        announcementId,
      });

      if (response.status === 200) {
        toast.success("Announcement published successfully");
        router.refresh();
      }
    } catch (err: unknown) {
      if (err instanceof axios.AxiosError) {
        toast.error(err.response?.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
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
            onClick={handlePublish}
          >
            Publish
          </Button>
        )}
      </div>
    </div>
  );
};

export default AnnouncementAction;
