import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App1 from "./App1";
import "./index.css";

// App1.getDerivedStateFromProps = (nextProps, prevState) => {
//   console.log("getDerivedStateFromProps", nextProps);
//   return {
//     greet: `Hello, ${nextProps.name}`,
//   };
// };

class Main extends Component {
  state = {
    name: "Rohit Sharma",
  };

  changeName = () => {
    this.setState({ name: "Shikhar Dhavan" });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <App name="Virat Kohli" designation="Software Engineer" />
        {/* this is instance of App1 component */}
        {/* const app1 = new App1({ name: name, designation: "Indian Caption"}) */}
        <App1 name={name} designation="Indian Caption" />

        {/* <App1 name="Rishab Panth" designation="Wicket keeper" /> */}

        <button type="button" onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
