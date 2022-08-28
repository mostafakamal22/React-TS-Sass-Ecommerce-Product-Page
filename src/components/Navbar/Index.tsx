import { useRef } from "react";
import { Cart } from "./components/Cart";

//Nav Links Data
const navLinks: string[] = ["Collections", "Men", "Women", "About", "Contact"];

export const Navbar = (): JSX.Element => {
  const mobileNav = useRef<HTMLElement>(null);
  const navList = useRef<HTMLUListElement>(null);

  //handle open menu
  const openMenu = () => {
    //show mobile nav
    mobileNav.current!.style.visibility = "visible";

    //show nav list
    navList.current!.style.transform = "translateX(0)";
  };

  //handle close menu
  const closeMenu = () => {
    //close mobile nav
    mobileNav.current!.style.visibility = "hidden";

    //close nav list
    navList.current!.style.transform = "translateX(-15rem)";
  };

  return (
    <>
      <header>
        <div className="navbar">
          <button className="btn btn-menu" onClick={openMenu}>
            <img src="/src/assets/images/icon-menu.svg" alt="menu" />
          </button>

          <a href="#" className="brand">
            sneakers
          </a>

          <nav className="nav nav-desktop">
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

          <nav ref={mobileNav} className="nav nav-mobile">
            <ul ref={navList} className="nav-list-mobile">
              <button className="btn btn-close" onClick={closeMenu}>
                <img src="/src/assets/images/icon-close.svg" alt="close" />
              </button>
              {navLinks.map((link) => (
                <li key={link} className="nav-item">
                  <a href="#" className="nav-link-mobile">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-info">
            <button className="btn cart-btn">
              <span className="cart-products-no">1</span>
              <img src="/src/assets/images/icon-cart.svg" alt="cart" />
            </button>
            <img
              className="avatar"
              src="/src/assets/images/image-avatar.png"
              alt="avatar"
            />
            <Cart />
          </div>
        </div>
      </header>
    </>
  );
};
