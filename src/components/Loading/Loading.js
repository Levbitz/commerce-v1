import React from "react";
import Loader from "../../Assets/Images/gif/loader.gif";

function Loading() {
  return (
    <div>
      <h1>Loading</h1>
      <img src={Loader} alt="" />
    </div>
  );
}

export default Loading;
