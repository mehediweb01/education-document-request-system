import { cn } from "@/lib/utils";

const ProfileInformationCard = ({
  value,
  label,
  className,
}: {
  value: string | number;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-3 w-full border-b border-gray-500/20 pb-1",
        className,
      )}
    >
      <h3 className="font-semibold font-inter text-eerie-black text-base md:text-xl">
        {label}:
      </h3>
      <input type="text" value={value} disabled className="input w-1/2" />
    </div>
  );
};

export default ProfileInformationCard;
