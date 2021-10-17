import * as React from "react"

export default ({ location }) => {
  return (
    <div className="bg-gray-50 min-h-screen md:py-56 py-60 px-5">
      <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="sm:text-5xl text-4xl block text-center mb-10">
          Error
        </span>
        <span className="sm:text-3xl text-2xl mt-3 block text-center text-indigo-600">
          {location.state.err.message}
        </span>
      </h2>
    </div>
  );
};

