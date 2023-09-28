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
            <button>AC</button>
            <button>±</button>
            <button>%</button>
            <button>÷</button>
          </div>
          <div className="row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
          </div>
          <div className="row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>−</button>
          </div>
          <div className="row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          <div className="row">
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
