import { navigate } from "gatsby-link";
import * as React from "react";
import "../css/index.css";
import { Component } from "react";

class IndexPage extends Component {
  getStarted(event) {
    navigate("/NewSurvey/");
  }
  render() {
    return (
      <div className="bg-gray-50 md:py-56 py-60 px-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-center">Free Survey</span>
          <span className="mt-3 block text-center text-blue-500">
            Create your survey for FREE!
          </span>
        </h2>
        <div className="mt-10 flex justify-center ">
          <button
            onClick={this.getStarted}
            className="shadow text-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500"
          >
            Get started
          </button>
        </div>
      </div>
    );
  }
}

export default IndexPage;
