import React, { useState } from "react";
import Button from "../../components/ui/Button";
import logo from "../../assets/images/logo.png";
import toast from "react-hot-toast";
import Input from "../../components/ui/Input";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/authService";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

    try {
      const { fullName, email, password } = formData;

      const response = await signup({
        fullName,
        email,
        password,
      });

      toast.success(response.message);

      navigate("/login");

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="min-h-screen bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl min-h-screen flex items-center px-6 py-10">
          <div className="hidden w-1/2 flex-col justify-center pr-12 lg:flex">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <img
                  src={logo}
                  alt="NextInterview_Logo"
                  className="h-12 w-12"
                />
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
              <form onSubmit={handleSignup} className="mt-6 space-y-4">
                <Input
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <Input
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <Button type="submit" variant="primary" className="w-full py-3">
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
