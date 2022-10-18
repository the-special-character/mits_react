import React from 'react'


// function component
const App = ({ name, designation }) => {
  return (
    <>
      <h1>{name}</h1>
      <p style={{
        textDecoration: "underline"
      }}>{designation}</p>
      <input type="checkbox" />
    </>
  );
};

export default App;