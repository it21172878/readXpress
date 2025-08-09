import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NetflixHome from "./pages/NetflixHome";
import KidsBooks from "./pages/KidsBooks";
import Romance from "./pages/Romance";
import Fantasy from "./pages/Fantasy";
import Mystery from "./pages/Mystery";
import SciFi from "./pages/SciFi";
import NonFiction from "./pages/NonFiction";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-black no-smooth-scroll">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<NetflixHome />} />
            <Route path="/category/kids" element={<KidsBooks />} />
            <Route path="/category/romance" element={<Romance />} />
            <Route path="/category/fantasy" element={<Fantasy />} />
            <Route path="/category/mystery" element={<Mystery />} />
            <Route path="/category/sci-fi" element={<SciFi />} />
            <Route path="/category/non-fiction" element={<NonFiction />} />
            {/* Keep the original routes for backward compatibility */}
            <Route path="/kids" element={<KidsBooks />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/fantasy" element={<Fantasy />} />
            <Route path="/mystery" element={<Mystery />} />
            <Route path="/sci-fi" element={<SciFi />} />
            <Route path="/non-fiction" element={<NonFiction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
