import * as React from "react";
import AddQst from "../components/addQst";
import NewQst from "../components/NewQst";
import { Component } from "react";
import Qst from "../components/Qst";

class NewSurvey extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      id: 0,
      AddQst: true,
      qsts: [],
      submit: false,
    };
    this.AddNewQst = this.AddNewQst.bind(this);
    this.DelNewQst = this.DelNewQst.bind(this);
    this.PushQst = this.PushQst.bind(this);
    this.RmQst = this.RmQst.bind(this);
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
  render() {
    return (
      <div className="bg-gray-50 min-h-screen pt-10">
        <AddQst AddQst={this.AddNewQst} />
        <NewQst
          DelQst={this.DelNewQst}
          hidden={this.state.AddQst ? "" : "hidden"}
          PushQst={this.PushQst}
        />
        {this.state.qsts
          .slice(0)
          .reverse()
          .map((element) => {
            return <Qst qst={element} RmQst={this.RmQst} />;
          })}
        <div
          className={
            "flex items-center justify-center mx-14 " +
            (this.state.submit ? "" : "hidden")
          }
        >
          <button className="bg-blue-500 rounded px-14 py-3 block uppercase tracking-wide text-white text-m font-bold ">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default NewSurvey;
