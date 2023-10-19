import React from "react";
import "../styles/header.css";
const Recipe = (getMeal) => {
  console.log(getMeal.data);
  return (
    <div className="recipe">
      <img src={getMeal.data.strMealThumb} />
      <div className="recipe-info">
        <p className="recipe-heading normal-color s heading-size">
          {getMeal.data.strMeal}
        </p>
        <div className="buttons">
          <button className="recipe-button normal-color">Ingridients</button>
          <button className="recipe-button normal-color">YouTube</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
