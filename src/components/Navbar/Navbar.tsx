//Nav Links Data
const navLinks: string[] = ["Collections", "Men", "Women", "About", "Contact"];

export const Navbar = (): JSX.Element => {
  return (
    <header>
      <div className="navbar">
        <a href="#" className="brand">
          sneakers
        </a>

        <nav className="nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link} className="nav-item">
                <a href="#" className="nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-info">
          <button className="cart">
            <img src="/src/assets/images/icon-cart.svg" alt="cart" />
          </button>
          <img
            className="avatar"
            src="/src/assets/images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};
