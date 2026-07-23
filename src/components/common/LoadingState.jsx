import React from "react";

const LoadingState = ({ message = "Loading..." }) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <p className="mt-4 text-lg font-medium text-gray-600">
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingState;