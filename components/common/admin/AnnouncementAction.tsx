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
import { DeleteIcon, Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdPublish, MdUnpublished } from "react-icons/md";
import { toast } from "react-toastify";
import AnnouncementEditAndCreateForm from "../AnnouncementEditAndCreateForm";

const AnnouncementAction = ({
  status,
  text,
  announcementId,
}: {
  status: string;
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

  const handleUnpublish = async () => {
    try {
      const response = await axios.patch(`/api/announcement/unpublish`, {
        announcementId,
      });

      if (response.status === 200) {
        toast.success("Announcement unpublished successfully");
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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/announcement/delete/${announcementId}`,
      );

      if (response.status === 200) {
        toast.success("Announcement deleted successfully");
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
        {status === "pending" && (
          <Button
            className="bg-[#14B8A6] hover:bg-[#0D9488] cursor-pointer text-base tracking-wider text-black"
            variant="outline"
            type="button"
            onClick={handlePublish}
          >
            Publish <MdPublish />
          </Button>
        )}

        {status === "published" && (
          <Button
            className="bg-[#F59E0B] hover:bg-[#D97706] cursor-pointer text-base tracking-wider text-black transition-all duration-300"
            variant="outline"
            type="button"
            onClick={handleUnpublish}
          >
            Unpublish <MdUnpublished />
          </Button>
        )}
      </div>
      <div>
        <Button
          className="bg-[#EF4444] hover:bg-red-200 cursor-pointer text-base tracking-wider text-white hover:text-red-600 transition-all duration-300"
          variant="outline"
          type="button"
          onClick={handleDelete}
        >
          Delete <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementAction;
