import axios from "contentful-management/node_modules/axios";
import { navigate } from "gatsby-link";
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ResultQst from "../components/Qst/ResultQst";
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(window.location.href.split("?", 2)[1]),
      answerid: 0,
      survey: {
        qsts: [],
        answers: [[]],
      },
      answer: [],
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/getSurveys/" + this.state.id)
      .then((res) => {
        this.setState({
          survey: res.data,
        });
        this.setState({
          answer: this.state.survey.answers[this.state.answerid],
        });
      })
      .catch((err) => {
       navigate("/404/", { state: { err } });
      });
  }
  previous() {
    if (this.state.answerid > 0) {
      this.setState({
        answer: this.state.survey.answers[this.state.answerid - 1],
        answerid: this.state.answerid - 1,
      });
      this.setState({});
    }
  }
  next() {
    if (this.state.answerid < this.state.survey.answers.length - 1)
      this.setState({
        answer: this.state.survey.answers[this.state.answerid + 1],
        answerid: this.state.answerid + 1,
      });
  }
  viewAnswers() {}
  render() {
    return (
      <div className="min-h-screen bg-gray-50 py-10 h-screen">
        <NavBar />
        <div className="mx-10 mt-10">
          <h1
            className={
              "bg-gray-50 text-3xl appearance-none block w-full font-bold text-gray-900 border-b focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            }
          >
            {this.state.survey.title}
          </h1>
          <h1
            className={
              "bg-white appearance-none block w-full  text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " +
              (this.state.survey.description === "" ? "hidden" : "")
            }
          >
            {this.state.survey.description}
          </h1>
        </div>
        <div
          className={
            "flex justify-center align-middle mt-10 " +
            (this.state.survey.answers.length === 0 ? "hidden" : "")
          }
        >
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
          <h1 className="mx-10">
            Answer {this.state.answerid + 1}/{this.state.survey.answers.length}
          </h1>
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
        {this.state.survey.answers.length > 0 ? (
          this.state.answer.map((element) => {
            const qst = this.state.survey.qsts.find((e) => e.id === element.id);
            return (
              <ResultQst key={element.id} qst={qst} value={element.answer} />
            );
          })
        ) : (
          <div className="h-auto font-semibold flex justify-center mt-40 text-2xl leading-tight">
            <h1>No Answers Yet...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Results;
