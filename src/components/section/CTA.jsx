import { Link } from "react-router-dom";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <>
      <section className="bg-[#00ABE4] py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Ready to Ace Your Next Interview?
          </h2>
          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Join NextInterview and practice with AI-powered interview questions,
            receive instant feedback, and track your progress—all in one place.
          </p>
          {/* CTA Button */}
          <Link to="/signup" className="mt-10">
            <Button variant="white" className="bg-white text-[#00ABE4] hover:bg-slate-100">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CTA;
