import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately jump to top - no animation
    window.scrollTo(0, 0);

    // Force document to top as well
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Ensure it happens after any potential re-renders
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
