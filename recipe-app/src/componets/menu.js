import "../styles/menu.css";

export default function menu() {
  return (
    <section className="nav-section">
      <div className="logo">
        <h1>
          C<span>oo</span>kBuddy
        </h1>
      </div>
      <nav>
        <li>
          <div className="home"></div>
          Home
        </li>
        <li>Explore</li>
        <li>Favorites</li>
        <li>Help</li>
        <li>Settings</li>
      </nav>
    </section>
  );
}
