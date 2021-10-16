import React, { Component } from "react";

class CopyLink extends Component {
  render() {
    return (
      <div className="bg-gray-50  md:py-44 py-60 px-5">
        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="text-5xl block text-center mb-20">Free Survey</span>
          <span className="text-2xl mt-3 block text-center text-indigo-600">
            Copy your survey link
          </span>
        </h2>
        <div className="mt-6 grid grid-cols-12 gap-4 ">
          <button
            type="button"
            className="lg:col-start-5 lg:col-span-4 md:col-start-4 md:col-span-6 col-start-3 md: col-span-8 shadow text-center px-5  border-transparent text-base font-medium  text-white bg-indigo-600 hover:bg-indigo-700 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 "
          >
            <span className="text-white ">
              <span
                className="hidden sm:inline text-white"
                aria-hidden="true"
              ></span>
              http://localhost:3000/6584656184
            </span>
            <span className="sr-only">(click to copy to clipboard)</span>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8
           8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 
           0 2.828 0 3.414.586C16 5.172 16 6.114 16 8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default CopyLink;
