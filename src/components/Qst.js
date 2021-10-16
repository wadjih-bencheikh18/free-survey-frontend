import React, { Component } from "react";

class Qst extends Component {
  constructor(props) {
    super(props);
    this.deleteQst = this.deleteQst.bind(this);
  }
  deleteQst() {
    this.props.RmQst(this.props.qst.id);
  }
  render() {
    return (
      <div
        className={"bg-white shadow overflow-hidden sm:rounded-lg border m-10 "}
      >
        <div className="px-4 py-5 sm:px-6">
          <button className="float-right mr-3" onClick={this.deleteQst}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="grey"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="w-full mt-5 ml-2">
            <h1 className=" text-2xl block uppercase tracking-wide text-gray-900 text-m font-bold mb-2">
              {this.props.qst.question}
            </h1>
            <p className="appearance-none block w-full  text-gray-600">
              {this.props.qst.description}
            </p>
          </div>
          <div className="ml-2 mt-10">
            <div className="mt-2">
              <div className="mb-3">
                <label className="inline-flex items-center w-full">
                  <input
                    type="radio"
                    className="form-radio"
                    name="radio"
                    value="1"
                    checked
                  />
                  <span className="ml-2 border rounded w-full py-2 pl-2">
                    {this.props.qst.answeryes}
                  </span>
                </label>
              </div>
              <div className="mb-3 ">
                <label className="inline-flex items-center w-full">
                  <input
                    type="radio"
                    className="form-radio"
                    name="radio"
                    value="2"
                  />
                  <span className="ml-2 border rounded w-full py-2 pl-2">
                    {this.props.qst.answerno}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200"></div>
      </div>
    );
  }
}

export default Qst;
