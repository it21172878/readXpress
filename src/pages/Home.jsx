import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import NetflixBookRow from "../components/NetflixBookRow";
import { booksData } from "../data/books";

const Home = () => {
  const handleDownload = (book) => {
    // Open PDF in current tab (same window)
    window.location.href = book.megaUrl;
    console.log(`Downloading "${book.title}" by ${book.author}`);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <HeroBanner books={booksData.featured} onDownload={handleDownload} />

      {/* Content Sections */}
      <div className="relative -mt-32 z-20 pb-8">
        {/* Featured Books */}
        <NetflixBookRow
          title="Featured Books"
          books={booksData.featured}
          onDownload={handleDownload}
          size="large"
        />

        {/* Kids Books */}
        <NetflixBookRow
          title="Kids Books"
          books={booksData.kids}
          onDownload={handleDownload}
          category="kids"
        />

        {/* Romance */}
        <NetflixBookRow
          title="Romance"
          books={booksData.romance}
          onDownload={handleDownload}
          category="romance"
        />

        {/* Fantasy */}
        <NetflixBookRow
          title="Fantasy & Adventure"
          books={booksData.fantasy}
          onDownload={handleDownload}
          category="fantasy"
        />

        {/* Mystery */}
        <NetflixBookRow
          title="Mystery & Thriller"
          books={booksData.mystery}
          onDownload={handleDownload}
          category="mystery"
        />

        {/* Sci-Fi */}
        <NetflixBookRow
          title="Science Fiction"
          books={booksData.scifi}
          onDownload={handleDownload}
          category="sci-fi"
        />

        {/* Popular Categories Section */}
        <section className="py-16 px-4 md:px-12">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
            Browse by Genre
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Kids Books",
                path: "/kids",
                emoji: "👶",
                color: "from-yellow-500 to-orange-600",
              },
              {
                name: "Romance",
                path: "/romance",
                emoji: "💕",
                color: "from-pink-500 to-red-600",
              },
              {
                name: "Fantasy",
                path: "/fantasy",
                emoji: "🐉",
                color: "from-purple-500 to-indigo-600",
              },
              {
                name: "Mystery",
                path: "/mystery",
                emoji: "🔍",
                color: "from-gray-600 to-gray-800",
              },
              {
                name: "Sci-Fi",
                path: "/sci-fi",
                emoji: "🚀",
                color: "from-blue-500 to-cyan-600",
              },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
