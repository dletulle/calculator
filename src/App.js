import './App.css';
import React from 'react';
import Buttons from './Components/Buttons';
import Display from './Components/Display';

const math = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "/": (num1, num2) => num1 / num2,
  "x": (num1, num2) => num1 * num2
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      number: "0",
      numbers: [],
      operations: [],
      display: "0",
      result: ""
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  handleClick (e) {
    const numberPressed = e.target.textContent
    const addNumbers = this.state.numbers.slice(0);
    const addOperators = this.state.operations.slice(0);
    const addDisplay = this.state.display.slice(0);
    
    if (numberPressed == "C") {
      // Clear all states
      this.setState({
        number: "0",
        numbers: [],
        operations: [],
        display: "0",
        result: ""})
    } else if (numberPressed == "=" && /\d/.test(addDisplay[addDisplay.length - 1])) {
      this.calculate();
    } else if (math.hasOwnProperty(numberPressed) 
               && !/[+\/x-]-$/.test(addDisplay.concat(numberPressed))) {
      // If operator is entered twice, replace the last operator with the current pressed.
      if (/[+\/x]-[+\/x]/.test(addDisplay.concat(numberPressed))) {
        addOperators.pop();
        this.setState({
          display: addDisplay.slice(0, -2) + numberPressed,
          number: ""})
      } else if (/[+\/x]{2}/.test(addDisplay.concat(numberPressed))) {
        addOperators.pop();
        this.setState({display: addDisplay.slice(0, -1) + numberPressed})
      } else {
        console.log(this.state.number)
        addNumbers.push(parseFloat(this.state.number));
        this.setState({
          numbers: addNumbers,
          number: "",
          display: addDisplay.concat('', numberPressed)});
      }
      addOperators.push(numberPressed);
      this.setState({operations: addOperators});
    } else if (/[\d-.]/.test(numberPressed)
              && !/[-.]{2}|\.\d+\./.test(this.state.display.concat(numberPressed))) {
      // Update number and display states and calulate the results
      if (addDisplay === "0") {
        this.setState({
          number: numberPressed, 
          display: numberPressed});
      } else {
        this.setState({
          number: this.state.number.concat('', numberPressed), 
          display: addDisplay.concat('', numberPressed)});
      }
    }
  }
  
  calculate () {
    // Run the calulations and set the equals state
    if (this.state.numbers.length > 0) {
      let firstNum = this.state.numbers[0];
      let secondNumIndex = 1;
      for (let i of this.state.operations) {
        if (secondNumIndex <= this.state.numbers.length - 1) {
          firstNum = math[i](firstNum, this.state.numbers[secondNumIndex]);
        } else {
          firstNum = math[i](firstNum, parseFloat(this.state.number));
        }
        secondNumIndex++;
      }
      this.setState({
        result: this.state.display + " = " + firstNum.toString(),
        display: firstNum.toString(),
        number: firstNum.toString(),
        numbers: [],
        operations: []})
    }
  }
  
  render () {
    return (
    <div id="calculator">
      <Display result={this.state.result} display={this.state.display}/>
      <Buttons click={this.handleClick}/>
    </div>
    )
  }
}

export default App;
