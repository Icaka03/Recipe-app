import React from "react";
import "../styles/header.css";
const Recipe = (getMeal) => {
  console.log(getMeal.data);
  return (
    <div className="recipe">
      <div>
        <img src={getMeal.data.strMealThumb} />
        <div className="category normal-color s font-link">
          {getMeal.data.strCategory}
        </div>
      </div>

      <div className="recipe-info">
        <p className="recipe-heading normal-color s heading-size font-link">
          {getMeal.data.strMeal}
        </p>
        <div className="buttons">
          <button className="recipe-button normal-color font-link">
            Ingridients
          </button>
          <button className="recipe-button normal-color font-link">
            YouTube
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
