import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class MySite extends React.Component {
  render() {
    return (
      <div className="grid">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MySite;
