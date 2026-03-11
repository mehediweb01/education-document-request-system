"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import UploadPdfForm from "./UploadPdfForm";

const UploadPdf = ({ email, id }: { email: string; id: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <form>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Upload PDF
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Upload PDF</DialogTitle>
              <DialogDescription>Upload your PDF file here.</DialogDescription>
            </DialogHeader>
            <UploadPdfForm
              email={email as string}
              id={id as string}
              onClose={() => setIsOpen(false)}
            />
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default UploadPdf;
