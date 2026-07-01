import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="NextInterview Logo"
            className="h-15 w-15 object-contain"
          />

          <span className="text-xl font-semibold text-slate-900">
            NextInterview
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-10 text-base font-medium text-slate-700 md:flex">
          <li>
            <a
              href="#features"
              className="transition-colors hover:text-[#00ABE4]"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-[#00ABE4]"
            >
              How It Works
            </a>
          </li>
        </ul>

        {/* Authentication */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login">
            <Button variant="ghost">
              Login
            </Button>
          </Link>

          <Link to="/signup">
            <Button variant="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar