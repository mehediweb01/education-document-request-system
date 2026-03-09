"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Pagination = ({ total, limit }: { total: number; limit: number }) => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const handleNextPage = () => {
    setPage(page + 1);
    router.push(`/documents-request?role=admin&page=${page + 1}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    router.push(`/documents-request?role=admin&page=${page - 1}`);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={handlePrevPage}
        disabled={page === 1}
        className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer disabled:cursor-not-allowed px-3 py-1 rounded-md disabled:opacity-50 border-slate-500"
      >
        Prev
      </button>

      <p>
        <span className="text-green font-mono"> {page}</span> of{" "}
        {Math.ceil(total / limit)}
      </p>

      <button
        type="button"
        onClick={handleNextPage}
        disabled={page * limit >= total}
        className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer disabled:cursor-not-allowed px-3 py-1 rounded-md disabled:opacity-50 border-slate-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
