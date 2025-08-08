const BookCard = ({ book, onDownload, size = "normal" }) => {
  const cardSizes = {
    small: "w-32 h-48",
    normal: "w-40 h-60",
    large: "w-48 h-72",
  };

  return (
    <div className="group relative flex-shrink-0 cursor-pointer px-1 py-2">
      <div
        className={`${cardSizes[size]} relative overflow-hidden rounded-md bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110 hover:z-20 hover:shadow-2xl mx-auto`}
        style={{ transformOrigin: "center center" }}
      >
        {/* Book Cover */}
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
            {book.category}
          </span>
        </div>

        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
            {book.title}
          </h3>
          <p className="text-gray-300 text-xs mb-2">by {book.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < book.rating ? "fill-current" : "text-gray-600"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-300 text-xs ml-1">{book.rating}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onDownload(book)}
              className="bg-white text-black px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-200 transition-colors flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download
            </button>
            <button className="bg-gray-600 text-white p-1 rounded-md hover:bg-gray-500 transition-colors">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
