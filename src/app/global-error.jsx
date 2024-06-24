"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi"; // Import alert triangle icon from an icon library

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-error-purple text-white">
        <FiAlertTriangle className="text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-8">
          {error
            ? `An error ${error} occurred on the server.`
            : "An unexpected error occurred."}
        </p>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
      ;
    </div>
  );
}
