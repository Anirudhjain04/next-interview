import React, { useState } from 'react'
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginUser } from "../../services/authService"
import { useAuth } from '../../context/authContext';


const Login = () => {
  const handleForgotPassword = (e) => {
    e.preventDefault();

    toast.success("Forgot Password will be available in a future update.");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const {login} = useAuth();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData)

      login(response.user, response.token);

      toast.success(response.message);

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <>
      <section className="min-h-screen bg-[#F8FAFC]">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">
          <div className="hidden w-1/2 flex-col justify-center pr-12 lg:flex">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
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
              Practice AI Interviews
              <br />
              With Confidence.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Prepare smarter with AI-powered interview practice, instant
              feedback, and progress tracking.
            </p>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome Back 👋
              </h2>
              <p className="mt-2 text-slate-600">
                Sign in to continue your interview preparation.
              </p>

              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                <Input
                  id="email"
                  name="email"
                  label="Email"
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm font-medium text-[#00ABE4] transition hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button type="submit" variant="primary" className="w-full py-3">
                  Login
                </Button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-[#00ABE4] hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
