"use client";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Something went wrong!</h2>
            <p className="text-sm text-gray-600 italic">{error.message}</p>
            <Button
              onClick={() => reset()}
              variant="outline"
              className="mt-4 cursor-pointer"
            >
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
