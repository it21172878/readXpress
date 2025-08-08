const BookRow = ({ book, onDownload }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-700 hover:border-purple-500/50 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        {/* Cover Image */}
        <div className="flex-shrink-0">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-20 h-28 object-cover rounded-lg shadow-lg ring-2 ring-gray-600 hover:ring-purple-400 transition-all duration-300"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Left side - Title, Author, Category */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-300 transition-colors">
                {book.title}
              </h3>
              <p className="text-gray-300 mb-3">by {book.author}</p>
              <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                {book.category}
              </span>
            </div>

            {/* Right side - Rating, Reviews, Download */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Rating and Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < book.rating
                            ? "fill-current text-yellow-400"
                            : "text-gray-600"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white ml-2 font-semibold">
                    {book.rating}
                  </span>
                </div>
                <span className="text-gray-400">({book.reviews} reviews)</span>
              </div>

              {/* Download Button */}
              <button
                onClick={() => onDownload(book)}
                className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 transition-all duration-200 font-semibold text-sm whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                📥 Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRow;
