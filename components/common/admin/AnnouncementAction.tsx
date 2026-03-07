"use client";

import { Button } from "@/components/ui/button";

const AnnouncementAction = ({ isPending }: { isPending: string }) => {
  return (
    <div className="flex justify-end items-center gap-3 flex-wrap">
      <div>
        <Button
          className="bg-yellow-400 text-eerie-black cursor-pointer text-base tracking-wider "
          variant="outline"
          type="button"
        >
          Edit
        </Button>
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
