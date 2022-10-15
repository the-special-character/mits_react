import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// style should be applied as camel case
// props and state

const App = () => {
  return (
    <>
      <h1>Yagnesh Modh</h1>
      <p style={{
        textDecoration: "underline"
      }}>Software Engineer</p>
    </>
  );
};

// create a component and display

// h1 -> your name 
// p -> write your designation/role
// apply underline using style in role
// Yagnesh Modh
// software engineer
// -----------------

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
