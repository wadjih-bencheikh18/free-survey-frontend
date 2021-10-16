import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
          <div className="bg-indigo-600 fixed w-screen -mt-10">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className=" flex-1 flex items-center">
                  <p className="font-medium text-white truncate">
                    <a
                      href="/"
                      className="text-3xl font-extrabold tracking-tight block text-center"
                    >
                      Free Survey
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default NavBar;