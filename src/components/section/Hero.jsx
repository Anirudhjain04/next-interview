import Button from "../ui/Button";
import { Link } from "react-router-dom";
import DashboardMockup from "./DashboardMockup";

const Hero = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-14 px-6 py-16">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <span className="teinline-flex rounded-full bg-[#E9F1FA] px-4 py-2 text-sm font-medium text-[#00ABE4]">
              ✨ AI-Powered Interview Preparation
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Practice AI Interviews
              <br />
              With Confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Prepare for your next interview with realistic AI-generated
              questions, instant feedback, and progress tracking.
            </p>
            <Link to="/signup">
              <Button className="mt-10">Sign Up</Button>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex justify-end lg:w-1/2">
            <DashboardMockup />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
