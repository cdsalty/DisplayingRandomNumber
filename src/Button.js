import React, { Component } from 'react';

class Button extends Component {
    render() {
      return(
        <button 
          onClick = { function() {
            alert("User Clicked as he was told!!!");
          }}
        >
          Click Me!
        </button>
      );
    }
}

export default Button; 