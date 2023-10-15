import "../styles/header.css";

export default function header() {
  return (
    <div className="header">
      <div className="inputs">
        <input placeholder="What do you want to cook today?" />
        <button></button>
      </div>
      <section>
        <h1>Recommended Recipes</h1>
      </section>
    </div>
  );
}
