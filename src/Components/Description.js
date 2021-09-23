import React from "react";

const Description = ({ match, data, history }) => {
  let movieDesc = data.find((el) => el.id == match.params.id);

  return (
    <div>
      <h1> {movieDesc.name}</h1>
      <h2>{movieDesc.duration}</h2>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default Description;
