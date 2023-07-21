import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="spinner-grow text-danger"
        role="status"
        style={{ height: "75px", width: "75px" }}
      ></div>
    </div>
  );
};

export default Loading;
