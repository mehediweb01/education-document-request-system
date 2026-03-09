import RequestTable from "./RequestTable";

const Requests = () => {
  return (
    <div className="py-3 space-y-4">
      <div className="bg-green py-3 px-4 rounded-md">
        <h1 className="font-bold font-montserrat text-xl md:text-2xl text-white ">
          All Request
        </h1>
      </div>
      <div>
        <RequestTable />
      </div>
    </div>
  );
};

export default Requests;
