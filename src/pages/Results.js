import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ShowQst from "../components/ShowQst";
import surveys from "../data/Surveys";

const id = 0;
class Results extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      id: id,
      answer: 0,
      survey: surveys.find((e) => e.id === id),
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  previous() {
    if (this.state.answer > 0) this.setState({ answer: this.state.answer - 1 });
  }
  next() {
    if (this.state.answer < this.state.survey.answers.length - 1)
      this.setState({ answer: this.state.answer + 1 });
  }
  render() {
    return (
      <div className=" bg-gray-50 pt-10">
        <NavBar />
        <div className="mx-10 mt-10">
          <h1
            className={
              "bg-gray-50 text-3xl appearance-none block w-full font-bold text-gray-900 border-b focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            }
          >
            {this.state.survey.title}
          </h1>
          <h1 className="bg-white appearance-none block w-full  text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            {this.state.survey.description}
          </h1>
        </div>
        <div className="flex justify-center align-middle mt-10">
          <button onClick={this.previous}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="mx-10">Answer number : {this.state.answer + 1}</h1>
          <button onClick={this.next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {this.state.survey.answers[this.state.answer].map((element) => {
          const qst = this.state.survey.qsts.find((e) => e.id === element.id);
          return <ShowQst key={element.id} qst={qst} value={element.answer} />;
        })}
      </div>
    );
  }
}

export default Results;
