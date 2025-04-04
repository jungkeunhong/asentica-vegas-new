
import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const LoadingSpinner = ({ size = "md", color = "asentica-brown" }: LoadingSpinnerProps) => {
  const sizeClass = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorClass = {
    "asentica-brown": "border-asentica-brown",
    "asentica-gold": "border-asentica-gold",
    "white": "border-white",
  }[color] || "border-asentica-brown";

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClass[size]} border-2 ${colorClass} border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
