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

  handleDigitClick = (digit) => {
    this.setState((prevState) => ({
      display: prevState.display === '0' ? digit : prevState.display + digit,
      currentInput: prevState.currentInput + digit,
    }));
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      display: '0',
      currentInput: '',
      previousInput: prevState.display,
      operator: operator,
    }));
  };

  handleEqualClick = () => {
    const { currentInput, previousInput, operator } = this.state;
    if (currentInput && previousInput && operator) {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(previousInput) + parseFloat(currentInput);
          break;
        case '-':
          result = parseFloat(previousInput) - parseFloat(currentInput);
          break;
        case '*':
          result = parseFloat(previousInput) * parseFloat(currentInput);
          break;
        case '/':
          result = parseFloat(previousInput) / parseFloat(currentInput);
          break;
        default:
          return;
      }
      this.setState({
        display: result.toString(),
        currentInput: result.toString(),
        previousInput: '',
        operator: null,
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    });
  };

  handlePercentageClick = () => {
    const { currentInput } = this.state;
    if (currentInput) {
      const percentage = (parseFloat(currentInput) / 100).toString();
      this.setState({
        display: percentage,
        currentInput: percentage,
      });
    }
  };

  handleNegateClick = () => {
    const { currentInput } = this.state;
    if (currentInput) {
      const negatedValue = (parseFloat(currentInput) * -1).toString();
      this.setState({
        display: negatedValue,
        currentInput: negatedValue,
      });
    }
  };

  handleKeyPress = (event) => {
    const { key } = event;
    if (/[0-9]/.test(key)) {
      this.handleDigitClick(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      this.handleOperatorClick(key);
    } else if (key === '=' || key === 'Enter') {
      this.handleEqualClick();
    } else if (key === 'Escape') {
      this.handleClearClick();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleClearClick()} className="lighter-gray">AC</button>
            <button onClick={() => this.handleNegateClick()} className="lighter-gray">±</button>
            <button onClick={() => this.handlePercentageClick()} className="lighter-gray">%</button>
            <button onClick={() => this.handleOperatorClick('/')} className="orange">÷</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleDigitClick('7')} className="gray">7</button>
            <button onClick={() => this.handleDigitClick('8')} className="gray">8</button>
            <button onClick={() => this.handleDigitClick('9')} className="gray">9</button>
            <button onClick={() => this.handleOperatorClick('*')} className="orange">×</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleDigitClick('4')} className="gray">4</button>
            <button onClick={() => this.handleDigitClick('5')} className="gray">5</button>
            <button onClick={() => this.handleDigitClick('6')} className="gray">6</button>
            <button onClick={() => this.handleOperatorClick('-')} className="orange">−</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleDigitClick('1')} className="gray">1</button>
            <button onClick={() => this.handleDigitClick('2')} className="gray">2</button>
            <button onClick={() => this.handleDigitClick('3')} className="gray">3</button>
            <button onClick={() => this.handleOperatorClick('+')} className="orange">+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleDigitClick('0')} style={{width: "6.6em", textAlign: "left", paddingLeft: "1em"}} className="gray">0</button>
            <button onClick={() => this.handleDigitClick('.')} className="gray">.</button>
            <button onClick={() => this.handleEqualClick()} className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
