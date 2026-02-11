const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="shadow-md shadow-black border-green/40 rounded-lg w-fit">
      <div className="bg-green py-2 px-4 rounded-t-lg">
        <h1 className="text-base md:text-xl font-semibold font-roboto tracking-wider text-white capitalize ">
          {title}
        </h1>
      </div>
      <div className="mt-3 px-4 py-2">{children}</div>
    </div>
  );
};

export default InfoCard;
