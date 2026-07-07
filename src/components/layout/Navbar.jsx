import { Link } from "react-router-dom";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="NextInterview Logo"
              className="h-14 w-14 object-contain"
            />

            <span className="text-xl font-semibold text-slate-900">
              NextInterview
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-10 text-base font-medium text-slate-700 md:flex">
            <li>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-[#00ABE4]"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="transition-colors hover:text-[#00ABE4]"
              >
                Features
              </a>
            </li>

          </ul>

          {/* Authentication */}
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>

            <Link to="/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition-color hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-6 py-6 bg-white">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-[#00ABE4]"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-[#00ABE4]"
            >
              How It Works
            </a>

            <hr className="border-gray-200" />

            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-center">
                Login
              </Button>
            </Link>

            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
