import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-20 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="NextInterview"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xl font-semibold text-white">
                  NextInterview
                </span>
              </div>
              <p className="mt-6 max-w-sm leading-9 text-slate-400">
                Practice AI-powered interviews, improve your confidence, and
                prepare for your next opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="mt-5 space-y-4">
                <li>
                  <a href="#features" className="transition hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="transition hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white ">Account</h3>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link to="/login" className="transition hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="transition hover:text-white">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white">
                Connect with us
              </h3>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://github.com/Anirudhjain04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00ABE4]"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00ABE4]"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00ABE4]"
                >
                  <FaTwitter size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-14 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            © 2026 NextInterview. Built with React, Vite & Tailwind CSS.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
