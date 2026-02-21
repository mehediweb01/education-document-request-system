import documentImage from "@/public/images/document.svg";
import Image from "next/image";

const DocumentTypesCard = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-sm shadow-gray-700 rounded-md p-4 w-full">
      <Image
        src={documentImage}
        alt={name}
        height={100}
        width={100}
        className="rounded-full bg-yellow-400 p-2"
      />
      <h3 className="mt-1 font-semibold text-eerie-black font-montserrat text-base lg:text-xl text-center">
        {name}
      </h3>
    </div>
  );
};

export default DocumentTypesCard;
