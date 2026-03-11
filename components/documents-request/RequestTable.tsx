import { requestTableHead } from "@/db/db";
import { RequestProps } from "@/interface/interface";
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
import UpdateStatus from "./UpdateStatus";
import UploadPdf from "./UploadPdf";

const groupByPerson = (requests: RequestProps[]) => {
  const map: Record<string, RequestProps[]> = {};
  requests.forEach((req) => {
    const key = `${req.name}-${req.reg}-${req.studentNumber}`;
    if (!map[key]) map[key] = [];
    map[key].push(req);
  });
  return map;
};

const RequestTable = async ({ page }: { page: number }) => {
  const { requests, total } = await getAllRequest(page, 10);
  const groupedRequests = groupByPerson(requests as RequestProps[]);

  return (
    <>
      <Table>
        {/* table header */}
        <TableHeader>
          <TableRow>
            {requestTableHead.map((val) => (
              <TableHead key={val.id} className="tableHeader">
                {val.value}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        {/* table body */}
        <TableBody>
          {Object.entries(groupedRequests).map(([key, group]) => {
            const [name, reg, studentNumber] = key.split("-");
            return group.map((item, index) => (
              <TableRow key={item.id}>
                {index === 0 && (
                  <>
                    <TableCell
                      rowSpan={group.length}
                      className="tableCell font-semibold text-start capitalize"
                    >
                      {name}
                    </TableCell>
                    <TableCell rowSpan={group.length} className="tableCell">
                      {reg}
                    </TableCell>
                    <TableCell rowSpan={group.length} className="tableCell">
                      {studentNumber}
                    </TableCell>
                  </>
                )}

                {/* Other columns */}
                <TableCell className="tableCell">{item.course}</TableCell>
                <TableCell className="tableCell">
                  {dateConvert(item.createdAt as Date, true)}
                </TableCell>
                <TableCell className="tableCell">
                  <UpdateStatus
                    status={item.status}
                    requestId={item.id as string}
                  />
                </TableCell>
                <TableCell className="tableCell space-y-1">
                  {item.documentType.map((doc: string) => (
                    <p
                      key={doc}
                      className="text-start border-b border-slate-200/70 last:border-0 px-2 py-1 text-sm font-medium bg-slate-200/50 rounded-md"
                    >
                      {doc}
                    </p>
                  ))}
                </TableCell>
                <TableCell className="tableCell">
                  <UploadPdf />
                </TableCell>
              </TableRow>
            ));
          })}
        </TableBody>
      </Table>

      <div className="flex justify-end my-4">
        <Pagination total={total} limit={10} />
      </div>
    </>
  );
};

export default RequestTable;
