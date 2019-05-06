import React, { Component } from 'react';


// Using alternate, non-javascript syntax
class BrokenClick2 extends Component {
      state = { clicked: false };
      //this.handleClick = this.handleClick.bind(this);   // binding "this individual component" to set the context for handleClick so JavaScript knows what component to refer too. 
      handleClick = (e) => {
        this.setState({ clicked : true })
    }

    render(){
        return (
          <div>
            <h1>{ this.state.clicked ? "YOU PRESSED A BUTTON!!" : "STILL WAITING" }</h1>
                        {/* ? = if clicked and then : else "Still Waiting"; still waiting is false paramater */}
            <button onClick = {this.handleClick}>You can do it... Press HERE</button>
          </div>
        );
    }
}

export default BrokenClick2;