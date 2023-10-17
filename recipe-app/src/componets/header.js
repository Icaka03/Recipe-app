import "../styles/header.css";

export default function header() {
  return (
    <section className="bck">
      <div className="header">
        <div className="inputs">
          <i className="icon"></i>
          <input placeholder="What do you want to cook today?"></input>
          <button></button>
        </div>
      </div>
      <div className="recipes-section">
        <h1>Recommended Recipes</h1>
        <div className="recipes-box">
          <div className="recipe"></div>
          <div className="recipe"></div>
          <div className="recipe"></div>
        </div>
        <h1>Trending Recipes</h1>
        <div className="recipes-box">
          <div className="recipe"></div>
          <div className="recipe"></div>
          <div className="recipe"></div>
        </div>
      </div>
    </section>
  );
}
