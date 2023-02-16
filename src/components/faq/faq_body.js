import "./faq.css";
import { React, Component } from "react";

// import Chevron from "./chevron.svg";
import QA from "./faq.json";

class FAQ extends Component {
  state = {
    selected: null,
  };

  toggle = (i) => {
    if (this.state.selected === i) {
      return this.setState({ selected: i });
    }
    this.setState({ selected: i });
  };

  render() {
    return (
      <div className="faq-wrapper">
        <div className="accordion">
          <h1 className="faq-title">FAQ</h1>
          {QA.map((item, i) => (
            <div className="faq-items">
              <div className="faq-item">
                <div className="faq-question" onClick={() => this.toggle(i)}>
                  <h2>{item.question}</h2>
                  <span className="faq-sign">
                    {this.state.selected === i ? "-" : "+"}
                  </span>
                </div>
              </div>
              <div
                className={
                  this.state.selected === i ? "faq-content-show" : "faq-content"
                }
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FAQ;
