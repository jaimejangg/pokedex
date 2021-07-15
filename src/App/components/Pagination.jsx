export default function Pagination({ page, totalPages, nextPage, prevPage }) {
  return (
    <nav
      className="bg-gray-200 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Page <span className="font-medium">{page}</span> of{" "}
          <span className="font-medium">{totalPages}</span> pages{" "}
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={prevPage}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        {totalPages === 1 && (
          <span className="inline-flex items-center px-3 py-0.5 rounded ml-3 text-sm font-medium bg-blue-100 text-indigo-800">
            Just one beautiful pokemon.
          </span>
        )}
        <button
          onClick={nextPage}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
