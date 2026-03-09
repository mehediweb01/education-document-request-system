import { requestTableHead } from "@/db/db";
import { dateConvert } from "@/lib/DateConvert";
import { getAllRequest } from "@/queries/request-document";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Pagination from "./Pagination";

const RequestTable = async ({ page }: { page: number }) => {
  const { requests, total } = await getAllRequest(page, 10);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {requestTableHead.map((val) => (
              <TableHead key={val.id} className="tableHeader">
                {val.value}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="tableCell font-semibold text-start capitalize">
                {item.name}
              </TableCell>
              <TableCell className="tableCell">{item.reg}</TableCell>
              <TableCell className="tableCell">{item.studentNumber}</TableCell>
              <TableCell className="tableCell">{item.course}</TableCell>
              <TableCell className="tableCell">
                {dateConvert(item.createdAt as Date)}
              </TableCell>
              <TableCell className="tableCell">{item.status}</TableCell>
              <TableCell className="tableCell">
                {item.documentType.map((item: string) => (
                  <p
                    key={item}
                    className="border-b border-slate-200/70 last:border-0 p-2 text-base font-medium bg-slate-400/50 rounded-md"
                  >
                    {item}
                  </p>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end my-4">
        <Pagination total={total} limit={10} />
      </div>
    </>
  );
};

export default RequestTable;
