import React from "react";
import Button from "../../components/ui/Button";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../../components/ui/Input";

const Signup = () => {
  return (
    <>
      <section className="min-h-screen bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl min-h-screen flex items-center px-6 py-10">
          <div className="hidden w-1/2 flex-col justify-center pr-12 lg:flex">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <img src={logo} alt="NextInterview_Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold text-slate-900">
                NextInterview
              </span>
              </Link>
            </div>
            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
              Start Practicing Smarter With AI.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Prepare smarter with AI-powered interview practice, instant
              feedback, and progress tracking.
            </p>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Create Your Account ✨
              </h2>
              <p className="mt-2 text-slate-600">
                Start your AI interview journey today.
              </p>
              <form className="mt-6 space-y-4">
                <Input
                  id="fullName"
                  label="Full Name"
                  placeholder="Enter your full name"
                />

                <Input
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                />

                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                />

                <Input
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                />

                <Button variant="primary" className="w-full py-3">
                  Create Account
                </Button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#00ABE4] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
