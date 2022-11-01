import React, { memo } from 'react'


// function component
const App = ({ name, designation }) => {
  console.log("render App");
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

export default memo(App);