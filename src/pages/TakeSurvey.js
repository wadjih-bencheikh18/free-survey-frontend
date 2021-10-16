import React, { Component } from "react";
import surveys from "../data/Surveys";
import AnswerQst from "../components/AnswerQst";
import NavBar from "../components/NavBar";
const id = 0;
class TakeSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: id,
      survey: surveys.find((e) => e.id === id),
      answers: [],
    };
    this.validateAnswer = this.validateAnswer.bind(this);
  }
  save() {
    surveys.find((e) => e.id === id).answers.push([...this.state.answers]);
  }
  validateAnswer(id, answer) {
    console.log(this.state.answers);
    if (this.state.answers.find((e) => e.id === id)) {
      var answers = [...this.state.answers.filter((item) => item.id !== id)];
      this.setState({ answers: answers });
    }
    this.setState((prevState) => ({
      answers: [...prevState.answers, { id: id, answer: answer }],
    }));
  }
  render() {
    return (
      <div className="pt-10">
        <NavBar />
        {this.state.survey.qsts
          .slice(0)
          .reverse()
          .map((element) => {
            return (
              <AnswerQst qst={element} validateAnswer={this.validateAnswer} />
            );
          })}
        <div className={"flex items-center justify-center mx-14"}>
          <a
            href="/Submitted"
            onClick={this.save}
            className="bg-blue-500 rounded px-14 py-3 block uppercase tracking-wide text-white text-m font-bold "
          >
            Submit
          </a>
        </div>
      </div>
    );
  }
}

export default TakeSurvey;
