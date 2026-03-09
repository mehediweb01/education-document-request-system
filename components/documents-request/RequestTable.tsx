import { requestTableHead } from "@/db/db";
import { RequestProps } from "@/interface/interface";
import { dateConvert } from "@/lib/DateConvert";
import { getAllRequest } from "@/queries/request-document";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const RequestTable = async () => {
  const data = await getAllRequest();
  const requests = data as RequestProps[];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {requestTableHead.map((val) => (
            <TableHead key={val.id} className="tableHeader">
              {val.value}
            </TableHead>
          ))}
        </TableRow>

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
              {item.documentType.map((item) => (
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
      </TableHeader>
    </Table>
  );
};

export default RequestTable;
