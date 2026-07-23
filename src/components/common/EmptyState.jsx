import React from "react";

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display.",
}) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-red-600">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;