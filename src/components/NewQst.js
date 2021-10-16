import * as React from "react";
import { Component } from "react";

class NewQst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStyle: "",
      question: "",
      description: "",
      answeryes: "",
      answerno: "",
    };
    this.QuestionChange = this.QuestionChange.bind(this);
    this.DescriptionChange = this.DescriptionChange.bind(this);
    this.AnswerYesChange = this.AnswerYesChange.bind(this);
    this.AnswerNoChange = this.AnswerNoChange.bind(this);
    this.TestInputs = this.TestInputs.bind(this);
    this.DelQst = this.DelQst.bind(this);
  }
  TestInputs=()=>{
    
    if (this.state.question === "") {
      this.setState({
        errorStyle: "border-red-500",
      });
    } else {
      this.setState({
        errorStyle: "",
        question: "",
        description: "",
        answeryes: "",
        answerno: ""
      });
      this.props.PushQst({
        question: this.state.question,
        description: this.state.description,
        answeryes: this.state.answeryes || "Yes",
        answerno: this.state.answerno || "No",
      });
    }
  }
  QuestionChange(event) {
    this.setState({ question: event.target.value });
    if (this.state.question !== "") {
      this.setState({
        errorStyle: "",
      });
    } 
  }
  DescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  AnswerYesChange(event) {
    this.setState({ answeryes: event.target.value });
  }
  AnswerNoChange(event) {
    this.setState({ answerno: event.target.value });
  }
  DelQst(){
    this.setState({
      errorStyle: "",
      question: "",
      description: "",
      answeryes: "",
      answerno: "",
    });
    this.props.DelQst();
  }
  render() {
    return (
      <div
        className={
          "bg-white shadow overflow-hidden sm:rounded-lg border m-10 " +
          this.props.hidden
        }
      >
        <div className="px-4 py-5 sm:px-6">
            <div className="w-full mt-5">
              <h1
                className="block uppercase tracking-wide text-blue-500 text-m font-bold mb-2"
              >
                Question
              </h1>
              <input
                className={
                  "appearance-none block w-full font-bold text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " +
                  this.state.errorStyle
                }
                id="question"
                type="text"
                placeholder="(Require)"
                value={this.state.question}
                onChange={this.QuestionChange}
              />
              <input
                className="appearance-none block w-full  text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="description"
                type="text"
                placeholder="Description(optional)"
                value={this.state.description}
                onChange={this.DescriptionChange}
              />
            </div>
            <h1
              className="block mt-7 uppercase tracking-wide text-blue-500 text-m font-bold mb-2"
            >
              Options
            </h1>
            <div className="w-full mt-3 border-b-2 focus:border focus:border-blue-500 focus:rounded mb-3">
              <input
                className="appearance-none inline-block w-11/12  text-gray-700  py-3 px-4 leading-tight focus:outline-none "
                id="answeryes"
                type="text"
                placeholder="Yes(optional)"
                value={this.state.answeryes}
                onChange={this.AnswerYesChange}
              />
            </div>
            <div className="w-full mt-7 border-b-2 focus:border focus:border-blue-500 focus:rounded mb-3">
              <input
                className="appearance-none inline-block w-11/12  text-gray-700  py-3 px-4 leading-tight focus:outline-none "
                id="answerno"
                type="text"
                placeholder="No(optional)"
                value={this.state.answerno}
                onChange={this.AnswerNoChange}
              />
            </div>
            <div className="flex items-center justify-end mt-8 mb-4">
              <button type="button" onClick={this.DelQst}>
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
                onClick={this.TestInputs}
                type="button"
                className="bg-blue-500 text-white p-2 rounded mx-7"
              >
                Done
              </button>
            </div>
        </div>
        <div className="border-t border-gray-200"></div>
      </div>
    );
  }
}

export default NewQst;
