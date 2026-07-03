import React from "react";
import { BrainCircuit, Zap, TrendingUp, History } from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Generated Questions",
    description:
      "Practice with interview questions generated specifically for your selected role and experience level.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Receive immediate AI feedback to understand your strengths and identify areas for improvement.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Monitor interview scores over time and measure your improvement with every practice session.",
  },
  {
    icon: History,
    title: "Interview History",
    description:
      "Review previous interview sessions, answers, scores, and AI feedback whenever you want.",
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="text-lg font-semibold uppercase tracking-widest text-[#00ABE4]">
              Features
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Everything You Need to Prepare
              <br />
              for Your Next Interview
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              NextInterview provides practical AI-powered tools that help you
              prepare smarter, build confidence, and improve interview
              performance.
            </p>
          </div>
          {/* Feature Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ABE4] hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E9F1FA]">
                    <Icon size={30} className="text-[#00ABE4]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
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

export default Features;
