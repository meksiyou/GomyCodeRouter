import React from "react";

const contact = ({ history }) => {
  return (
    <div>
      <h1>contact page</h1>
      <button onClick={() => history.push("/home")}>Click</button>
    </div>
  );
};

export default contact;
