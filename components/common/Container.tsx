import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
}: Readonly<{ className?: string; children: React.ReactNode }>) => {
  return <div className={cn("mx-8 my-4", className)}>{children}</div>;
};

export default Container;
