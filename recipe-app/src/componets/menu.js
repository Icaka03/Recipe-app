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
          <p>Home</p>
        </li>
        <li>
          <div className="discover"></div>
          <p>Explore</p>
        </li>
        <li>
          <div className="favorite"></div>
          <p>Favorites</p>
        </li>
        <li>
          <div className="help"></div>
          <p>Help</p>
        </li>
        <li>
          <div className="settings"></div>
          <p>Settings</p>
        </li>
      </nav>
    </section>
  );
}
