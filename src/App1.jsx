import React, { Component } from "react";

// properties
// method

// component will rerender only & only when
// props change
// state change

class App1 extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(({ counter }) => {
      return { counter: counter + 1 };
    });
  };

  decrement = () => {
    this.setState(({ counter }) => {
      return { counter: counter - 1 };
    });
  };

  render() {
    console.log("render");
    const { name, designation } = this.props;
    const { counter } = this.state;

    return (
      <>
        <h1>{name}</h1>
        <p
          style={{
            textDecoration: "underline",
          }}
        >
          {designation}
        </p>
        <button onClick={this.increment}>Increment</button>
        <p>{counter}</p>
        <button onClick={this.decrement}>Decrement</button>
        {counter > 5 ? (
          <h2>Counter is greater then 5</h2>
        ) : (
          <h2>Counter is less then 5</h2>
        )}
      </>
    );
  }
}

export default App1;
