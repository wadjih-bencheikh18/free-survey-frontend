import * as React from "react";

const Qst = (props) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg border m-10">
      <div className="px-4 py-5 sm:px-6">
        <form class="w-full">
          <div class="w-full mt-5">
            <label
              class="block uppercase tracking-wide text-blue-500 text-m font-bold mb-2"
              for="question"
            >
              Question
            </label>
            <input
              class="appearance-none block w-full font-bold text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="question"
              type="text"
            />
            <input
              class="appearance-none block w-full  text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="description"
              type="text"
              placeholder="Description(optional)"
            />
          </div>
          <div class="w-full mt-7 border-b-2 focus:border focus:border-blue-500 focus:rounded mb-3">
            <input
              class="appearance-none inline-block w-11/12  text-gray-700  py-3 px-4 leading-tight focus:outline-none "
              id="answeryes"
              type="text"
              placeholder="Answer Yes text"
            />
          </div>
          <div class="w-full mt-7 border-b-2 focus:border focus:border-blue-500 focus:rounded mb-3">
            <input
              class="appearance-none inline-block w-11/12  text-gray-700  py-3 px-4 leading-tight focus:outline-none "
              id="answerno"
              type="text"
              placeholder="Answer No text"
            />
          </div>
          <div className="flex items-center justify-end mt-8 mb-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="grey"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mx-7"
            >
              Done
            </button>
          </div>
        </form>
      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default Qst;
