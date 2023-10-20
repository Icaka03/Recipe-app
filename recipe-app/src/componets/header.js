import React, { useState, useEffect } from "react";
import "../styles/header.css";
import Recipe from "../componets/recipe";
import Recommended from "./recommended";
export default function Header() {
  const [search, setSearch] = useState("");
  const [mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          // console.log(data);
        });
    }
  };
  const [recommended, setRecommended] = useState([]);

  const fetchRecommendedData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecommended(data.meals);
      });
  };

  useEffect(() => {
    fetchRecommendedData();
  }, []);
  return (
    <section className="bck">
      <div className="header">
        <div className="inputs">
          <i className="icon"></i>
          <input
            placeholder="What do you want to cook today?"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
          ></input>
          <button></button>
        </div>
      </div>

      <h1 className="normal-color">Recommended Recipes</h1>
      <div className="recipes-box recommended">
        {recommended.map((item) => {
          item.quantity = 3;
          return <Recommended data={item} />;
        })}
        {recommended.map((item) => {
          item.quantity = 3;
          return <Recommended data={item} />;
        })}
        {recommended.map((item) => {
          item.quantity = 3;
          return <Recommended data={item} />;
        })}
      </div>
      <h1 className="normal-color">Your search</h1>
      <div className="recipes-box">
        {mymeal == null ? (
          <p>Not Found</p>
        ) : (
          mymeal.map((res) => {
            return <Recipe data={res} />;
          })
        )}
      </div>
    </section>
  );
}
