import React, { Component } from 'react';

class Button2 extends Component {
    render(){
        return(
            <button onClick = {function(){
              alert("We gotta clicker ladies and gentlemen.");
            }}>
              Here, Click Me PLEASE!!
            </button>
        )
    }
}

export default Button2;