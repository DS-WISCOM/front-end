import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer.js";
import styles from "../css/Navbar.module.css";
import menuClosed from "../images/menu_closed.png";
import menuOpened from "../images/menu_opened.png";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  const handleExit = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);

    if (isToggled) {
      const current = document.getElementById(styles.menulist);
      current.style.display = "none";

      const item = document.getElementById(styles.toggleImage);
      item.style.display = "flex";
    }
  };

  const handleMenu = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);

    if (!isToggled) {
      const current = document.getElementById(styles.menulist);
      current.style.display = "flex";

      const item = document.getElementById(styles.toggleImage);
      item.style.display = "none";
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navberContent}>
        <div className={styles.navbarLogo}>
          <NavLink to="/" className={styles.navLink}>
            WISCOM
          </NavLink>
        </div>
        <div className={styles.toggle} onClick={handleMenu}>
          <img id={styles.toggleImage} src={menuClosed} alt="메뉴" />
        </div>

        <div className={styles.menulist} id={styles.menulist}>
          <div className={styles.exitBtn}>
            <img
              id={styles.toggleExitImage}
              src={menuOpened}
              alt="x"
              onClick={handleExit}
            />
          </div>

          <div className={styles.toggleListWrap}>
            <ul className={styles.toggleMenu}>
              <li className={styles.toggleItem}>
                <NavLink to="/" className={styles.navLink}>
                  HOME
                </NavLink>
              </li>
              <li className={styles.toggleItem}>
                <NavLink to="/about" className={styles.navLink}>
                  ABOUT
                </NavLink>
              </li>
              <li className={styles.toggleItem}>
                <NavLink to="/projects" className={styles.navLink}>
                  PROJECT
                </NavLink>
              </li>
              <li className={styles.toggleItem}>
                <NavLink to="/developers" className={styles.navLink}>
                  DEVELOPER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Navbar;
