const BookCard = ({ book, onDownload }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {book.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-gray-600 mb-2">by {book.author}</p>
        <p className="text-sm text-gray-500 mb-3 line-clamp-3">
          {book.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < book.rating ? "fill-current" : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({book.reviews})</span>
          </div>

          <button
            onClick={() => onDownload(book)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors duration-200 font-semibold text-sm"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
