import React from "react";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      message:
        "Hello, I am a freelance web-developer using React.JS and CSS Grid. Please view my",
      resume: false
    };
    this.DisplayResume = this.DisplayResume.bind(this);
    this.Home = this.Home.bind(this);
  }
  DisplayResume() {
    this.setState({
      message: (
        <div>
          <p className="pad">Acadia University 2015-2019</p>
          <ul className="pad">
            <li>Experience with the latest web technologies.</li>
            <li>Great understanding of React and styling.</li>
            <li>Backend experience with PHP and Node.JS.</li>
            <li>
              Object-Oriented programming with C++, Java, and other languages
            </li>
            <li>Machine learning and data science with Python</li>
          </ul>
          <p className="pad">
            This website is a dynamically rendered React App using stateful
            components in a component hierarchy.{" "}
            <span className="resume" onClick={this.Home}>
              Return Home
            </span>
          </p>
        </div>
      ),
      resume: true
    });
  }

  Home() {
    this.setState({
      message:
        "Hello, I am a freelance web-developer using React.JS and CSS Grid. Please view my",
      resume: false
    });
  }

  render() {
    return (
      <div>
        <p className="marg">
          {this.state.message}{" "}
          <span className="resume" onClick={this.DisplayResume}>
            {this.state.resume === false ? "resume." : null}
          </span>
        </p>
      </div>
    );
  }
}

export default Content;
