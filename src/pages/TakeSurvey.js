import React, { Component } from "react";
import AnswerQst from "../components/AnswerQst";
import NavBar from "../components/NavBar";
import axios from "axios";
import { navigate } from "gatsby-link";
class TakeSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Number(window.location.href.split("?", 2)[1]),
      survey: {
        qsts: [],
      },
      answers: [],
    };
    this.validateAnswer = this.validateAnswer.bind(this);
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/getSurveys/" + this.state.id)
      .then((res) => {
        this.setState({
          survey: res.data,
        });
        this.state.survey.qsts.map((element) => {
          this.setState((prevState) => ({
            answers: [...prevState.answers, { id: element.id, answer: true }],
          }));
          return true;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  save() {
    axios
      .put(
        `http://localhost:8080/AddAnswer/${this.state.id}`,
        this.state.answers
      )
      .then((res) => {
        navigate("/Submitted");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  validateAnswer(id, answer) {
    var index = this.state.answers.findIndex((obj) => obj.id === id);
    if (index < 0) {
      alert("error");
      return;
    }
    var answers = [...this.state.answers];
    answers[index].answer = answer === "true" ? true : false;
    this.setState({ answers: answers });
    this.setState({
      answers: [...answers],
    });
  }
  render() {
    return (
      <div className="bg-gray-50 pt-10">
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
        {this.state.survey.qsts
          .slice(0)
          .reverse()
          .map((element) => {
            return (
              <AnswerQst
                key={element.id}
                qst={element}
                validateAnswer={this.validateAnswer}
              />
            );
          })}
        <div className={"flex items-center justify-center mx-14"}>
          <button
            onClick={this.save}
            className="bg-blue-500 rounded px-14 py-3 block uppercase tracking-wide text-white text-m font-bold "
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default TakeSurvey;
