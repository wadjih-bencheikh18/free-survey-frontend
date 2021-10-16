import * as React from "react";

const Qst = (props) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg border m-10">
      <div className="px-4 py-5 sm:px-6">
        <form class="w-full">
          <div class="w-full ">
            <label
              class="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
              for="question"
            >
              Question
            </label>
            <input
              class="appearance-none block w-full  text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
        </form>
      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default Qst;
