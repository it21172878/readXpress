import { useState } from "react";
import NetflixBookCard from "../components/NetflixBookCard";
import { getBooksByCategory } from "../data/books";

const CategoryPage = ({ category, title, emoji }) => {
  const [sortBy, setSortBy] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");

  const books = getBooksByCategory(category);

  const handleDownload = (book) => {
    // Open PDF in current tab (same window)
    window.location.href = book.megaUrl;
    console.log(`Downloading "${book.title}" by ${book.author}`);
  };

  const filteredAndSortedBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "author":
          return a.author.localeCompare(b.author);
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="bg-black min-h-screen">
      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <span className="text-2xl sm:text-3xl md:text-4xl">{emoji}</span>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {title}
              </h1>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              {books.length} books available • Free downloads
            </p>
          </div>

          <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-full lg:max-w-md">
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
              />
              <svg
                className="absolute right-2 sm:right-3 top-2 sm:top-3.5 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-end">
              {/* Sort */}
              <div className="flex items-center gap-2 sm:gap-3">
                <label className="text-gray-300 font-medium text-sm sm:text-base">
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white backdrop-blur-sm text-sm sm:text-base"
                >
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-8 sm:py-12 bg-black">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {filteredAndSortedBooks.length > 0 ? (
            <div className="space-y-8">
              {/* Books List - Compact unique rows */}
              <div className="space-y-2">
                {filteredAndSortedBooks.map((book) => (
                  <div
                    key={book.id}
                    className="relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group bg-gradient-to-r from-red-900/20 via-gray-900/80 to-black border-red-800/30"
                  >
                    {/* Background accent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5">
                      {/* Book Cover */}
                      <div className="flex-shrink-0 relative">
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="w-16 h-24 sm:w-18 sm:h-27 md:w-20 md:h-30 object-cover rounded-lg shadow-lg border border-gray-700 group-hover:border-gray-500 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Book Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 sm:gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 sm:mb-1 truncate group-hover:text-red-300 transition-colors leading-tight">
                              {book.title}
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm mb-1">
                              by {book.author}
                            </p>

                            {/* Rating and Category in one line */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
                              <div className="flex items-center gap-1">
                                {/* Five Star Rating */}
                                <div className="flex items-center gap-0.5">
                                  {[...Array(5)].map((_, starIndex) => (
                                    <svg
                                      key={starIndex}
                                      className={`w-3 h-3 ${
                                        starIndex < book.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-600 fill-current"
                                      }`}
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-white font-semibold text-xs ml-1">
                                  {book.rating}
                                </span>
                                <span className="text-gray-400 text-xs">
                                  ({book.reviews})
                                </span>
                              </div>
                              <span className="px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-600/80 text-red-100">
                                {book.category}
                              </span>
                            </div>

                            {/* Description - single line */}
                            <p className="text-gray-400 text-xs leading-relaxed truncate hidden sm:block">
                              {book.description}
                            </p>
                          </div>

                          {/* Download Button */}
                          <div className="flex-shrink-0">
                            <button
                              onClick={() => handleDownload(book)}
                              className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md font-medium text-xs transition-all duration-300 flex items-center gap-1 sm:gap-1.5 hover:scale-105 active:scale-95 cursor-pointer transform hover:shadow-lg active:shadow-sm"
                            >
                              <svg
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <span className="text-xs">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No books found
              </h3>
              <p className="text-gray-400 mb-4">
                {searchTerm
                  ? `No books match your search "${searchTerm}"`
                  : "No books available in this category yet"}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
