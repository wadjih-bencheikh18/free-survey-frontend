import * as React from "react";
import { Component } from 'react';

class AddQst extends Component {
    render() {
        return (
          <div className="bg-indigo-600 fixed w-screen -mt-10">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <p className="font-medium text-white truncate">
                    <a href="/" className="text-3xl font-extrabold tracking-tight block text-center">
                      Free Survey
                    </a>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <button
                    onClick={this.props.AddQst}
                    className="w-full sm:w-auto flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Add a question
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default AddQst;
