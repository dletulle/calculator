import React from 'react';

const Display = (props) => {
    return (
      <div id="container">
        <p id="result">{props.result}</p>
        <p id="display">{props.display}</p>
        {/*for later*/}
      </div>
    )
    }
    export default Display;