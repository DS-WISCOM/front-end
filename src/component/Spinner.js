import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <PacmanLoader
        size={30}
        margin={2}
        color="#ffffff"
        speed={1}
      />
    </div>
  );
};

export default Spinner;