import React, { Component } from 'react';


class BrokenClick extends Component {
    constructor(props) {
      super(props);
      this.state = { clicked: false }
      this.handleClick = this.handleClick.bind(this);   // binding "this individual component" to set the context for handleClick so JavaScript knows what component to refer too. 
    }

    // Create a function that will be called by our onClick function | take e, event as arg
    // Dont forget to call it
    handleClick(e){
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

export default BrokenClick;