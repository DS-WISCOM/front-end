import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer.js";
import styles from "../css/Navbar.module.css";
import menuClosed from "../images/menu_closed.png";
import menuOpened from "../images/menu_opened.png";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (!isToggled) {
      const current = document.getElementById(styles.menulist);
      current.style.display = "none";

      const item = document.getElementById(styles.toggleImage);
      item.style.display = "flex";
    }
  }, [isToggled]);

  const handleExit = () => {
    setIsToggled(false);
  };

  const handleMenu = () => {
    setIsToggled(true);
    // console.log(isToggled);

    if (!isToggled) {
      const current = document.getElementById(styles.menulist);
      current.style.display = "flex";

      const item = document.getElementById(styles.toggleImage);
      item.style.display = "none";
    }
  };

  return (
    <div id={styles.navbar}>
      <div id={styles.navberContent}>
        <div id={styles.navbarLogo}>
          <NavLink to="/" id={styles.navLink}>
            WISCOM
          </NavLink>
        </div>

        <div id={styles.toggle} onClick={handleMenu}>
          <img id={styles.toggleImage} src={menuClosed} alt="메뉴" />
        </div>

        <div id={styles.menulist}>
          <div id={styles.exitBtn}>
            <img
              id={styles.toggleExitImage}
              src={menuOpened}
              alt="x"
              onClick={handleExit}
            />
          </div>

          <div id={styles.toggleListWrap}>
            <ul id={styles.toggleMenu}>
              <li id={styles.toggleItem}>
                <NavLink
                  to="/"
                  id={styles.navLink}
                  onClick={() => setIsToggled(false)}
                >
                  HOME
                </NavLink>
              </li>
              <li id={styles.toggleItem}>
                <NavLink
                  to="/about"
                  id={styles.navLink}
                  onClick={() => setIsToggled(false)}
                >
                  ABOUT
                </NavLink>
              </li>
              <li id={styles.toggleItem}>
                <NavLink
                  to="/projects"
                  id={styles.navLink}
                  onClick={() => setIsToggled(false)}
                >
                  PROJECT
                </NavLink>
              </li>
              <li id={styles.toggleItem}>
                <NavLink
                  to="/developers"
                  id={styles.navLink}
                  onClick={() => setIsToggled(false)}
                >
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
