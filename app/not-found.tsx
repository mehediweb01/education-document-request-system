import { Button } from "@/components/ui/button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-inter sm:text-xl md:text-2xl lg:text-4xl font-bold capitalize flex flex-col justify-center items-center">
          <span className="text-4xl text-red-400 animate-bounce">404! 😒</span>
          <span> pages not found!</span>
        </h1>
        <Button variant="outline">
          <Link href="/" className="text-blue-400 sm:text-xl text-sm">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Custom404;
