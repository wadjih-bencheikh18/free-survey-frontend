import React, { Component } from "react";

class Submitted extends Component {
  render() {
    return (
      <div className="bg-gray-50 min-h-screen md:py-50 py-60 px-5">
        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="text-5xl block text-center mb-10">Free Survey</span>
          <span className="text-3xl mt-3 block text-center text-blue-500">
            Thank you for taking this survey
          </span>
        </h2>
      </div>
    );
  }
}

export default Submitted;
