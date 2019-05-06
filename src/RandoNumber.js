import React, { Component } from 'react';

class RandoNumber extends Component {
    constructor(props) {
      super(props);
      this.state = { num: 0 };
      this.makeTimer();
    }
    // After I created maxNumber in App.js, I then proceeded to create the function for it.
    makeTimer(){
        setInterval(() => {
          let rand = Math.floor(Math.random() * this.props.maxNumber);
          this.setState({ num: rand }); // CAN'T USE this.setState = ({ AS I ORIGINAL DID IN ERROR})
        }, 1000);
    }

    render() {
        return(<h1>{this.state.num}</h1>);
    }
}

export default RandoNumber;