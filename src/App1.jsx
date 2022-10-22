import React, { Component, createRef } from "react";

// properties
// method

// component will rerender only & only when
// props change
// state change

// 4 Stages

// 1. Mounting

// before html converts in DOM element

// -> constructor
// -> getDerivedStateFromProps
// -> render

// Updating

// UnMounting

// Error

// Props are immutable
//

class App1 extends Component {
  // base on props assign new state value
  // can call only once
  h1Ref = createRef();
  counterRef = createRef();

  constructor(props) {
    super(props);
    console.log("constructor", props);
    this.state = {
      counter: 0,
      greet: `Hello, ${props.name}`,
      comment: null,
    };

    // this.h1Ref = createRef();
    // this.counterRef = createRef();
    // console.log("constructor", document.getElementById("heading"))
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }

  // not call once infact it will call on evety state or props change
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps);
    // console.log("getDerivedStateFromProps", document.getElementById("heading"))
    return {
      greet: `Hello, ${nextProps.name}`,
    };
  }

  // call only once Like constructor
  async componentDidMount() {
    console.time("findElement");
    // console.log("componentDidMount", document.getElementById("heading"))
    this.h1Ref.current.style.color = "red";
    this.counterRef.current.style.color = "blue";
    this.counterRef.current.style.fontSize = "24px";
    console.timeEnd("findElement");
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const json = awahttps://jsonplaceholder.typicode.com/comments/1it res.json();
      this.setState({ comment: json });
      console.log(json);
    } catch (error) {}
  }

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

  // render html into DOM
  render() {
    console.log("render");
    // console.log("render", document.getElementById("heading"))
    const { designation } = this.props;
    const { counter, greet, comment } = this.state;

    return (
      <>
        <h1 ref={this.h1Ref}>{greet}</h1>
        {comment && (
          <>
            <h2>{comment.name}</h2>
            <a href={`mailto:${comment.email}`}>{comment.email}</a>
            <p>{comment.body}</p>
          </>
        )}
        <p
          style={{
            textDecoration: "underline",
          }}
        >
          {designation}
        </p>
        <button onClick={this.increment}>Increment</button>
        <p ref={this.counterRef}>{counter}</p>
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
