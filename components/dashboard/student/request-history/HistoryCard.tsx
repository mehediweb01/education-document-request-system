import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Status } from "@/enum/enum";
import { RequestProps } from "@/interface/interface";
import { dateConvert } from "@/lib/DateConvert";
import Link from "next/link";

const HistoryCard = ({
  doc,
  userId,
}: {
  doc: RequestProps;
  userId: string;
}) => {
  return (
    <>
      <TableRow className="border-b border-black">
        <TableCell className="tableCell">{doc.reg}</TableCell>
        <TableCell
          className={`tableCell ${doc.status === Status.Pending ? "text-yellow-500/80" : doc.status === Status.Rejected ? "text-red-400" : "text-green-400"}`}
        >
          {doc.status}
        </TableCell>
        <TableCell className="tableCell">
          {dateConvert(doc.createdAt as Date)}
        </TableCell>
        <TableCell className="tableCell space-y-1">
          {doc.documentType.map((item) => (
            <p
              key={item}
              className="border-slate-200/70 last:border-0 p-2 text-base font-medium bg-slate-400/50 rounded-md "
            >
              {item}
            </p>
          ))}
        </TableCell>
        <TableCell className="tableCell">
          <Button type="button" variant={"outline"}>
            <Link
              href={`/dashboard/student/request-document/${userId}/${doc.id}`}
              className="cursor-pointer"
            >
              View
            </Link>
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default HistoryCard;
