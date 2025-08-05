import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#002147]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
        {/* Left Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
          <img src="/shortly.svg" alt="Shortly" className="h-15 w-auto" />

        </div>

        {/* Middle Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {["Platform", "Solutions", "Pricing", "Resources"].map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-1 cursor-pointer ${
                index === 2 ? "" : "relative"
              }`}
            >
              <span className={`${scrolled ? "text-black" : "text-white"}`}>
                {item}
              </span>
              {index !== 2 && (
                <ChevronDown
                  size={14}
                  className={`${scrolled ? "text-black" : "text-white"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaGlobe className={`${scrolled ? "text-black" : "text-white"}`} />
            <span className={`${scrolled ? "text-black" : "text-white"}`}>EN</span>
            <ChevronDown size={14} className={`${scrolled ? "text-black" : "text-white"}`} />
          </div>
          <span
            className={`${
              scrolled ? "text-black" : "text-white"
            } cursor-pointer`}
          >
            Log in
          </span>
          <button
            className={`border font-medium px-4 py-1 rounded-md ${
              scrolled
                ? "text-blue-600 border-blue-600"
                : "text-white border-white"
            }`}
          >
            Get a Quote
          </button>
          <button
            className={`px-4 py-1 rounded-md font-medium ${
              scrolled ? "bg-blue-600 text-white" : "bg-white text-black"
            }`}
          >
            Sign up Free
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
