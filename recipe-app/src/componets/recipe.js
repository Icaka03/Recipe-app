import React from "react";
import "../styles/header.css";
const Recipe = (getMeal) => {
  console.log(getMeal.data);
  return (
    <div className="recipe">
      <img src={getMeal.data.strMealThumb} />
    </div>
  );
};

export default Recipe;
