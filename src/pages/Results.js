import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Qst from "../components/Qst";
import surveys from "../data/Surveys";
const id = 0;
class Results extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      id: id,
      answer: 1,
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
      <div className="pt-10">
        <NavBar />
        <div className="flex justify-evenly align-middle mt-10">
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
          <h1>Answer number : {this.state.answer + 1}</h1>
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
          var qst = this.state.survey.qsts.find((e) => e.id === element.id);
          return <Qst qst={qst} value={element.answer} RmQst={this.RmQst} />;
        })}
      </div>
    );
  }
}

export default Results;
