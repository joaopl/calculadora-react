import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    };
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button className="lighter-gray">AC</button>
            <button className="lighter-gray">±</button>
            <button className="lighter-gray">%</button>
            <button className="orange">÷</button>
          </div>
          <div className="row">
            <button className="gray">7</button>
            <button className="gray">8</button>
            <button className="gray">9</button>
            <button className="orange">×</button>
          </div>
          <div className="row">
            <button className="gray">4</button>
            <button className="gray">5</button>
            <button className="gray">6</button>
            <button className="orange">−</button>
          </div>
          <div className="row">
            <button className="gray">1</button>
            <button className="gray">2</button>
            <button className="gray">3</button>
            <button className="orange">+</button>
          </div>
          <div className="row">
            <button style={{width: "6.6em", textAlign: "left", paddingLeft: "1em"}} className="gray">0</button>
            <button className="gray">.</button>
            <button className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
