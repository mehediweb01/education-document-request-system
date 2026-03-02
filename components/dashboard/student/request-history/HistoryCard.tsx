import { TableCell, TableRow } from "@/components/ui/table";
import { RequestProps, Status } from "@/interface/interface";
import { dateConvert } from "@/lib/DateConvert";

const HistoryCard = ({ doc }: { doc: RequestProps }) => {
  return (
    <>
      <TableRow className="border-b border-black">
        <TableCell className="border-r tableCell">{doc.reg}</TableCell>
        <TableCell
          className={`border-r tableCell ${doc.status === Status.Pending ? "text-yellow-500/80" : doc.status === Status.Rejected ? "text-red-400" : "text-green-400"}`}
        >
          {doc.status}
        </TableCell>
        <TableCell className="border-r tableCell">
          {dateConvert(doc.createdAt as Date)}
        </TableCell>
        <TableCell className="tableCell">
          {doc.documentType.map((item) => (
            <p
              key={item}
              className="border-b border-slate-200/70 last:border-0 p-2 text-base font-medium bg-slate-400/50 rounded-md"
            >
              {item}
            </p>
          ))}
        </TableCell>
      </TableRow>
    </>
  );
};

export default HistoryCard;
