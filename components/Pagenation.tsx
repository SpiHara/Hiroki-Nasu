"use client"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  color?: "blue" | "green"
}

export default function Pagination({ currentPage, totalPages, onPageChange, color = "blue" }: PaginationProps) {
  const activeBg = color === "blue" ? "bg-blue-600" : "bg-green-600"
  const activeText = "text-white"

  return (
    <div className="flex justify-center space-x-2 mt-6 overflow-x-auto">
      <button
        className="px-2 py-1 text-sm rounded-md bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        前
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-2 py-1 text-sm rounded-md transition-colors ${
            currentPage === i + 1 ? `${activeBg} ${activeText} shadow-lg` : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-2 py-1 text-sm rounded-md bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        次
      </button>
    </div>
  )
}
