import AnnouncementAction from "./AnnouncementAction";

const AnnouncementCard = () => {
  return (
    <div className="h-fit w-full px-4 py-3 rounded-md bg-white shadow-md shadow-black/40">
      {/* header */}
      <div className="bg-yellow-400 px-4 py-3 rounded-md">
        <h1>Announcement Board</h1>
      </div>
      {/* body */}
      <div className="my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          error minima necessitatibus ipsum dicta illo incidunt debitis
          perferendis. Eligendi impedit cupiditate esse mollitia illum, itaque
          officiis quos? Dolorem dolores quis unde. Sunt vel aperiam sequi?
        </p>
      </div>
      {/* footer acton */}
      <div>
        <AnnouncementAction />
      </div>
    </div>
  );
};

export default AnnouncementCard;
