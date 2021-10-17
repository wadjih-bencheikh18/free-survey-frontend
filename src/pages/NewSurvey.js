import * as React from "react";
import AddQst from "../components/AddQstNav";
import NewQst from "../components/NewQst";
import { Component } from "react";
import ModifyQst from "../components/Qst/ModifyQst";
import { navigate } from "gatsby-link";
import axios from "contentful-management/node_modules/axios";

class NewSurvey extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      id: 0,
      title: "",
      description: "",
      AddQst: true,
      qsts: [],
      submit: false,
      errorStyle: "",
    };
    this.AddNewQst = this.AddNewQst.bind(this);
    this.DelNewQst = this.DelNewQst.bind(this);
    this.PushQst = this.PushQst.bind(this);
    this.RmQst = this.RmQst.bind(this);
    this.TitleChange = this.TitleChange.bind(this);
    this.DescriptionChange = this.DescriptionChange.bind(this);
    this.save = this.save.bind(this);
  }
  DelNewQst() {
    this.setState({ AddQst: false });
  }
  AddNewQst() {
    this.setState({ AddQst: true });
  }
  PushQst(newqst) {
    newqst.id = this.state.id;
    this.setState({ AddQst: false });
    this.setState({
      id: this.state.id + 1,
    });
    this.setState({ submit: true });
    this.setState((prevState) => ({
      qsts: [...prevState.qsts, newqst],
    }));
  }
  RmQst(rmid) {
    var qsts = [...this.state.qsts.filter((item) => item.id !== rmid)];
    if (this.state.qsts.length === 1) {
      this.setState({ submit: false });
    }
    this.setState({ qsts: qsts });
  }

  TitleChange(event) {
    this.setState({ title: event.target.value });
    if (this.state.title !== "") {
      this.setState({
        errorStyle: "",
      });
    }
  }

  DescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  results() {
    if (this.state.title === "") {
      this.setState({
        errorStyle: "border-red-500",
      });
    } else {
      const id = Number(Date.now());
      axios
        .post("http://localhost:8080/AddSurvey", {
          id: id,
          title: this.state.title,
          description: this.state.description,
          qsts: this.state.qsts,
          answers: [],
        })
        .then(() => {
          navigate("/Results?" + id);
        })
        .catch((err) => {
          navigate("/404/", { state: { err } });
        });
    }
  }
  save() {
    if (this.state.title === "") {
      this.setState({
        errorStyle: "border-red-500",
      });
    } else {
      const id = Number(Date.now());
      axios
        .post("http://localhost:8080/AddSurvey", {
          id: id,
          title: this.state.title,
          description: this.state.description,
          qsts: this.state.qsts,
          answers: [],
        })
        .then(() => {
          navigate("/CopyLink?" + id);
        })
        .catch((err) => {
            navigate("/404/", { state :{ err }});
        });
    }
  }
  render() {
    return (
      <div className="bg-gray-50 min-h-screen py-10">
        <AddQst AddQst={this.AddNewQst} />
        <div className="mx-10 mt-10">
          <input
            className={
              "bg-gray-50 text-3xl appearance-none block w-full font-bold text-grey-900 placeholder-blue-400 border-b-2 focus:border-blue-500 py-3 px-4 mb-3 leading-tight focus:outline-none " +
              this.state.errorStyle
            }
            id="question"
            type="text"
            placeholder="Survey Title"
            value={this.state.title}
            onChange={this.TitleChange}
            autocomplete="off"
          />
          <input
            className="appearance-none block w-full shadow text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="description"
            type="text"
            placeholder="Description(optional)"
            value={this.state.description}
            onChange={this.DescriptionChange}
            autocomplete="off"
          />
        </div>

        <NewQst
          DelQst={this.DelNewQst}
          hidden={this.state.AddQst ? "" : "hidden"}
          PushQst={this.PushQst}
        />
        {this.state.qsts.map((element) => {
          return (
            <ModifyQst
              key={element.id}
              qst={element}
              value={true}
              RmQst={this.RmQst}
            />
          );
        })}
        <div
          className={
            "flex items-center justify-center mx-14 " +
            (this.state.submit ? "" : "hidden")
          }
        >
          <button
            onClick={this.save}
            className="ml-5 hover:bg-indigo-600 bg-blue-500 rounded border  px-14 py-3 block uppercase tracking-wide text-white text-m font-bold "
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewSurvey;
