import { navigate } from "gatsby-link";
import React, { Component } from "react";

class CopyLink extends Component {
  results(){
    navigate("/Results?" + Number(window.location.href.split("?", 2)[1]));
  }
  render() {
    return (
      <div className="bg-gray-50 min-h-screen  md:py-36 py-40 px-5">
        <h2 className=" font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="sm:text-5xl text-4xl block text-center mb-10">
            Free Survey
          </span>
          <span className="sm:text-2xl text-xl mt-3 block mb-2 text-center text-blue-500">
            Creating survey successed
          </span>

          <span className="sm:text-2xl text-xl  mt-3 mb-10 block text-center text-blue-500">
            Copy your survey link, or see results
          </span>
        </h2>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "http://localhost:8000/TakeSurvey?" +
                  (window.location.href.split("?", 2)[1] || "")
              );
            }}
            type="button"
            className="shadow text-center px-4 md:px-5  border-transparent md:text-base text-sm font-medium  text-white bg-blue-500 hover:bg-blue-500 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center "
          >
            <span className="text-white ">
              <span
                className="hidden sm:inline text-white"
                aria-hidden="true"
              ></span>
              http://localhost:8000/ TakeSurvey?
              {window.location.href.split("?", 2)[1] || ""}
            </span>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8
           8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 
           0 2.828 0 3.414.586C16 5.172 16 6.114 16 8"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:text-base text-sm mt-6 flex justify-center">
          <button
            onClick={this.results}
            className="bg-blue-500 rounded px-14 py-3 block uppercase tracking-wide text-white text-m font-bold "
          >
            Results
          </button>
        </div>
      </div>
    );
  }
}

export default CopyLink;
