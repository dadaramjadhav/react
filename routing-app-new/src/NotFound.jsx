import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>NotFound</div>
      <button onClick={() => navigate("/")}>go to home</button>
    </>
  );
};
export default NotFound;
