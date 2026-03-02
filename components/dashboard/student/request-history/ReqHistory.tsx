import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RequestProps } from "@/interface/interface";
import { getAUserAndAllOfHisRequestHistory } from "@/queries/request-history";
import HistoryCard from "./HistoryCard";

const ReqHistory = async ({ userId }: { userId: string }) => {
  const data = await getAUserAndAllOfHisRequestHistory(userId);
  const { request } = data;

  return (
    <div className="shadow-sm shadow-sky-400 border border-sky-400 px-4 py-3 rounded-md">
      <h1 className="font-semibold text-3xl font-montserrat tracking-[1px] pb-2 text-center my-1 md:my-3">
        All Request
      </h1>
      <div className="space-y-2 ">
        <Table className="border">
          <TableHeader>
            <TableRow className="border-b border-black">
              <TableHead className="border-r tableHeader text-center">
                Registration
              </TableHead>
              <TableHead className="border-r tableHeader text-center">
                Status
              </TableHead>
              <TableHead className="border-r tableHeader text-center">
                Date
              </TableHead>
              <TableHead className="tableHeader text-center">
                Document Type
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {request.map((item) => (
              <HistoryCard key={item.id} doc={item as RequestProps} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReqHistory;
