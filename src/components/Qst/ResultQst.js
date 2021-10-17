import React, { Component } from "react";

class ResultQst extends Component {
  render() {
    return (
      <div
        className={"bg-white shadow overflow-hidden sm:rounded-lg border m-10 "}
      >
        <div className="px-4 py-5 sm:px-6">
          <div className="w-full mt-5 ml-2">
            <h1 className=" text-2xl block break-normal appearance-none w-full  uppercase tracking-wide text-gray-900 text-m font-bold mb-2">
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
                  <span className="ml-2 border break-normal rounded w-full py-2 pl-2">
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
        </div>
        <div className="border-t border-gray-200"></div>
      </div>
    );
  }
}

export default ResultQst;
