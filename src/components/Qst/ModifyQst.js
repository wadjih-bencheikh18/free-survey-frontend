import React, { Component } from "react";

class ModifyQst extends Component {
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
          <div className="w-full mt-5 ml-2">
            <h1 className=" text-2xl break-normal block uppercase tracking-wide text-gray-900 text-m font-bold mb-2">
              {this.props.qst.question}
            </h1>
            <p className="appearance-none break-normal block w-full  text-gray-600">
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
                    name={"radio" + this.props.qst.id}
                    value={true}
                    checked={this.props.value}
                    readOnly
                  />
                  <span className="ml-2 border rounded break-normal w-full py-2 pl-2">
                    {this.props.qst.answeryes}
                  </span>
                </label>
              </div>
              <div className="mb-3 ">
                <label className="inline-flex items-center w-full">
                  <input
                    type="radio"
                    className="form-radio"
                    name={"radio" + this.props.qst.id}
                    value={false}
                    checked={!this.props.value}
                    readOnly
                  />
                  <span className="ml-2 border break-normal rounded w-full py-2 pl-2">
                    {this.props.qst.answerno}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            className="float-right mr-7 mt-5 mb-8"
            onClick={this.deleteQst}
          >
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
        </div>
      </div>
    );
  }
}

export default ModifyQst;
