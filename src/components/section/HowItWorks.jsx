import React from "react";
import { UserRound, BrainCircuit, ChartColumn } from "lucide-react";
import Card from "../ui/Card";

const steps = [
  {
    id: "01",
    icon: UserRound,
    title: "Choose Your Role",
    description:
      "Select your target role and experience level to begin your interview practice.",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "Practice with AI",
    description:
      "Answer realistic AI-generated interview questions tailored to your chosen role.",
  },
  {
    id: "03",
    icon: ChartColumn,
    title: "Get Instant Feedback",
    description:
      "Receive AI feedback, performance scores, and track your improvement over time.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <section id="how-it-works" className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="text-lg font-semibold uppercase tracking-widest text-[#00ABE4]">
              How It Works
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Practice Interviews in 3 Simple Steps
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Get interview-ready with a simple workflow designed to help you
              practice, improve, and track your progress.
            </p>
          </div>
          {/* Card */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.id}
                  className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Step Number */}

                  <p className="text-5xl font-bold text-[#00ABE4]/20">
                    {step.id}
                  </p>

                  {/* Icon */}

                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F1FA]">
                    <Icon size={28} className="text-[#00ABE4]" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
