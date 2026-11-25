import { useEffect, useState } from "react";

const Button = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`scroll-top d-flex align-items-center justify-content-center ${
        visible ? "active" : ""
      }`}
    >
      <i className="bi bi-arrow-up-short" />
    </button>
  );
};

export default Button;