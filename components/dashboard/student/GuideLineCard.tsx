const GuideLineCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="shadow-md shadow-black bg-white px-2 py-1 rounded-md text-green">
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl capitalize font-montserrat">
          {title}
        </h2>
        <p className="text-sm sm:text-base ms-3 font-inter capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GuideLineCard;
