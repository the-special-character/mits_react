import React, { Component, createRef } from "react";
import { PureComponent } from "react";
import shallowCompare from "react-addons-shallow-compare";

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
// getDerivedStateFromProps
// shouldComponentUpdate / PureComponent / memo
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

// UnMounting

// Error

// Props are immutable
//

class App1 extends PureComponent {
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
      list: [],
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

  mouseMove = () => {
    console.log("mouse Move...");
  };
  // call only once Like constructor
  async componentDidMount() {
    console.time("findElement");
    document.addEventListener("mousemove", this.mouseMove);

    this.interval = setInterval(() => { console.log("interval") }, 1000)

    // console.log("componentDidMount", document.getElementById("heading"))
    this.h1Ref.current.style.color = "red";
    this.counterRef.current.style.color = "blue";
    this.counterRef.current.style.fontSize = "24px";
    console.timeEnd("findElement");
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const json = res.json();
      this.setState({ comment: json });
      console.log(json);
    } catch (error) {}
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove)
    clearInterval(this.interval)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // if (prevProps.list.length < this.props.list.length) {
    //   const list = this.listRef.current;
    //   const snapshot = list.scrollHeight - list.scrollTop;
    //   return snapshot;
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 10 record
    // 12 records

    // if (snapshot !== null) {
    //   const list = this.listRef.current;
    //   list.scrollTop = list.scrollHeight - snapshot;
    // }

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.h1Ref.current.style.color = `#${randomColor}`;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  //   // if(this.props !== nextProps || this.state !== nextState) {
  //   //   return true
  //   // }
  //   // return false;
  // }

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
    console.log("render App1");
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
