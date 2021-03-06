import React, { Component } from "react";

class TakeQst extends Component {
  constructor(props) {
    super(props);
    this.state={
        id:this.props.qst.id,
        value:true,
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({value:value})
    this.props.validateAnswer(this.state.id,value);
  };
  render() {
    return (
      <div
        className={"bg-white shadow overflow-hidden sm:rounded-lg border m-10 "}
      >
        <div className="px-4 py-5 sm:px-6">
          <div className="w-full mt-5 ml-2">
            <h1 className=" text-2xl block break-normal mr-1 appearance-none w-full  uppercase tracking-wide text-gray-900 text-m font-bold mb-2">
              {this.props.qst.question}
            </h1>
            <p className="appearance-none break-normal  block w-full  text-gray-600">
              {this.props.qst.description}
            </p>
          </div>
          <div className="ml-2 mt-10">
            <div className="mt-2" onChange={this.handleChange}>
              <div className="mb-3">
                <label className="inline-flex items-center w-full">
                  <input
                    type="radio"
                    className="form-radio"
                    name={"radio" + this.props.qst.id}
                    value={true}
                    defaultChecked
                  />
                  <span className="ml-2 break-normal border rounded w-full py-2 pl-2">
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
                  />
                  <span className="ml-2 break-normal border rounded w-full py-2 pl-2">
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

export default TakeQst;
