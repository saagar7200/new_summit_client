import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-3xl font-bold">Page Not Found</h1>
        <p className="text-center">404. not found</p>
        <Link
          className="text-center w-50 py-3 bg-blue-500 text-white font-bold rounded-md"
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
