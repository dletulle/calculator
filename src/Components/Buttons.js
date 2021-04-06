import React from 'react';

const Buttons = (props) => {
    return (
      <div id="buttons">
        <button class="cero" onClick={props.click} id="clear">C</button>
        <button class="numbers" onClick={props.click} id="divide">/</button>
        <button class="numbers" onClick={props.click} id="multiply">x</button>
        <button class="numbers" onClick={props.click} id="seven">7</button>
        <button class="numbers" onClick={props.click} id="eight">8</button>
        <button class="numbers" onClick={props.click} id="nine">9</button>
        <button class="numbers" onClick={props.click} id="subtract">-</button>
        <button class="numbers" onClick={props.click} id="four">4</button>
        <button class="numbers" onClick={props.click} id="five">5</button>
        <button class="numbers" onClick={props.click} id="six">6</button>
        <button class="numbers" onClick={props.click} id="add">+</button>
        <button class="numbers" onClick={props.click} id="one">1</button>
        <button class="numbers" onClick={props.click} id="two">2</button>
        <button class="numbers" onClick={props.click} id="three">3</button>
        <button class="cero" onClick={props.click} id="zero">0</button>
        <button class="numbers" onClick={props.click} id="decimal">.</button>
        <button onClick={props.click} id="equals">=</button>
      </div>
    )
  }

  export default Buttons;