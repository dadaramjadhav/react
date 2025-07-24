import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "./api";

export default function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["employees", page],
    queryFn: () => fetchEmployees(page),
    keepPreviousData: true, // Smooth transitions,
    staleTime: 1000 * 10,
    gcTime: 1000 * 20,
    refetchOnWindowFocus: true,
    retry: 3,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {data.users.map((user) => (
        <>
          <li key={user.id} className="p-3 border rounded shadow">
            <p className="font-bold">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        </>
      ))}

      <div className="mt-4 flex justify-between items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          disabled={data.total <= page * 5}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
