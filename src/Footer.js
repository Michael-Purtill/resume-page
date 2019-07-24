import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { message: "email" };
    this.NiceDisplay = this.NiceDisplay.bind(this);
    this.BadDisplay = this.BadDisplay.bind(this);
  }
  NiceDisplay() {
    this.setState({ message: "michaelpurtill123@hotmail.com" });
  }
  BadDisplay() {
    this.setState({ message: "email" });
  }

  render() {
    return (
      <div className="footer">
        <p
          className="marg"
          onMouseOver={this.NiceDisplay}
          onMouseOut={this.BadDisplay}
        >
          {this.state.message}
        </p>
        <a
          href="https://codesandbox.io/s/quizzical-currying-tty62"
          className="marg resume"
          target="blank"
        >
          view the sourcecode for this page
        </a>
      </div>
    );
  }
}

export default Footer;
