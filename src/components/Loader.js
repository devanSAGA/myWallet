import React from "react";
import Loader from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#3f72af" height={100} width={100} />
    </div>
  );
};

export default CustomLoader;
